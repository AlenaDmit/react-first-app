import React, { Component } from 'react';

import Task from '../Task/Task';

import './TaskList.css';


export default class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    toggleItem = (item) => () => {
        // const { data } = this.state;
        // data[item.id] = {
        //     ...data[item.id],
        //     done: !data[item.id].done,
        // };
        // this.setState({
        //     data,
        // });
    };

    render() {
        const data  = this.props.todos;
        const listItems = Object.keys(data).map((field) =>
            <li key={data[field].id}>
                <Task
                    for={data[field].id}
                    title={data[field].title}
                    deadline={data[field].deadline}
                    done={data[field].done}
                    onDelete={this.props.onDelete}
                    onToggle={this.props.onToggle}/>
            </li>
        );
        return (
            <div>
                <ul className="taskList-container">
                    {listItems}
                </ul>
                <div className=""></div>
            </div>
        );
    }
}
