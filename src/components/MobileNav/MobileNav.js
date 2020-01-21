import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './MobileNav.module.css';

const MobileNav = ({ toggleNav }) => {
    useScrollLock();
    const links = [
        { to: '/', text: 'Home' },
        { to: '/products', text: 'Products' },
        { to: '/blog', text: 'Blog' },
        { to: '/news', text: 'News' },
        { to: '/login', text: 'Login' },
    ];
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {links.map((link) => (
                    <NavLink
                        exact
                        to={link.to}
                        onClick={toggleNav(false)}
                        className={styles.navLink}
                        activeClassName={styles.active}
                        key={link.to}
                    >
                        {link.text}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

MobileNav.propTypes = {
    toggleNav: PropTypes.func.isRequired,
};

export default MobileNav;
