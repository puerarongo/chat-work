import React from 'react';
import { Outlet } from 'react-router-dom';

import UserList from "../usersList/UsersList";
import PropTypes from 'prop-types';
import styles from './Main.module.css';



const Main = ({ propId, propTime, propText }) => {

    return (
        <div className={styles.main__container}>
            <div className={styles.sidebar}>
                <UserList id={propId} time={propTime} text={propText} />
            </div>
            <div className={styles.chat}>
                <Outlet />
            </div>
        </div>
    )
};


Main.propTypes = {
    propId: PropTypes.string.isRequired,
    propText: PropTypes.string.isRequired,
    propTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired
};

export default Main;