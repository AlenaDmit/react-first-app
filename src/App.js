import React from 'react';

import TaskListContainer from './containers/TaskListContainer';
import AddNewTaskContainer from './containers/AddNewTaskContainer';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <TaskListContainer/>
            <AddNewTaskContainer/>
        </div>
    );
}

export default App;