import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EditTaskContainer from '../../containers/EditTaskContainer';
import NotFound from '../../components/NotFound/NotFound';
import TaskListContainer from '../../containers/TaskListContainer';
import AddNewTaskContainer from '../../containers/AddNewTaskContainer';


function Main() {
    return (
        <Switch>
            <Route exact path="/" component={TaskListContainer}/>
            <Route path="/add" component={AddNewTaskContainer}/>
            <Route path="/edit" component={EditTaskContainer}/>
            <Route path="*" component={NotFound}/>
        </Switch>

    );
}

export default Main;