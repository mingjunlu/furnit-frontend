import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
    const { search } = useLocation();

    const response = useFetch('/api/products');
    if (response.success === false) {
        return (
            <section className={styles.container}>
                <h2>Cannot get products</h2>
            </section>
        );
    }

    const isLoading = (Object.keys(response).length === 0);
    if (isLoading) { return <Loading />; }

    const query = queryString.parse(search);
    const filteredProducts = response.data.filter((product) => {
        if (!query.category) { return true; }
        const category = Array.isArray(query.category)
            ? query.category[query.category.length - 1]
            : query.category;
        return (product.category === category);
    });

    const hasNoProducts = (filteredProducts.length === 0);
    if (hasNoProducts) {
        return (
            <section className={styles.section}>
                <section className={styles.container}>
                    <h2 className={styles.heading}>Products</h2>
                    <p style={{ fontSize: 'var(--m-plus)', textAlign: 'center' }}>No results found.</p>
                </section>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <section className={styles.container}>
                <h2 className={styles.heading}>Products</h2>
                <div className={styles.products}>
                    {filteredProducts.map((product) => (
                        <article key={product._id}>
                            <Link to={`/products/${product._id}`} className={styles.link}>
                                <picture>
                                    <img
                                        src={product.images[0]}
                                        className={styles.img}
                                        alt={product.name}
                                    />
                                </picture>
                            </Link>
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.price}>{`$${product.price.toLocaleString()}`}</p>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default ProductsPage;
