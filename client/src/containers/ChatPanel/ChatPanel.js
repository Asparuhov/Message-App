import React, { useState } from "react";
import classes from "./ChatPanel.module.css";
import { connect } from "react-redux";
import Message from "./Message";
const ChatPanel = (props) => {
  let [message, setMessage] = useState("");
  let [currentChat, setCurrentChat] = useState([]);
  const sendMessage = () => {
    setCurrentChat((prev) =>
      prev.concat({
        name: props.user.username,
        message,
      })
    );
  };
  return (
    <div className={classes.chat}>
      <div className={classes.Upper}></div>
      <div className={classes.messagesBox}>
        {currentChat.map((chat) => {
          return (
            <Message
              class={chat.name === props.user.username ? "current" : null}
              user={chat.name}
              message={chat.message}
            />
          );
        })}
      </div>
      <div className={classes.bottom}>
        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};
export default connect(mapStateToProps)(ChatPanel);
