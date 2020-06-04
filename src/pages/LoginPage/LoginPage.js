import React, { useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [name, setName] = useState('');
    const updateName = (event) => {
        const textWithoutSpaces = event.target.value.trim();
        setName(textWithoutSpaces);
    };

    const [password, setPassword] = useState('');
    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    const { state: locationState } = useLocation();
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');
    const submitButtonElement = useRef(null);
    const submitForm = async (event) => {
        event.preventDefault();
        submitButtonElement.current.disabled = true;
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password }),
            });
            const { success, message } = await response.json();
            if (!success) { throw new Error(message); }
            const { from } = locationState || { from: { pathname: '/member' } };
            history.replace(from);
        } catch (error) {
            submitButtonElement.current.disabled = false;
            setErrorMessage(error.message);
        }
    };

    return (
        <section className={styles.section}>
            <form onSubmit={submitForm} className={styles.form}>
                <h2 className={styles.heading}>Login</h2>
                <p className={styles.message} style={{ color: errorMessage ? 'var(--red)' : null }}>
                    {errorMessage || 'Log in to your account'}
                </p>
                <label htmlFor="username" className={styles.label}>
                    <input
                        className={styles.input}
                        id="username"
                        onChange={updateName}
                        placeholder="Username"
                        required
                        type="text"
                        value={name}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        className={styles.input}
                        id="password"
                        onChange={updatePassword}
                        placeholder="Password"
                        required
                        type="password"
                        value={password}
                    />
                </label>
                <button
                    className={styles.submit}
                    ref={submitButtonElement}
                    type="submit"
                >
                    <>Log In</>
                </button>
                <p className={styles.message}>
                    <>New to Furnit? </>
                    <Link to="/register" className={styles.link}>Create an account</Link>
                    <>.</>
                </p>
            </form>
        </section>
    );
};

export default LoginPage;
