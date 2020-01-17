import React from 'react';
import styles from './MobileNav.module.css';

const MobileNav = () => (
    <nav className={styles.nav}>
        <ul className={styles.navLinks}>
            <li><a href="/home" className={styles.navLink}>Home</a></li>
            <li><a href="/shop" className={styles.navLink}>Shop</a></li>
            <li><a href="/blog" className={styles.navLink}>Blog</a></li>
            <li><a href="/login" className={styles.navLink}>Login</a></li>
        </ul>
    </nav>
);

export default MobileNav;
