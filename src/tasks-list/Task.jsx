import React, { Component } from 'react';
import './Task.css';

let idForCheckbox = 0;

export default class Task extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        // let idForCheckbox = getIdForCheckbox();
        return(
            <div className="task-container">
                <div>
                    <input id={`check${this.props.id}`} type="checkbox"/>
                    <label className="task-title" for={`check${this.props.id}`}>{this.props.title}</label>
                </div>
                <div className="task-info">
                    <div className="task-deadline">{this.props.deadline}</div>
                    <button className="task-btn-delete">X</button>
                </div>
            </div>
        );
    };
}

const getIdForCheckbox = function () {
    return ++idForCheckbox;
};
