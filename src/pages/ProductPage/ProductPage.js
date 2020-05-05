import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loading from '../../components/Loading/Loading';
import ProductPreview from '../../components/ProductPreview/ProductPreview';
import ProductForm from '../../components/ProductForm/ProductForm';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import styles from './ProductPage.module.css';

const ProductPage = ({ cartItems, setCartItems, setIsCartVisible }) => {
    const { id } = useParams();
    const product = useFetch(`/api/products/${id}`, undefined, {});

    if (product instanceof Error) {
        const hasNotFound = (product.code === 404);
        if (hasNotFound) { return <NotFoundPage />; }
        return (
            <section className={styles.section}>
                <section className={styles.container}>
                    <h2>Cannot get product</h2>
                </section>
            </section>
        );
    }

    const isEmpty = (Object.keys(product).length === 0);
    if (isEmpty) { return <Loading />; }

    return (
        <section className={styles.section}>
            <section className={styles.container}>
                <ProductPreview images={product.images} />
                <ProductForm
                    product={product}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setIsCartVisible={setIsCartVisible}
                />
            </section>
            <section className={styles.container}>
                <ProductInfo
                    description={product.description}
                    features={product.features}
                    dimensions={product.dimensions}
                />
            </section>
        </section>
    );
};

ProductPage.propTypes = {
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

export default ProductPage;
