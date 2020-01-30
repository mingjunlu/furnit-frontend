import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
    <div className={styles.container}>
        <div className={styles.spinner}>
            {[...Array(12)].map(() => (
                <div
                    className={styles.petal}
                    key={Math.random().toString()}
                />
            ))}
        </div>
    </div>
);

export default Loading;
