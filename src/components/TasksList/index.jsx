import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {
    return (
        <div>
            {tasks.map(item => <TaskItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
            />)}
        </div>
    )
}
