import React from 'react';
import { Link } from 'react-router-dom';
import useScrollLock from '../../../../hooks/useScrollLock';
import styles from './MobileNav.module.css';

const MobileNav = () => {
    useScrollLock();
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li><Link to="/home" className={styles.navLink}>Home</Link></li>
                <li><Link to="/shop" className={styles.navLink}>Shop</Link></li>
                <li><Link to="/blog" className={styles.navLink}>Blog</Link></li>
                <li><Link to="/login" className={styles.navLink}>Login</Link></li>
            </ul>
        </nav>
    );
};

export default MobileNav;
