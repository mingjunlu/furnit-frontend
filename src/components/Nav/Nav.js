import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    const links = [
        { to: '/', text: 'Home', isDisabled: false },
        { to: '/products', text: 'Products', isDisabled: false },
        { to: '/blog', text: 'Blog', isDisabled: true },
        { to: '/news', text: 'News', isDisabled: true },
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {links.map((link) => (link.isDisabled ? (
                    <li className={styles.disabled} key={link.to}>
                        {link.text}
                    </li>
                ) : (
                    <NavLink
                        exact
                        to={link.to}
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

export default Nav;
