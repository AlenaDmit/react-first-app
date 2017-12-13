import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

import './TaskList.css';


export default class TaskList extends Component {

    render() {
        const data  = this.props.todos;
        const listItems = Object.keys(data).map((field) =>
            <li key={data[field].id} className="task">
                <Task
                    for={data[field].id}
                    title={data[field].title}
                    deadline={data[field].deadline}
                    done={data[field].done}
                    onDelete={this.props.onDelete}
                    onToggle={this.props.onToggle}
                    onEditStart={this.props.onEditStart}/>
            </li>
        );
        return (
            <div>
                <ul className="taskList-container">
                    {listItems}
                </ul>
                <footer>
                    <button className="footer-btn"><Link to="/add">Add new task</Link></button>
                </footer>
            </div>
        );
    }
}

TaskList.PropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    })),
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEditStart: PropTypes.func.isRequired
};