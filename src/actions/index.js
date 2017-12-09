export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';


let nextId = 5;

export function addTask(data) {
    console.log('from action: ', data);
    return {
        type: ADD_TASK,
        id: nextId++,
        data: data
    }
}

export function deleteTask(data) {
    return {
        type: DELETE_TASK,
        data: data
    }
}

export function toggleTask(data) {
    return {
        type: TOGGLE_TASK,
        data: data
    }
}

export function editTask(data) {
    return {
        type: EDIT_TASK,
        data: data
    }
}