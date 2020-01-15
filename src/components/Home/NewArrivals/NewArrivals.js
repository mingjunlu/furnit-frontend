import React from 'react';
import useFetch from '../../../hooks/useFetch';
import styles from './NewArrivals.module.css';

const NewArrivals = () => {
    const newArrivals = useFetch('/api/products?sort=releasedAt&limit=4', undefined, []);

    if (newArrivals instanceof Error) {
        return (
            <section className={styles.section}>
                <h2>Cannot get new arrivals</h2>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>New Arrivals</h2>
            <div className={styles.newArrivals}>
                {newArrivals.map((product) => (
                    <article key={product._id}>
                        <a href={`/shop/${product.category}/${product._id}`} className={styles.link}>
                            <picture>
                                <img
                                    src={product.images[0]}
                                    className={styles.img}
                                    alt={product.name}
                                />
                            </picture>
                        </a>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.price}>{`$${product.price.toLocaleString()}`}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;