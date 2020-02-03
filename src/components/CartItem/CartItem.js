import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import styles from './CartItem.module.css';

const CartItem = ({ item, setCartItems, setIsCartVisible }) => {
    const removeFromCart = () => {
        const isNotTarget = (cartItem) => (cartItem._id !== item._id);
        setCartItems((prevState) => prevState.filter(isNotTarget));
    };
    const hideCart = (event) => {
        event.stopPropagation();
        setIsCartVisible(false);
    };

    return (
        <li>
            <Link to={`/products/${item._id}`} onClick={hideCart} className={styles.container}>
                <picture className={styles.picture}>
                    <img src={item.image} className={styles.img} alt="" />
                </picture>
                <div className={styles.info}>
                    <h4 className={styles.name}>{item.name}</h4>
                    <p className={styles.quantity}>{`Quantity: ${item.quantity}`}</p>
                    <p className={styles.price}>{`$${item.price.toLocaleString()}`}</p>
                </div>
                <button
                    type="button"
                    onClick={removeFromCart}
                    className={styles.button}
                >
                    <TrashIcon className={styles.icon} />
                </button>
            </Link>
        </li>
    );
};

CartItem.propTypes = {
    item: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    setCartItems: PropTypes.func.isRequired,
    setIsCartVisible: PropTypes.func.isRequired,
};

export default CartItem;
