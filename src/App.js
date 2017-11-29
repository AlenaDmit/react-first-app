import React, { Component } from 'react';
import './App.css';
import TaskList from './tasks-list/TaskList';

const TodoHeader = function () {
    return (
        <header>
            <div className="header-left">
                <div className="header-weekday">Monday,</div>
                <div className="header-date">25 of May</div>
            </div>
            <div className="header-right">
                <div className="header-count-of-tasks">3 tasks</div>
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
    render() {

        let data = [
            {
                id: 1,
                title: "Buy milk",
                deadline: "01.12.2017",
                done: false
            },
            {
                id: 2,
                title: "Go to the cinema",
                deadline: "02.12.2017",
                done: false
            },
            {
                id: 3,
                title: "To do homework",
                deadline: "03.12.2017",
                done: false
            }
        ];

    return (
        <div className="App">
            {/*<header className="App-header" style={{color: 'red'}}>*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*</header>*/}
            <TodoHeader/>
            <AddNewTask/>
            <TaskList data={data} />
        </div>
    );
  }
}
