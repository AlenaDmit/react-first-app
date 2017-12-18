import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';

import BackToMain from '../../components/BackToMain/BackToMain';

import './AddNewTask.css'


export default class AddNewTask extends Component {

    render() {
        const FormAdd = withRouter(({ history }) => (
            <div className="AddNewTask-container">
                <div className="input-container">
                    <Input
                        size="small"
                        className="AddNewTask-input"
                        id="AddNewTask-input"
                        type="text"
                        name="title"
                        placeholder="Type your task"/>
                </div>
                <Input size="small" id="deadline-input" type="date" name="deadline"/>
                <Button size="small" color="green" type="submit" className="AddNewTask-btn-add"
                        onClick={() => {
                            let title = document.getElementById("AddNewTask-input").value;
                            let deadline = document.getElementById("deadline-input").value;
                            if (title && deadline) {
                                this.props.onAdd(title, deadline);
                                history.push("/");
                            }
                        }}>
                    Add task
                </Button>
            </div>
        ));

        return (
            <div>
                <FormAdd/>
                <BackToMain/>
            </div>
        );
    }
}

AddNewTask.propTypes = {
    onAdd: PropTypes.func.isRequired
};