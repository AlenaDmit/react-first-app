import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Task.css';


class Task extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.for);
    };

    handleToggle = () => {
        this.props.onToggle(this.props.for);
    };

    handleStartEdit = () => {
        const title = this.props.title;
        console.log(`${title} from handleStartEdit from Task.jsx`);
        this.props.onEditStart(this.props.for, this.props.title, this.props.deadline);

    };

    render() {
        return (
        <div className="task-container">
            <div>
                <input
                    id={`check${this.props.for}`}
                    type="checkbox"
                    defaultChecked={this.props.done}
                    onChange={this.handleToggle}/>
                <label
                    className="task-title"
                    htmlFor={`check${this.props.for}`}>{this.props.title}</label>
            </div>
            <div className="task-info">
                <div className="task-deadline">{this.props.deadline}</div>
                <button className="task-btn-edit" onClick={this.handleStartEdit}><Link to="/edit">E</Link></button>
                <button className="task-btn-delete" onClick={this.handleDelete}>X</button>
            </div>
        </div>)
    }
}

export default Task;