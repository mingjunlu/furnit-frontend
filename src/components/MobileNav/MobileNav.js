import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useScrollLock from '../../hooks/useScrollLock';
import styles from './MobileNav.module.css';

const MobileNav = ({ toggleNav }) => {
    useScrollLock(); // Prevent scrolling]

    const links = [
        { to: '/', text: 'Home', isDisabled: false },
        { to: '/products', text: 'Products', isDisabled: false },
        { to: '/blog', text: 'Blog', isDisabled: true },
        { to: '/news', text: 'News', isDisabled: true },
        { to: '/member', text: 'Member', isDisabled: false },
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {links.map((link) => (link.isDisabled ? (
                    <li className={styles.disabled} key={link.to}>
                        {`${link.text} (coming soon)`}
                    </li>
                ) : (
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
                )))}
            </ul>
        </nav>
    );
};

MobileNav.propTypes = {
    toggleNav: PropTypes.func.isRequired,
};

export default MobileNav;
