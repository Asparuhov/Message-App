import React from "react";
import classes from "./Main.module.css";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import ChatPanel from "../ChatPanel/ChatPanel";
const Main = (props) => {
  return (
    <div className={classes.main}>
      <NavigationPanel />
      <ChatPanel />
    </div>
  );
};

export default Main;
