import React, { useState } from "react";
import UserLayout from "../../components/UserLayout/UserLayout";
import classes from "./NavigationPanel.module.css";
import userLogo from "../../assets/user.png";
import { connect } from "react-redux";
const NavigationPanel = (props) => {
  return (
    <div className={classes.navigation}>
      <div className={classes.buttons}>
        <button type="button">Friends</button>
        <button type="button">Requests</button>
        <button type="button">Add</button>
      </div>
      <div className={classes.friends}>
        <UserLayout image={userLogo} username={props.user.username} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};
export default connect(mapStateToProps)(NavigationPanel);
