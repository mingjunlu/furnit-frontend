import React from 'react';
import { Redirect } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import styles from './MemberPage.module.css';

const MemberPage = () => {
    const response = useFetch('/api/users/me');
    if (response.success === false) {
        return <Redirect to="/login" />;
    }

    const isLoading = (Object.keys(response).length === 0);
    if (isLoading) { return <Loading />; }

    return (
        <section className={styles.section}>
            <section className={styles.container}>
                <h1 className={styles.heading}>
                    {`Welcome back, ${response.data.name}.`}
                </h1>
            </section>
        </section>
    );
};

export default MemberPage;
