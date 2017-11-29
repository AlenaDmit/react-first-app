import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.data.map((item, index) => <li key={index} ><Task title={item.title} deadline={item.deadline}/></li>);
        // const listItems = this.props.data.map((item) => <Task {...item} />);
        return (
            <ul className="taskList-container">
                {listItems}
            </ul>
        );
    }
}
