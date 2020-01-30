import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronDownIcon } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUpIcon } from '../../assets/icons/chevron-up.svg';
import styles from './Expandable.module.css';

const Expandable = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleVisibility = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const ChevronIcon = () => (isExpanded
        ? <ChevronUpIcon className={styles.icon} />
        : <ChevronDownIcon className={styles.icon} />
    );

    return (
        <div className={styles.container}>
            <button type="button" onClick={toggleVisibility} className={styles.button}>
                <span className={styles.title}>{title}</span>
                <ChevronIcon />
            </button>
            <div className={isExpanded ? '' : styles.content}>
                {children}
            </div>
        </div>
    );
};

Expandable.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Expandable;
