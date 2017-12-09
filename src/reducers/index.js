import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../actions';

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
            console.log('from reducer', state, newTask);
            return [...state, newTask];

        case DELETE_TASK:
            const index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),   // берём все элементы не включая удаляемый
                ...state.slice(index + 1)   // и берём все элементы после не включая удаляемый
            ];

        case EDIT_TASK:
            const c = {

            };
            return {...state, c};

        case TOGGLE_TASK:
            if (state.id !== action.data.id) {
                return state;
            }
            const toggleTask = {
                done: !state.done
            };
            return {...state, toggleTask};

        default:
            return state;
    }
}

export default reducer;