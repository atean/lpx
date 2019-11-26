import React from 'react';
import './App.css';
import Logger from "./Logger/MainLogger";
import Pointer from "./Pointer/Pointer";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      This component will hold both Pointer and Logger
      <Logger></Logger>
      <Pointer></Pointer>
    </div>
  );
}


export default App;
