import React, {useState} from 'react'
import classes from './NavigationPanel.module.css';
const NavigationPanel = (props) => {
    return (
        <div className={classes.navigation}>
            <div className={classes.buttons}>
                <button type='button'>Friends</button>
                <button type='button'>Requests</button>
                <button type='button'>Add Friend</button>
            </div>
        </div>
    )
}
export default NavigationPanel;