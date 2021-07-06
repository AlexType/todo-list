import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions/taskActions";

export default function TaskItem({ id, title, description }) {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(removeTask(id));
    };

    return (
        <Card>
            <Card.Header>Задача {id}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="danger" onClick={deleteHandler}>Удалить задачу</Button>
            </Card.Body>
        </Card>
    )
}
