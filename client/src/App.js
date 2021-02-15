import React from 'react';
import classes from './App.module.css';
import NavigationPanel from './containers/NavigationPanel/NavigationPanel';
const App = (props) => {
  return (
    <div className={classes.main}>
       <NavigationPanel />
    </div>
  );
}

export default App;
