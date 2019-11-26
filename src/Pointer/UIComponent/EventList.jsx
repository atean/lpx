

import React from "react";
import Action from "./Action"

class EventList extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <div>This component will be used to display list of actions in an event
                <Action></Action>
            </div>
        )
    }
}


export default EventList;