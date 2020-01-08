import React from 'react';
import styles from './Home.module.css';

const Home = () => (
    <section className={styles.section}>
        <div className={styles.mockContent}>
            {[...Array(50)].map(() => {
                const string = Math.random().toString();
                return <p className={styles.paragraph} key={string}>{string}</p>;
            })}
        </div>
    </section>
);

export default Home;
