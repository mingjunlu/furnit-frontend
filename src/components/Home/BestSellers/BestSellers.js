import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import styles from './BestSellers.module.css';

const BestSellers = () => {
    const bestSellers = useFetch('/api/products?sort=salesVolume&limit=8', undefined, []);

    if (bestSellers instanceof Error) {
        return (
            <section className={styles.section}>
                <h2>Cannot get best-sellers</h2>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Best-Sellers</h2>
            <div className={styles.bestSellers}>
                {bestSellers.map((product) => (
                    <article key={product._id}>
                        <Link to={`/shop/${product.category}/${product._id}`} className={styles.link}>
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
    );
};

export default BestSellers;
