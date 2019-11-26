import React from "react";
import SearchEvent from "./UIComponent/SearchEvent"


class Pointer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>This is the main component for Search Application
                <SearchEvent></SearchEvent>
            </div>
        )
    }
}


export default Pointer;