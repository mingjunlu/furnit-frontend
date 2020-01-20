import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banners.module.css';

const Banners = () => {
    const banners = [
        {
            href: '/shop/category-1',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Banner+01',
            className: `${styles.banner} ${styles.topLeft}`,
            alt: 'Banner 01',
        },
        {
            href: '/shop/category-2',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Banner+02',
            className: `${styles.banner} ${styles.topRight}`,
            alt: 'Banner 02',
        },
        {
            href: '/shop/category-3',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Banner+03',
            className: `${styles.banner} ${styles.bottomLeft}`,
            alt: 'Banner 03',
        },
        {
            href: '/shop/category-4',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Banner+04',
            className: `${styles.banner} ${styles.bottomRight}`,
            alt: 'Banner 04',
        },
    ];

    return (
        <section className={styles.banners}>
            {banners.map((banner) => (
                <Link to={banner.href} className={banner.className} key={banner.src}>
                    <picture>
                        <img src={banner.src} className={styles.img} alt={banner.alt} />
                    </picture>
                </Link>
            ))}
        </section>
    );
};

export default Banners;
