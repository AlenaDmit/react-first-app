import React from 'react';

import './AddNewTask.css'


function AddNewTask () {
    return (
        <div className="AddNewTask-container">
            <div className="input-container">
                <input
                    className="AddNewTask-input"
                    type="text"
                    placeholder="Type your task"/>
            </div>
            <button className="AddNewTask-btn-add">Add task</button>
        </div>
    )
}

export default AddNewTask;