import React, { Component } from "react";
import "./EventHandler.css";
import Event from "../Event/Event";
import EventList from "../EventList/EventList";

class EventHandler extends Component{
    qbChangeFun=(qbEventName)=>{
        this.setState({
            qbContent:<Event qbEventName={qbEventName}/>
        });
    }
    state={
        qbContent:<EventList qbClick={this.qbChangeFun} />
    };
    render(){
        return(
            <div className="event-handler">
                {this.state.qbContent}
            </div>
        );
    }
}

export default EventHandler;