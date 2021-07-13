import { ADD_TASK, REMOVE_TASK, UPDATE_COMPLETED_TASK, UPDATE_DEADLINE, UPDATE_FINISHED_TASK, UPDATE_TITLE_TASK } from "../types";

let initialState = {
    tasks: [
        {
            id: "UX09123asd",
            title: "Написать TodoList",
            isCompleted: false,
            created: new Date("2021-07-01T00:00:00"),
            deadline: new Date("2021-08-12T00:00:00"),
            finished: null
        }
    ]
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasksLength: state.tasksLength + 1,
                tasks: [...state.tasks, action.payload]
            };
        }

        case REMOVE_TASK: {
            return {
                ...state,
                tasksLength: state.tasksLength - 1,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
        }

        case UPDATE_TITLE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, title: action.payload.title } : task)
            };
        }

        case UPDATE_COMPLETED_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, isCompleted: action.payload.isCompleted } : task)
            };
        }

        case UPDATE_FINISHED_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, finished: action.payload.date } : task)
            };
        }

        case UPDATE_DEADLINE: {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, deadline: action.payload.date } : task)
            };
        }

        default: return state;
    }
};