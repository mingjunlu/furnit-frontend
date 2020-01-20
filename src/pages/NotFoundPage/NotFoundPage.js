import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../assets/icons/404.svg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => (
    <section className={styles.section}>
        <article className={styles.container}>
            <picture className={styles.iconWrapper}>
                <Icon className={styles.icon} />
            </picture>
            <h2 className={styles.heading}>Page Not Found</h2>
            <p className={styles.message}>
                <span>{"It seems that we can't find what you're looking for. "}</span>
                <span>
                    {'Would you like to go back to '}
                    <Link to="/" className={styles.link}>Hompage</Link>
                    {' and try it again?'}
                </span>
            </p>
        </article>
    </section>
);

export default NotFoundPage;
