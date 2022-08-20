import React from "react";
import styles from './Placeholder.module.css';

const Placeholder = () => {
    return (
        <>
            <div className={styles.placeholder__container}>
                <p className={styles.placeholder__text}>Select a contact and start chatting with someone!!!</p>
            </div>
        </>
    )
};

export default Placeholder;