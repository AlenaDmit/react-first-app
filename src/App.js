import React, { Component } from 'react';
import './App.css';
import Task from './tasks-list/Task';
import logo from './logo.svg';
import TaskList from './tasks-list/TaskList';

export default class App extends Component {
    render() {

        let t1 =  {title: "Good Murrning", deadline: "Tomorrow"};
        let t2 =  {title: "Good Murrning2", deadline: "Tomorrow4"};
        let t3 =  {title: "Bad Murrning2", deadline: "Tomorrow4"};

        let s = [t1, t2, t3];

    return (
        <div className="App">
            <header className="App-header" style={{color: 'red'}}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>

            <TaskList data={s} />
        </div>
    );
  }
}
