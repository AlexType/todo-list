import { ADD_TASK, REMOVE_TASK } from "../types";

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

        default: return state;
    }
};