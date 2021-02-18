import React from "react";
import classes from "./Message.module.css";

function Message(props) {
  return (
    <div>
      <div
        className={props.class === "current" ? classes.message : classes.other}
      >
        <p className={classes.current}>@{props.user}</p>
        <p className={classes.main}>{props.message}</p>
      </div>
    </div>
  );
}
export default Message;
