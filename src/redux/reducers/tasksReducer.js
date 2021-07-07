import { ADD_TASK, REMOVE_TASK, UPDATE_COMPLETED_TASK, UPDATE_TITLE_TASK } from "../types";

const initialState = {
    tasksLength: 1,
    tasks: [
        {
            id: 0,
            isCompleted: true,
            title: 'Написать Todo List',
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

        case UPDATE_COMPLETED_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, isCompleted: action.payload.isCompleted } : task)
            }
        }

        default: return state;
    }
};