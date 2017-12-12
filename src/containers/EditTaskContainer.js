import { connect } from 'react-redux';

import {endEditTask} from '../actions';
import EditTask from '../components/EditTask/EditTask';

function mapStateToProps(state) {
    let editableTask = state.find((td) => td.editable === true);
    let props = {
        task: editableTask
    };

    return props;
}

function mapDispatchToProps(dispatch) {
    return {
        onEditEnd: (todo) => dispatch(endEditTask(todo))
    }
}

const EditTaskContainer = connect(mapStateToProps, mapDispatchToProps)(EditTask);

export default EditTaskContainer;