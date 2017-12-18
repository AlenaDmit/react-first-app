export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const START_EDIT_TASK = 'START_EDIT_TASK';
export const END_EDIT_TASK = 'END_EDIT_TASK';
export const CLEAR_TASK_LIST = 'CLEAR_TASK_LIST';


let nextId = 4;

export function addTask(data) {
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

export function startEditTask(id) {
    return {
        type: START_EDIT_TASK,
        id: id
    }
}

export function endEditTask(todo) {
    return {
        type: END_EDIT_TASK,
        todo: todo
    }
}

export function clearTaskList() {
    return {
        type: CLEAR_TASK_LIST
    }
}