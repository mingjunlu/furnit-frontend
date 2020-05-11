import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MemberPage from './pages/MemberPage/MemberPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    return (
        <Router>
            <ScrollToTop />
            {isCartVisible && (
                <Cart
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setIsCartVisible={setIsCartVisible}
                />
            )}
            <Header cartItemsLength={cartItems.length} setIsCartVisible={setIsCartVisible} />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute exact path="/member">
                    <MemberPage />
                </PrivateRoute>
                <Route exact path="/products">
                    <ProductsPage />
                </Route>
                <Route exact path="/products/:id">
                    <ProductPage
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        setIsCartVisible={setIsCartVisible}
                    />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
