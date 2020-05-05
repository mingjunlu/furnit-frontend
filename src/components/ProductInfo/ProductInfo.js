import React from 'react';
import PropTypes from 'prop-types';
import Expandable from '../Expandable/Expandable';
import styles from './ProductInfo.module.css';

const ProductInfo = ({ description, features, dimensions }) => (
    <section className={styles.section}>
        <Expandable title="Description">
            <p className={styles.description}>{description}</p>
        </Expandable>
        <Expandable title="Features">
            <ul className={styles.features}>
                {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
        </Expandable>
        <Expandable title="Dimensions">
            <ul className={styles.features}>
                <li>{`Width: ${dimensions.width}`}</li>
                <li>{`Depth: ${dimensions.depth}`}</li>
                <li>{`Height: ${dimensions.height}`}</li>
            </ul>
        </Expandable>
    </section>
);

ProductInfo.propTypes = {
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    dimensions: PropTypes.exact({
        width: PropTypes.number,
        depth: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

export default ProductInfo;
