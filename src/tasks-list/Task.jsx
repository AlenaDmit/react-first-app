import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="task-container">
                <div className="task-title">{this.props.title}</div>
                <div className="task-deadline">{this.props.deadline}</div>
            </div>
        );
    }
}

