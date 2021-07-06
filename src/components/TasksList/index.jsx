import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {
    return (
        <div className="row row-cols-1 gy-3">
            {tasks.map(item => <TaskItem
                id={item.id}
                key={item.id}
                title={item.title}
                isCompleted={item.isCompleted}
            />)}
        </div>
    )
}
