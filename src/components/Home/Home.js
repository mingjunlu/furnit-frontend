import React from 'react';
import Banners from './Banners/Banners';
import BestSellers from './BestSellers/BestSellers';
import NewArrivals from './NewArrivals/NewArrivals';
import styles from './Home.module.css';

const Home = () => (
    <section className={styles.section}>
        <Banners />
        <BestSellers />
        <NewArrivals />
    </section>
);

export default Home;
