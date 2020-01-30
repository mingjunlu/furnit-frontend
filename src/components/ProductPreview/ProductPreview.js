import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronLeftIcon } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/icons/chevron-right.svg';
import styles from './ProductPreview.module.css';

const ProductPreview = ({ images }) => {
    const [minimum, maximum] = [0, (images.length - 1)];
    const [selectedIndex, setSelectedIndex] = useState(minimum);
    const hasReachedMinimum = (selectedIndex === minimum);
    const hasReachedMaximum = (selectedIndex === maximum);

    const decreaseIndex = () => {
        if (selectedIndex > minimum) {
            setSelectedIndex((prevState) => (prevState - 1));
        }
    };
    const increaseIndex = () => {
        if (selectedIndex < maximum) {
            setSelectedIndex((prevState) => (prevState + 1));
        }
    };

    const updateIndex = (event) => {
        const button = event.target.parentElement;
        const index = Number(button.dataset.index);
        setSelectedIndex(index);
    };

    return (
        <>
            <aside className={styles.buttons}>
                {images.map((image, index) => {
                    const className = (index === selectedIndex)
                        ? `${styles.button} ${styles.highlighted}`
                        : styles.button;
                    return (
                        <button
                            type="button"
                            onClick={updateIndex}
                            className={className}
                            data-index={index}
                            key={image}
                        >
                            <img src={image} className={styles.thumbnail} alt="" />
                        </button>
                    );
                })}
            </aside>
            <picture className={styles.picture}>
                <button
                    type="button"
                    disabled={hasReachedMinimum}
                    onClick={decreaseIndex}
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                >
                    <ChevronLeftIcon className={styles.arrowIcon} />
                </button>
                <img src={images[selectedIndex]} className={styles.img} alt="" />
                <button
                    type="button"
                    disabled={hasReachedMaximum}
                    onClick={increaseIndex}
                    className={`${styles.arrow} ${styles.arrowRight}`}
                >
                    <ChevronRightIcon className={styles.arrowIcon} />
                </button>
            </picture>
        </>
    );
};

ProductPreview.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductPreview;
