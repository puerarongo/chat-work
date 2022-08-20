import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Filter from '../filter/Filter';
import UserItem from "../userItem/UserItem";
import apiImmitation from "../../service/apiImmitation";
import styles from './UsersList.module.css';


const UsersList = ({ id, time, text }) => {
    const [filter, setFilter] = useState("");
    const filterHandler = e => setFilter(e.currentTarget.value);
    
    const filtred = apiImmitation
        .filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()))
        .map(elem => {
            if (elem.id === Number(id)) {
                elem.text = text
                elem.time = time
            }
            return elem
        })
        .sort((a, b) => b.time - a.time);
    

    return (
        <>
            <Filter filter={filter} filterFunc={filterHandler} />
            <div className={styles.list__container}>
                <h1 className={styles.list__title}>Chats</h1>
                <ul className={styles.list}>
                    {filtred.length > 0 ?
                        (filtred.map(({id, name, image, text, time}) => {
                            return (
                                <li className={styles.item} key={id}>
                                    <Link to={`${id}`}>
                                        <UserItem id={id} name={name} img={image} text={text} time= {time} />
                                    </Link>
                                </li>
                            )
                        })
                        ) : (
                            <div className={styles.notfound}>
                                <p className={styles.notfound__text}>Sorry, but this contact not found!</p>
                            </div>
                        )    
                    }
                </ul>
            </div>
        </>
    )
};

export default UsersList;