import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../src/redux/actions/taskActions";
import { nanoid } from 'nanoid';


export default function AddTask() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addHandler = () => {
        dispatch(addTask({ title, description, id: nanoid() }));
        clearHandler();
    };

    const clearHandler = () => {
        setTitle('');
        setDescription('');
    };

    return (
        <div className="container">
            <h2 className="title mb-3">Добавить задачу</h2>
            <Form>
                <Form.Group controlId="task-title">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control value={title} type="text" placeholder="Введите заголовок задачи" onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="task-description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control value={description} as="textarea" rows={3} placeholder='Введите описание задачи' onChange={e => setDescription(e.target.value)} />
                </Form.Group>
            </Form>
            <div className="row mt-4">
                <div className="col-auto">
                    <Button variant="success" onClick={addHandler}>Добавить</Button>
                </div>
                <div className="col-auto">
                    <Button variant="warning" onClick={clearHandler}>Очистить</Button>
                </div>
                <div className="col-auto">
                    <Button variant="danger">Отменить</Button>
                </div>
            </div>
        </div>
    )
}
