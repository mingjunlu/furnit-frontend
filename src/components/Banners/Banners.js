import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banners.module.css';

const Banners = () => {
    const banners = [
        {
            href: '/products?category=sofa',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Sofas',
            className: `${styles.banner} ${styles.topLeft}`,
            alt: 'Banner for Sofas',
        },
        {
            href: '/products?category=chair',
            src: 'https://via.placeholder.com/422x422/e8e8e8/8e8e8e.png?text=Chairs',
            className: `${styles.banner} ${styles.topRight}`,
            alt: 'Banner for Chairs',
        },
        {
            href: '/products?category=bookshelf',
            src: 'https://via.placeholder.com/422x422/e8e8e8/8e8e8e.png?text=Bookshelves',
            className: `${styles.banner} ${styles.bottomLeft}`,
            alt: 'Banner for Bookshelves',
        },
        {
            href: '/products?category=bed',
            src: 'https://via.placeholder.com/800x422/e8e8e8/8e8e8e.png?text=Beds',
            className: `${styles.banner} ${styles.bottomRight}`,
            alt: 'Banner for Beds',
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
