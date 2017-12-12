import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import './AddNewTask.css'


class AddNewTask extends Component {
    constructor(props) {
        super(props);
    };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const deadline = event.target.deadline.value;
    //     const title = event.target.title.value;
    //
    //     if (title && deadline) {
    //         this.props.onAdd(title, deadline);
    //     }
    // };

    render() {
        const FormAdd = withRouter(({ history }) => (
            <div className="AddNewTask-container">
                <div className="input-container">
                    <input
                        className="AddNewTask-input"
                        id="AddNewTask-input"
                        type="text"
                        name="title"
                        placeholder="Type your task"/>
                </div>
                <input id="deadline-input" type="date" name="deadline"/>
                <button type="submit" className="AddNewTask-btn-add"
                        onClick={() => {
                            let title = document.getElementById("AddNewTask-input").value;
                            let deadline = document.getElementById("deadline-input").value;
                            if (title && deadline) {
                                this.props.onAdd(title, deadline);
                                history.push("/");
                            }
                        }}>
                    Add task
                </button>
            </div>
        ));

        return (
            <FormAdd/>
        );
    }
}

// Form.propTypes = {
//     onAdd: PropTypes.func.isRequired
// };

export default AddNewTask;