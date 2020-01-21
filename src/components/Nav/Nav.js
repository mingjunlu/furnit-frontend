import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    const links = [
        { to: '/', text: 'Home' },
        { to: '/products', text: 'Products' },
        { to: '/blog', text: 'Blog' },
        { to: '/news', text: 'News' },
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {links.map((link) => (
                    <NavLink
                        exact
                        to={link.to}
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

export default Nav;
