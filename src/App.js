import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Message from './Component/Message';
import db from './Component/Firebase';
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [messages, setMessages] = useState([]);
  const messageEnd = useRef(null);


  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      userName: currentUser,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  useEffect(() => {
    setCurrentUser(prompt('Please enter your name'));

  }, []);
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      scrollToBottom();
    })


  }, []);
  const scrollToBottom = () => {
    console.log("Scroll")
    let scrollPosition = messageEnd.current.offsetTop + 40;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }

  return (
    <div className="App">
      <img className="app__logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80" alt="messenger logo" />
      <h2>Messenger App</h2>
      <h4>Welcome {currentUser || 'anonymous'}</h4>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            value={input}
            className="app__input"
            placeholder="Enter a message..."
            onChange={(e) => setInput(e.target.value)} />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message key={id} currentUser={currentUser} message={message} />
          ))
        }
      </FlipMove>
      <div style={{ marginBottom: 80 }}
        ref={messageEnd}>
      </div>
    </div>
  );
}

export default App;
