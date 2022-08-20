import React from 'react';
import picturePath from '../../service/picturePath';
import iconsPath from '../../service/iconsPath';
import styles from './Filter.module.css';

const Filter = ({filter, filterFunc}) => {
    return (
        <>
            <div className={styles.filter__container}>
                <img className={styles.filter__avatar} src={picturePath.avatar} alt=""/>
                <form className={styles.filter__form}>
                    <div className={styles.input__container}>
                        <div className={styles.svg__container}>
                            <svg className={styles.loupe__svg}>
                                <use href={iconsPath.loupe+ "#loupe"}></use>
                            </svg>
                        </div>
                        <input
                            className={styles.filter__input}
                            placeholder="Search or start new chat"
                            type="text"
                            name="filter"
                            value={filter}
                            onChange={filterFunc}
                        />
                    </div>
                </form>
            </div>
        </>
    )
};

export default Filter;