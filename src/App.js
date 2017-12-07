import React, { Component } from 'react';

import TaskList from './components/TaskList/TaskList';
import AddNewTask from './components/AddNewTask/AddNewTask';
import Header from './components/Header/Header';

import './App.css';


export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
        <div className="App">
            <Header countTasks={3}/>
            <TaskList onChange={this.toggleChange}/>
            <AddNewTask/>
        </div>
    );
  }
}
