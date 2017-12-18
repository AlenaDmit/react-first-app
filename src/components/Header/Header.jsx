import React, { Component }from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button, Header } from 'semantic-ui-react';

import './Header.css';


export default class HeaderToDo extends Component{

    onClearTaskList = () => {
        this.props.onClearTaskList();
    };


    render() {
    let dateNow = moment();
    return (
        <header>
            <div className="header-left">
                <Header as="h3" color="blue" className="header-weekday">{`${dateNow.format('dddd')},`}</Header>
                <Header as="h4" color="grey" className="header-date">{`${dateNow.format('Do')} of ${dateNow.format('MMM')}`}</Header>
            </div>
            <div className="header-right">
                <Header as="h3" color="blue" className="header-count-of-tasks">{this.props.todos.length} tasks</Header>
                <Button size="small" className="header-btn-clear" onClick={this.onClearTaskList}>Clear list</Button>
            </div>
        </header>);
    }
};

HeaderToDo.propTypes = {
    onClearTaskList: PropTypes.func.isRequired
};