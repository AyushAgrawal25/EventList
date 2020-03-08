import React, { Component } from "react";
import "./Event.css";
import axios from "axios";

class Event extends Component{
    state={
        data:null,
        qbEventContent:null
    }

    qbEventContent;
    componentDidMount(){
        let dataId=this.props.match.params.post_id;
        axios.get('https://ecell.nitrr.ac.in/events/list/2019/?format=json').then( res =>{
            res.data.data.map( eventData =>{
                if(dataId==eventData.id)
                {
                    this.setState({
                        data:eventData
                    });
                
                    console.log(this.state.data.details);
                    this.qbEventContent=(<div className="event-wrap">
                        <img src={this.state.data.cover_pic} className="qb-img" alt="" />
                        <div className="qb-details" >{this.state.data.details}</div>
                    </div>);

                    this.setState({
                        qbEventContent:this.qbEventContent
                    });
                }
            })
        });
    }
    render(){
        return(
            <div className="event-container">
                {this.state.qbEventContent}
            </div>
        );
    }
}

export default Event;