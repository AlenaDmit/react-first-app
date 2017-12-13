import { connect } from 'react-redux';

import {endEditTask} from '../actions';
import EditTask from '../components/EditTask/EditTask';

const _ = require('lodash');

function mapStateToProps(state) {
    let editableTask = _.find(state, (td) => td.editable === true);
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