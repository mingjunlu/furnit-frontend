import React, { useEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    useEffect(() => {
        const logIn = async () => {
            try {
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                });
                const { success } = await response.json();
                setIsLoggedIn(success);
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        logIn();
    }, []);

    const isLoading = (isLoggedIn === undefined);
    if (isLoading) { return <Loading />; }

    if (!isLoggedIn) {
        const loginRoute = {
            pathname: '/login',
            state: { from: location },
        };
        return <Redirect to={loginRoute} />;
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...rest}>
            {children}
        </Route>
    );
};

export default PrivateRoute;
