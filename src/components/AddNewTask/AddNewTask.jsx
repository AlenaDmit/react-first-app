import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './AddNewTask.css'


class AddNewTask extends Component {
    constructor(props) {
        super(props);
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const deadline = event.target.deadline.value;
        const title = event.target.title.value;
        console.log('HandleSubmit: ', title, deadline);

        if (title && deadline) {
            this.props.onAdd(title, deadline);
        }
    };

    handleChange = (event) => {

    };

    render() {
        return (
            <form className="AddNewTask-container" onSubmit={this.handleSubmit}>
                <div className="input-container">
                    <input
                        className="AddNewTask-input"
                        type="text"
                        name="title"
                        placeholder="Type your task"/>
                </div>
                <input type="date" name="deadline"/>
                <button type="submit" className="AddNewTask-btn-add" >Add task</button>
            </form>
        );
    }
}

// Form.propTypes = {
//     onAdd: PropTypes.func.isRequired
// };

export default AddNewTask;