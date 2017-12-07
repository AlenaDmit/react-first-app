import React from 'react';
import moment from 'moment';

import './Header.css';


function Header(props) {
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

export default Header;