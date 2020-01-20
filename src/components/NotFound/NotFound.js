import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NotFoundIcon } from '../../assets/icons/404.svg';
import styles from './NotFound.module.css';

const NotFound = () => (
    <section className={styles.section}>
        <article className={styles.container}>
            <picture className={styles.iconWrapper}>
                <NotFoundIcon className={styles.icon} />
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

export default NotFound;
