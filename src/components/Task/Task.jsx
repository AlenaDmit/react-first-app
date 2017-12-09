import React, { Component } from 'react';

import './Task.css';


class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    }



    render() {
        return (
        <div className="task-container">
            <div>
                <input
                    id={`check${this.props.for}`}
                    type="checkbox"
                    defaultChecked={this.props.done}
                    onChange={this.props.onChange}/>
                <label
                    className="task-title"
                    htmlFor={`check${this.props.for}`}>{this.props.title}</label>
            </div>
            <div className="task-info">
                <div className="task-deadline">{this.props.deadline}</div>
                <button className="task-btn-delete">X</button>
            </div>
        </div>)
    }
}

export default Task;