import React from 'react';
import styles from './ChatHeader.module.css';

const ChatHeader = ({profile}) => {
    return (
        <>
            <div className={styles.chat__header}>
                <img className={styles.user__avatar} src={profile.image} alt="" />
                <p className={styles.user__name}>{profile.name}</p>
            </div>
        </>
    )
};

export default ChatHeader;