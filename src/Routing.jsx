import React from 'react';
import './App.css';
import Logger from "./Logger/MainLogger";
import Pointer from "./Pointer/Pointer";
import FileUploader from "./Logger/UIComponent/Uploader";
import Capture from "./Logger/UIComponent/Capture";
import CaptureVisual from "./Logger/UIComponent/CaptureVisual";
import CaptureAudio from "./Logger/UIComponent/CaptureAudio";
import CaptureText from "./Logger/UIComponent/CaptureText";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       This component will hold both Pointer and Logger
//       <Logger></Logger>
//       <Pointer></Pointer>
//     </div>
//   );
// }


const Routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/log">Log</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/log" component={Logger}></Route>
        <Route path="/search" component={Pointer}></Route>
        <Route path="/upload_file" component={FileUploader}></Route>
        <Route path="/capture_photo_video" component={CaptureVisual}></Route>
        <Route path="/capture_audio" component={CaptureAudio}></Route>
        <Route path="/capture_text" component={CaptureText}></Route>
      </Switch>
    </div>
  </Router>
)

export default Routing;
