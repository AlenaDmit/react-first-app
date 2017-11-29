import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="task-container">
                <div>
                    <input id="check" type="checkbox"/>
                    <label className="task-title" for="check">{this.props.title}</label>
                </div>
                <div className="task-info">
                    <div className="task-deadline">{this.props.deadline}</div>
                    <button className="task-btn-delete">X</button>
                </div>
            </div>
        );
    }
}

