import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class EditTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.task ? props.task.title : "",
            deadline: props.task ? props.task.deadline : ""
        };
    }

        handleEndEdit = () => {
            this.props.onEditEnd(this.state);
        };

        handleChangeTitle = (event) => {
            this.setState({
                title: event.target.value
            });
        };

        handleChangeDeadline = (event) => {
            this.setState({
                deadline: event.target.value
            });
        };

        render() {
            return (
                <div className="AddNewTask-container">
                    <div className="input-container">
                        <input
                            className="AddNewTask-input"
                            type="text"
                            name="title"
                            onChange={this.handleChangeTitle}
                            placeholder="Type your task"
                            value={this.state.title}/>
                    </div>
                    <input
                        type="date"
                        name="deadline"
                        onChange={this.handleChangeDeadline}
                        value={this.state.deadline}/>
                    <button className="AddNewTask-btn-add" onClick={this.handleEndEdit}><Link to="/">Save</Link></button>
                </div>);
        }

}