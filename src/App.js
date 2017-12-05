import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import TaskList from './tasks-list/TaskList';

const TodoHeader = function (props) {
    let dateNow = moment();
    return (
        <header>
            <div className="header-left">
                <div className="header-weekday">{`${dateNow.format('dddd')},`}</div>
                <div className="header-date">{`${dateNow.format('Do')} of ${dateNow.format('MMM')}`}</div>
            </div>
            <div className="header-right">
                <div className="header-count-of-tasks">{props.countTasks} tasks</div>
                <button className="header-btn-clear">Clear list</button>
            </div>
        </header>
    )
};

const AddNewTask = function () {
    return (
        <div className="AddNewTask-container">
            <div className="input-container">
                <input className="AddNewTask-input" type="text" placeholder="Type your task"/>
            </div>
            <button className="AddNewTask-btn-add">Add task</button>
        </div>
    )
};

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
        <div className="App">
            <TodoHeader countTasks={3}/>
            <AddNewTask/>
            <TaskList onChange={this.toggleChange}/>
        </div>
    );
  }
}
