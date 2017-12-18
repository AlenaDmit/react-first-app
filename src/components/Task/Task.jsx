import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import './Task.css';


export default class Task extends Component {

    handleDelete = () => {
        this.props.onDelete(this.props.for);
    };

    handleToggle = () => {
        this.props.onToggle(this.props.for);
    };

    handleStartEdit = () => {
        this.props.onEditStart(this.props.for, this.props.title, this.props.deadline);
    };

    render() {
        return (
        <div className="task-container">
            <div>
                <input
                    id={`check${this.props.for}`}
                    type="checkbox"
                    defaultChecked={this.props.done}
                    onChange={this.handleToggle}/>
                <label
                    className="task-title"
                    htmlFor={`check${this.props.for}`}>{this.props.title}</label>
            </div>
            <div className="task-info">
                <div className="task-deadline">{this.props.deadline}</div>
                <Link to="/edit">
                    <Button size="small" animated className="task-btn-edit" onClick={this.handleStartEdit}>
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                            <Icon color="orange" name='edit' />
                        </Button.Content>
                    </Button>
                </Link>
                <Button size="small" animated className="task-btn-delete" onClick={this.handleDelete}>
                    <Button.Content visible>Del</Button.Content>
                    <Button.Content hidden>
                        <Icon color="red" name='remove circle' />
                    </Button.Content>
                </Button>

            </div>
        </div>)
    }
}

Task.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEditStart: PropTypes.func.isRequired
};