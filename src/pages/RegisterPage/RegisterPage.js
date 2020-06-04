import React, { useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
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
            const response = await fetch('/api/users', {
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
                <h2 className={styles.heading}>Register</h2>
                <p className={styles.message} style={{ color: errorMessage ? 'var(--red)' : null }}>
                    {errorMessage || 'Create a new account'}
                </p>
                <label htmlFor="username" className={styles.label}>
                    <input
                        className={styles.input}
                        id="username"
                        minLength={3}
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
                        minLength={8}
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
                    <>Create Account</>
                </button>
                <p className={styles.message}>
                    <>Already have an account? </>
                    <Link to="/login" className={styles.link}>Log in here</Link>
                    <>.</>
                </p>
            </form>
        </section>
    );
};

export default RegisterPage;
