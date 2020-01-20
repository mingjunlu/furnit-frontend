import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as CancelIcon } from '../../../assets/icons/cancel.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as BagIcon } from '../../../assets/icons/bag.svg';
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';
import styles from './Header.module.css';

const Header = () => {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const toggleNav = () => { setIsMobileNavVisible((prevState) => !prevState); };
    const HeaderLeftIcon = () => (isMobileNavVisible
        ? <CancelIcon className={styles.cancelIcon} />
        : <MenuIcon className={styles.menuIcon} />
    );

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.menu}`}
                    onClick={toggleNav}
                >
                    <HeaderLeftIcon />
                </button>
                <Nav />
                <Link to="/" className={styles.logo} aria-label="Go to homepage">
                    <LogoIcon className={styles.logoIcon} />
                </Link>
                <div className={styles.buttons}>
                    <button disabled type="button" className={`${styles.button} ${styles.user}`}>
                        <UserIcon className={styles.userIcon} />
                    </button>
                    <button disabled type="button" className={styles.button}>
                        <BagIcon className={styles.bag} />
                    </button>
                </div>
            </header>
            {isMobileNavVisible && <MobileNav />}
        </section>
    );
};

export default Header;
