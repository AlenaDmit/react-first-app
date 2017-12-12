import { connect } from 'react-redux';

import {deleteTask, toggleTask, startEditTask} from '../actions';
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
        onEditStart: (id, title, deadline) => dispatch(startEditTask(id, title, deadline))
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;