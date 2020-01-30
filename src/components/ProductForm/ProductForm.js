import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductForm.module.css';

const ProductForm = ({ product }) => {
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
                        disabled={hasReachedMinimum}
                        onClick={decreaseQuantity}
                        className={styles.control}
                    >
                        <>-</>
                    </button>
                    <span className={styles.quantityText}>{quantity}</span>
                    <button
                        type="button"
                        disabled={hasReachedMaximum}
                        onClick={increaseQuantity}
                        className={styles.control}
                    >
                        <>+</>
                    </button>
                </div>
            </div>
            <button type="submit" onTouchStart={null} className={styles.submit}>Add to Cart</button>
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
};

export default ProductForm;
