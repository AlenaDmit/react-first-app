import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

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
                <div className="header-count-of-tasks">{Object.keys(props.todos)} tasks</div>
                <button className="header-btn-clear">Clear list</button>
            </div>
        </header>
    )
}

// Header.propTypes = {
//
// };

export default Header;