import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductForm.module.css';

const ProductForm = (props) => {
    const {
        product,
        cartItems,
        setCartItems,
        setIsCartVisible,
    } = props;

    const isInCart = cartItems.find((item) => (item._id === product._id));
    const [minimum, maximum] = [1, 10];
    const [quantity, setQuantity] = useState(minimum);
    const hasReachedMinimum = (quantity === minimum);
    const hasReachedMaximum = (quantity === maximum);

    const decreaseQuantity = () => {
        if (quantity > minimum) {
            setQuantity((prevState) => (prevState - 1));
        }
    };
    const increaseQuantity = () => {
        if (quantity < maximum) {
            setQuantity((prevState) => (prevState + 1));
        }
    };
    const addToCart = (event) => {
        event.preventDefault();
        if (!isInCart) {
            const newCartItem = {
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity,
            };
            setCartItems((prevState) => [...prevState, newCartItem]); // Update cart
            setIsCartVisible(true); // Show cart
            setQuantity(minimum); // Reset quantity
        }
    };

    return (
        <form onSubmit={addToCart} className={styles.container}>
            <h2 className={styles.name}>{product.name}</h2>
            <h3 className={styles.price}>{`$${product.price.toLocaleString()}`}</h3>
            <p className={styles.abstract}>{product.abstract}</p>
            <div className={styles.quantity}>
                <span className={styles.label}>Quantity</span>
                <div className={styles.controls}>
                    <button
                        type="button"
                        disabled={isInCart || hasReachedMinimum}
                        onClick={decreaseQuantity}
                        className={styles.control}
                    >
                        <>-</>
                    </button>
                    <span className={styles.quantityText}>{quantity}</span>
                    <button
                        type="button"
                        disabled={isInCart || hasReachedMaximum}
                        onClick={increaseQuantity}
                        className={styles.control}
                    >
                        <>+</>
                    </button>
                </div>
            </div>
            <button
                type="submit"
                disabled={isInCart}
                onTouchStart={null}
                className={styles.submit}
            >
                {isInCart ? 'Already in Cart' : 'Add to Cart'}
            </button>
        </form>
    );
};

ProductForm.propTypes = {
    product: PropTypes.exact({
        _id: PropTypes.string,
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string),
        abstract: PropTypes.string,
        description: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
        dimensions: PropTypes.exact({
            width: PropTypes.number,
            depth: PropTypes.number,
            height: PropTypes.number,
        }),
        releasedAt: PropTypes.number,
        salesVolume: PropTypes.number,
    }).isRequired,
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

export default ProductForm;
