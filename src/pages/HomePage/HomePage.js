import React from 'react';
import Banners from '../../components/Banners/Banners';
import BestSellers from '../../components/BestSellers/BestSellers';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import styles from './HomePage.module.css';

const HomePage = () => (
    <section className={styles.section}>
        <Banners />
        <BestSellers />
        <NewArrivals />
    </section>
);

export default HomePage;
