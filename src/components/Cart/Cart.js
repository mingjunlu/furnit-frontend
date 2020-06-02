import React from 'react';
import PropTypes from 'prop-types';
import useScrollLock from '../../hooks/useScrollLock';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

const Cart = ({ cartItems, setCartItems, setIsCartVisible }) => {
    useScrollLock(); // Prevent scrolling

    const hideCart = () => { setIsCartVisible(false); };
    const stopPropagation = (event) => { event.stopPropagation(); };

    const isEmpty = (cartItems.length === 0);
    if (isEmpty) {
        return (
            <div
                role="button"
                onClick={hideCart}
                onKeyUp={null}
                tabIndex="0"
                className={styles.overlay}
            >
                <div onClick={stopPropagation} className={styles.container} role="presentation">
                    <header className={styles.header}>
                        <h3 className={styles.heading}>Shopping Cart</h3>
                        <button type="button" onClick={hideCart} className={styles.cancel}>
                            <CancelIcon className={styles.cancelIcon} />
                        </button>
                    </header>
                    <div className={styles.items}>
                        <p className={styles.item}>The cart is empty.</p>
                    </div>
                </div>
            </div>
        );
    }

    const subtotalPrice = cartItems.reduce((total, current) => {
        const { price, quantity } = current;
        return (total + (price * quantity));
    }, 0);

    return (
        <div
            role="button"
            onClick={hideCart}
            onKeyUp={null}
            tabIndex="0"
            className={styles.overlay}
        >
            <form onClick={stopPropagation} className={styles.container} role="presentation">
                <header className={styles.header}>
                    <h3 className={styles.heading}>Shopping Cart</h3>
                    <button type="button" onClick={hideCart} className={styles.cancel}>
                        <CancelIcon className={styles.cancelIcon} />
                    </button>
                </header>
                <ul className={styles.items}>
                    {cartItems.map((item) => (
                        <CartItem
                            item={item}
                            setCartItems={setCartItems}
                            setIsCartVisible={setIsCartVisible}
                            key={item._id}
                        />
                    ))}
                </ul>
                <div className={styles.footer}>
                    <p className={styles.subtotal}>
                        <span>Subtotal:</span>
                        <span className={styles.price}>
                            {`$${subtotalPrice.toLocaleString()}`}
                        </span>
                    </p>
                    <button disabled type="button" className={styles.submit}>
                        <>Checkout (coming soon)</>
                    </button>
                </div>
            </form>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.exact({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        quantity: PropTypes.number,
    })).isRequired,
    setCartItems: PropTypes.func.isRequired,
    setIsCartVisible: PropTypes.func.isRequired,
};

export default Cart;
