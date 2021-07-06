import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from 'antd';
import { nanoid } from 'nanoid';
import { addTask } from "../../src/redux/actions/taskActions";


export default function AddTask() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const addHandler = () => {
        dispatch(addTask({ title, id: nanoid() }));
        clearHandler();
    };

    const clearHandler = () => {
        setTitle('');
    };

    return (
        <div className="container">
            <h2 className="title mb-3">Добавить задачу</h2>
            <Input className="mb-4" placeholder="Название" value={title} onChange={e => setTitle(e.target.value)} />
            <Button className="mt-4" type="primary" onClick={addHandler}>Добавить</Button>
            <Button className="mt-4 ml-4" type="danger" onClick={clearHandler}>Очистить</Button>
        </div>
    )
}
