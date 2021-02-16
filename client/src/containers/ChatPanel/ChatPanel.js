import React, { useState } from "react";
import classes from "./ChatPanel.module.css";
const ChatPanel = (props) => {
  let [message, setMessage] = useState("");
  let [currentChat, setCurrentChat] = useState([]);
  return (
    <div className={classes.chat}>
      <div className={classes.Upper}></div>
      <div className={classes.messagesBox}></div>
      <div className={classes.bottom}>
        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </div>
    </div>
  );
};
export default ChatPanel;
