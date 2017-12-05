import React, { Component } from 'react';
import './Task.css';

export default function Task (props) {
    return (<div className="task-container">
        <div>
            <input id={`check${props.for}`} type="checkbox" defaultChecked={props.done} onChange={props.onChange}/>
            <label className="task-title" htmlFor={`check${props.for}`}>{props.title}</label>
        </div>
        <div className="task-info">
            <div className="task-deadline">{props.deadline}</div>
            <button className="task-btn-delete">X</button>
        </div>
    </div>)
}