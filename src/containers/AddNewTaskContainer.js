import { connect } from 'react-redux';

import {addTask} from '../actions';
import AddNewTask from '../components/AddNewTask/AddNewTask';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: function (title, deadline) {
            return dispatch(addTask({title: title, deadline: deadline}));
        }
    };
}

const AddNewTaskContainer = connect(null, mapDispatchToProps)(AddNewTask);

export default AddNewTaskContainer;