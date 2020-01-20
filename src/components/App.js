import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './shared/Header/Header';
import Home from './Home/Home';
import Footer from './shared/Footer/Footer';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        <Footer />
    </Router>
);

export default App;
