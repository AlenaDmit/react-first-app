import { connect } from 'react-redux';

import {deleteTask, toggleTask, editTask} from '../actions';
import TaskList from '../components/TaskList/TaskList';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTask(id)),
        onToggle: id => dispatch(toggleTask(id)),
        onEdit: (id, title, deadline) => dispatch(editTask(id, title, deadline))
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;