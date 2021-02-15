import React from "react";
import classes from "./UserLayout.module.css";
export default function UserLayout(props) {
  return (
    <div className={classes.user}>
      <img src={props.image} alt="default" />
      <p>{props.username}</p>
    </div>
  );
}
