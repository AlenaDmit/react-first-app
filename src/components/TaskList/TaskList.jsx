import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Divider } from 'semantic-ui-react'

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
            <div className="main">
                <ul className="taskList-container">
                    {listItems}
                </ul>
                <footer>
                    <Link to="/add"><Button primary className="footer-btn">Add new task</Button></Link>
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