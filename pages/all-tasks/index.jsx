import { useSelector } from "react-redux"
import TaskItem from "../../src/components/TaskItem";
import TasksList from "../../src/components/TasksList";

export default function AllTasks() {

    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <div className="container">
            <h1>Все задачи</h1>
            <TasksList tasks={tasks} />
        </div>
    )
}
