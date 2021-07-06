import { ADD_TASK, REMOVE_TASK, UPDATE_TITLE_TASK } from "../types";

const initialState = {
    tasksLength: 1,
    tasks: [
        {
            title: 'Написать Todo List',
            id: 0
        }
    ]
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasksLength: state.tasksLength + 1,
                tasks: [...state.tasks, action.payload]
            }
        }

        case REMOVE_TASK: {
            return {
                ...state,
                tasksLength: state.tasksLength - 1,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        }

        case UPDATE_TITLE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, title: action.payload.title } : task)
            }
        }

        default: return state;
    }
};