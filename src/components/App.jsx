import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './main/Main';
import Placeholder from './placeholder/Placeholder';
import Chat from './chat/Chat';

const App = () => {
  const [messageId, setMessageId] = useState("");
  const [messageTime, setMessageTime] = useState("");
  const [messageText, setMessageText] = useState("");

  const updateMessage = ({ id, time, message }) => {
    setMessageId(id)
    setMessageTime(time);
    setMessageText(message);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main propId={messageId} propTime={messageTime} propText={messageText} />}>
          <Route path="/" element={<Placeholder />} />
          <Route path=":user" element={<Chat messageFunc={updateMessage} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;