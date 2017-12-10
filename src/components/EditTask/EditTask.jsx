import React from 'react';

function EditTask() {
    return (
        <div className="AddNewTask-container">
            <div className="input-container">
                <input
                    className="AddNewTask-input"
                    type="text"
                    name="title"
                    placeholder="Type your task"/>
            </div>
            <input type="date" name="deadline"/>
            <button className="AddNewTask-btn-add" >Save</button>
        </div>
    )
}

export default EditTask;