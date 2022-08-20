import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatHeader.module.css';

const ChatHeader = ({ profile }) => {
    return (
        <>
            <div className={styles.chat__header}>
                <img className={styles.user__avatar} src={profile.image} alt="" />
                <p className={styles.user__name}>{profile.name}</p>
            </div>
        </>
    )
};


ChatHeader.propTypes = {
    ChatHeader: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            time: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
        })
    )
};

export default ChatHeader;