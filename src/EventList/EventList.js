import React, { Component } from "react";
import './EventList.css'
import { Link } from "react-router-dom";

class EventList extends Component{
    render(){
        return(
            <div className="event-list">
                <div className="event-list-head">
                    <h1>List of All Events of E-Cell</h1>
                </div>
                <div className="event-list-events">
                    <Link to="/Event/12">
                        <div className="event" >
                            IGNITION
                        </div>
                    <Link to="/Event/13">
                        <div className="event" >
                            STARTUP CAMP
                        </div>
                    </Link>
                    <Link to="/Event/14">
                        <div className="event" >
                            CRICNOMETRICA
                        </div>
                    </Link>
                    <Link to="/Event/15">
                        <div className="event" >
                            B-QUIZ
                        </div>
                    </Link>
                    <Link to="/Event/16">
                        <div className="event" >
                            WALL STREET
                        </div>
                    </Link>
                    <Link to="/Event/17">
                        <div className="event" >
                            UTHKRISHTH
                        </div>
                    </Link>
                    <Link to="/Event/18">
                        <div className="event" >
                            ENTROPY
                        </div>
                    </Link>
                    <Link to="/Event/19">
                        <div className="event" >
                            E-GATHERING
                        </div>
                    </Link>
                    <Link to="/Event/20">
                        <div className="event" >
                            BUSSINESS CASE STUDY
                        </div>
                    </Link>
                    <Link to="/Event/22">
                        <div className="event" >
                            INNOVATION MANTHAN
                        </div>
                    </Link>
                    </Link>
                </div>
            </div>
        );
    }
};

export default EventList;