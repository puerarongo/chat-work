import React  from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ id, name, img, text, time }) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };

    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={img} alt={id} />
                <div className={styles.user__information}>
                    <div className={styles.user__item}>
                        <p className={styles.user__name}>{name}</p>
                        <p className={styles.user__date}>{
                            typeof time === "string" ? (
                                ""
                            ) : (
                                new Date(time).toLocaleString("en-US", options)
                            )
                        }</p>
                    </div>
                    <p className={styles.user__message}>{text}</p>
                </div>
            </div>
        </>
    )
};

export default UserItem;