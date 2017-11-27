import React, { Component } from 'react';
import Task from './react/Task';
import logo from './logo.svg';
import './App.css';
import List from './List';

export default class App extends Component {
  render() {

      let t1 =  {title: "Good Murrning", deadline: "Tomorrow"};
      let t2 =  {title: "Good Murrning2", deadline: "Tomorrow4"};
      let t3 =  {title: "Bad Murrning2", deadline: "Tomorrow4"};

    let t_list = [t1, t2, t3].map((item) => <Task {...item}/>);

    return (
      <div className="App">
        <header className="App-header" style={{color: 'red'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fyst klass, Plazckat, Bokowushka</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {t_list}
        <List/>
      </div>
    );
  }
}
