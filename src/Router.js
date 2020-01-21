import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/products">
                <ProductsPage />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Router;
