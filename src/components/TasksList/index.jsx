import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {
    return (
        <div className="row row-cols-1 gy-3">
            {tasks.map(item => <TaskItem
                key={item.id}
                id={item.id}
                title={item.title}
            />)}
        </div>
    )
}
