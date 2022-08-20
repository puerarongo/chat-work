import React, {useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import iconsPath from '../../service/iconsPath';
import usersCollection from '../../service/apiImmitation';
import getMessage from '../../service/getMessage';
import { setObj, getObj } from '../../service/localStorageFuncs';
import arraysFunc from '../../service/arraysFunc';

import ChatHeader from 'components/chatHeader/ChatHeader';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';

const delay = 8000;

const Chat = ({ messageFunc }) => {
    const id = useParams().user;
    const storageKey = "keyStorage";
    const intervalKey = id;
    
    const [profile, setProfile] = useState("");
    const [text, setText] = useState("");
    const [message, setMessage] = useState(getObj(storageKey) || []);
    const [filtredUser, setFiltredUser] = useState("");

    const valueRef1 = useRef(0)
    const valueRef2 = useRef(0)
    const repeatRequest = useRef(norisResponse);

    // ? Auto scroll
    const bottomRef = useRef(null);


    // ! React Hook useEffect
    useEffect(() => {
        if (getObj(storageKey) && id !== valueRef1.current) {
            const arr = arraysFunc(getObj(storageKey), id).slice(-1);
            
            if (getObj(intervalKey) !== null && arr && !valueRef2.current) {

                if (arr[0].sender === true) {
                    const startTime = getObj(intervalKey) + delay;
                    const timeNow = new Date().getTime();

                    if (startTime <= timeNow) {
                        console.log(23, id)
                        return repeatRequest.current(id, 0)
                    }
                    else {
                        const difference = timeNow - startTime
                        console.log(Math.abs(difference))
                        return repeatRequest.current(id, Math.abs(difference))
                    }
                }
            }
        }
    }, [id, intervalKey]);


    useEffect(() => {
        const userProfile = usersCollection.find(elem => elem.id === Number(id));
        setProfile(userProfile);

        valueRef1.current = id
    }, [id]);


    useEffect(() => {
        setObj(storageKey, message);
        setFiltredUser(arraysFunc(message, id));    
    }, [id, message]);


    // ? [mesage] ?
    useEffect(() => {
        if (filtredUser.slice(-1).length > 0) {
            messageFunc(filtredUser.slice(-1)[0])
        }
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [filtredUser, messageFunc]);


    // ! Form func
    const inputHandler = e => setText(e.currentTarget.value);

    const submitHandler = e => {
        e.preventDefault();
        if (!text) return

        if (!getObj(storageKey)) {
            setMessage([{ id: id, message: text, sender: true, time: new Date().getTime() }])
        }
        else {
            setMessage([{ id: id, message: text, sender: true, time: new Date().getTime() },
            ...getObj(storageKey)])
        }

        valueRef2.current = 1;
        norisResponse(id, delay);
        setText("");
    };


    function norisResponse(id, time) {
        if (valueRef2.current > 0) {
            const startTime = new Date().getTime();
            setObj(intervalKey, startTime);
        }
        
        setTimeout(() => {
            getMessage()
                .then(({ data }) => {
                    setObj(intervalKey, null)
                    setInterval(getObj(intervalKey));
                    setMessage([{ id: id, message: data.value, sender: false, time: new Date().getTime() },
                    ...getObj(storageKey)])
            })
                .catch(err => {
                    console.error(err)
                })
        }, time);
    };






    return (
        <>   
        {profile && (
            <>
            <ChatHeader profile={profile} />
            <div className={styles.chat__container}>
                <ul className={styles.chat__list}>
                    {filtredUser.map(({ message, sender, time }) => {
                        return (<li key={time} className={styles.chat__item}> 
                            {!sender ? (
                                <>
                                    <img className={styles.contact__avatar} src={profile.image} alt="" />
                                    <div className={styles.contact__container}>
                                        <p className={styles.contact__item}>{message}</p>
                                        <p className={styles.contact__date}>{new Date(time).toLocaleString("en-US")}</p>
                                    </div>
                                </>    
                                ) : (
                                    <>
                                    <div className={styles.user__container}>
                                        <p className={styles.user__item}>{message}</p>
                                        <p className={styles.contact__date}>{new Date(time).toLocaleString("en-US")}</p>
                                    </div>
                                </>    
                                )}
                        </li>)                           
                    })}
                    </ul>
                    <div ref={bottomRef} />    
            </div>
            <div className={styles.submisson__container}>
                <form className={styles.form} onSubmit={submitHandler}>
                    
                    <input
                        className={styles.submisson__input}
                        placeholder="Type your message"
                        type="text"
                        name="sendMessage"
                        value={text}
                        onChange={inputHandler}
                    />
                        <button className={styles.submission__button}>
                            <svg className={styles.arrow__svg}>
                                <use href={iconsPath.arrow + "#arrow"}></use>
                            </svg>
                        </button>
                </form>
            </div>
            </>
            )
        }
        </>
    )
};


Chat.propTypes = {
    messageFunc: PropTypes.func.isRequired
};

export default Chat;