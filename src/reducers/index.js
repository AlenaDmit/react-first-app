import {ADD_TASK, DELETE_TASK, START_EDIT_TASK, END_EDIT_TASK, TOGGLE_TASK, CLEAR_TASK_LIST} from '../actions';

const _ = require('lodash');

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type){
        case ADD_TASK:
            let newTask =  {
                id: action.id,
                title: action.data.title,
                deadline: action.data.deadline,
                done: false
            };
            return [...state, newTask];

        case DELETE_TASK:
            let index = _.findIndex(state, todo => todo.id === action.data);
            return [
                ...state.slice(0, index),   // берём все элементы не включая удаляемый
                ...state.slice(index + 1)   // и берём все элементы после не включая удаляемый
            ];

        case START_EDIT_TASK:
            let indexOfEditableTask = _.findIndex(state, todo => todo.id === action.id);
            let nextState = [...state];
            nextState.forEach(td => td.editable = false);
            let editableTask = nextState[indexOfEditableTask];
            editableTask.editable = true;
            return nextState;

        case END_EDIT_TASK:
            nextState = [...state];
            let editableTaskEnd = _.find(nextState, td => td.editable === true);
            if (!editableTaskEnd) return nextState;
            editableTaskEnd.title = action.todo.title;
            editableTaskEnd.deadline = action.todo.deadline;
            return nextState;

        case TOGGLE_TASK:
            index = _.findIndex(state, todo => todo.id === action.data);
            nextState = [...state];
            let toggleTask = nextState[index];
            toggleTask.done = !toggleTask.done;
            return nextState;

        case CLEAR_TASK_LIST:
            return [];

        default:
            return state;
    }
}

export default reducer;