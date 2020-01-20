import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './MobileNav.module.css';

const MobileNav = ({ toggleNav }) => {
    useScrollLock();
    const links = [
        { to: '/', text: 'Home' },
        { to: '/shop', text: 'Shop' },
        { to: '/blog', text: 'Blog' },
        { to: '/news', text: 'News' },
        { to: '/login', text: 'Login' },
    ];
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {links.map((link) => (
                    <Link
                        to={link.to}
                        onClick={toggleNav(false)}
                        className={styles.navLink}
                        key={link.to}
                    >
                        {link.text}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

MobileNav.propTypes = {
    toggleNav: PropTypes.func.isRequired,
};

export default MobileNav;
