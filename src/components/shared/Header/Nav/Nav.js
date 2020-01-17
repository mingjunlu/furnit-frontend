import React from 'react';
import styles from './Nav.module.css';

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={styles.navLinks}>
            <li><a href="/shop" className={styles.navLink}>Shop</a></li>
            <li><a href="/blog" className={styles.navLink}>Blog</a></li>
            <li><a href="/news" className={styles.navLink}>News</a></li>
        </ul>
    </nav>
);

export default Nav;
