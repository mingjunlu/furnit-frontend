import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as CancelIcon } from '../../../assets/icons/cancel.svg';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as BagIcon } from '../../../assets/icons/bag.svg';
import styles from './Header.module.css';

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => { setIsNavVisible((prevState) => !prevState); };
    const HeaderLeftIcon = () => {
        if (isNavVisible) {
            return <CancelIcon className={styles.cancel} />;
        }
        return <MenuIcon className={styles.menu} />;
    };

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={toggleNav}
                >
                    <HeaderLeftIcon />
                </button>
                <a href="/" className={styles.logoWrapper} aria-label="Go to homepage">
                    <Logo className={styles.logo} />
                </a>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonDisabled}`}
                    disabled
                >
                    <BagIcon className={styles.bag} />
                </button>
            </header>
            <nav className={isNavVisible ? styles.nav : styles.navHidden}>
                <ul className={styles.navLinks}>
                    <li><a href="/home" className={styles.navLink}>Home</a></li>
                    <li><a href="/shop" className={styles.navLink}>Shop</a></li>
                    <li><a href="/blog" className={styles.navLink}>Blog</a></li>
                    <li><a href="/login" className={styles.navLink}>Login</a></li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;
