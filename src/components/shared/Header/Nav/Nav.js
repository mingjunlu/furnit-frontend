import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={styles.navLinks}>
            <li><Link to="/shop" className={styles.navLink}>Shop</Link></li>
            <li><Link to="/blog" className={styles.navLink}>Blog</Link></li>
            <li><Link to="/news" className={styles.navLink}>News</Link></li>
        </ul>
    </nav>
);

export default Nav;
