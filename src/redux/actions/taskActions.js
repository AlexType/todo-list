import { ADD_TASK, REMOVE_TASK, UPDATE_COMPLETED_TASK, UPDATE_DEADLINE, UPDATE_FINISHED_TASK, UPDATE_TITLE_TASK } from "../types";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    };
};

export const updateTitleTask = (id, title) => {
    return {
        type: UPDATE_TITLE_TASK,
        payload: { id, title }
    };
};

export const updateCompletedTask = (id, isCompleted) => {
    return {
        type: UPDATE_COMPLETED_TASK,
        payload: { id, isCompleted }
    };
};

export const updateFinishedTask = (id, date) => {
    return {
        type: UPDATE_FINISHED_TASK,
        payload: { id, date }
    };
};

export const updateDeadline = (id, date) => {
    return {
        type: UPDATE_DEADLINE,
        payload: { id, date }
    };
};