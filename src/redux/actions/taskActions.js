import { ADD_TASK, REMOVE_TASK, UPDATE_TITLE_TASK } from "../types";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    };
}

export const updateTitleTask = (id, title) => {
    return {
        type: UPDATE_TITLE_TASK,
        payload: { id, title }
    };
}