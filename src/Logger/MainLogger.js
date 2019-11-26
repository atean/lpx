
import React from "react";
import Capture from "./UIComponent/Capture";


class MainLogger extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><p>This is Main logger App</p>
            <Capture ></Capture></div>
        )
    }
}

export default MainLogger;