import React, { Component }from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Header.css';


export default class Header extends Component{

    onClearTaskList = () => {
        this.props.onClearTaskList();
    };


    render() {
    let dateNow = moment();
    return (
        <header>
            <div className="header-left">
                <div className="header-weekday">{`${dateNow.format('dddd')},`}</div>
                <div className="header-date">{`${dateNow.format('Do')} of ${dateNow.format('MMM')}`}</div>
            </div>
            <div className="header-right">
                <div className="header-count-of-tasks">{this.props.todos.length} tasks</div>
                <button className="header-btn-clear" onClick={this.onClearTaskList}>Clear list</button>
            </div>
        </header>);
    }
};

Header.propTypes = {
    onClearTaskList: PropTypes.func.isRequired
};