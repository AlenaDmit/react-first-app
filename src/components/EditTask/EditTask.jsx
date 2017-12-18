import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';
import BackToMain from '../../components/BackToMain/BackToMain'

import { Link } from 'react-router-dom';

import '../../components/AddNewTask/AddNewTask.css';


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
            <div>
                <div className="AddNewTask-container">
                    <div className="input-container">
                        <Input
                            size="small"
                            className="AddNewTask-input"
                            type="text"
                            name="title"
                            onChange={this.handleChangeTitle}
                            placeholder="Type your task"
                            value={this.state.title}/>
                    </div>
                    <Input
                        size="small"
                        className="edit-input-deadline"
                        type="date"
                        name="deadline"
                        onChange={this.handleChangeDeadline}
                        value={this.state.deadline}/>
                    <Link to="/"><Button size="small" color="green" className="AddNewTask-btn-add" onClick={this.handleEndEdit}>Save</Button></Link>
                </div>
                <BackToMain/>
            </div>);
    }
}

EditTask.propTypes = {
    onEditEnd: PropTypes.func.isRequired
};