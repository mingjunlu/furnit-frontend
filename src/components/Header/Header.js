import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as BagIcon } from '../../assets/icons/bag.svg';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import styles from './Header.module.css';

const Header = ({ cartItemsLength, setIsCartVisible }) => {
    const hasItems = (cartItemsLength > 0);
    const showCart = () => { setIsCartVisible(true); };

    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const toggleNav = (isVisible) => {
        const isUndefined = (isVisible === undefined);
        if (isUndefined) {
            return () => {
                setIsMobileNavVisible((prevState) => !prevState);
            };
        }
        return () => { setIsMobileNavVisible(isVisible); };
    };

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
                    onClick={toggleNav()}
                >
                    <HeaderLeftIcon />
                </button>
                <Nav />
                <Link to="/" onClick={toggleNav(false)} className={styles.logo}>
                    <LogoIcon className={styles.logoIcon} />
                </Link>
                <div className={styles.buttons}>
                    <button disabled type="button" className={`${styles.button} ${styles.user}`}>
                        <UserIcon className={styles.userIcon} />
                    </button>
                    <button
                        type="button"
                        onClick={showCart}
                        className={`${styles.button} ${styles.bag}`}
                    >
                        <BagIcon className={styles.bagIcon} />
                        {hasItems && <span className={styles.count}>{cartItemsLength}</span>}
                    </button>
                </div>
            </header>
            {isMobileNavVisible && <MobileNav toggleNav={toggleNav} />}
        </section>
    );
};

Header.propTypes = {
    cartItemsLength: PropTypes.number.isRequired,
    setIsCartVisible: PropTypes.func.isRequired,
};

export default Header;
