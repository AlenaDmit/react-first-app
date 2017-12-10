import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EditTask from '../../components/EditTask/EditTask';
import NotFound from '../../components/NotFound/NotFound';
import TaskListContainer from '../../containers/TaskListContainer';
import AddNewTaskContainer from '../../containers/AddNewTaskContainer';


function Main() {
    return (
        <Switch>
            <Route exact path="/" component={TaskListContainer}/>
            <Route path="/add" component={AddNewTaskContainer}/>
            <Route path="/edit" component={EditTask}/>
            <Route path="*" component={NotFound}/>
        </Switch>

    );
}

export default Main;