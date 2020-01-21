import React from 'react';
import Products from '../../components/Products/Products';
import styles from './ProductsPage.module.css';

const ProductsPage = () => (
    <section className={styles.section}>
        <Products />
    </section>
);

export default ProductsPage;
