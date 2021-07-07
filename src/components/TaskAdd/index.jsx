import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, message } from "antd";
import { nanoid } from "nanoid";
import moment from "moment";
import "moment/locale/ru";
import { addTask } from "../../redux/actions/taskActions";

export default function TaskAdd() {

    moment.locale("ru");

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const success = () => message.success("Задача добавленна");
    const error = () => message.error("Заполните поле");

    const addHandler = () => {
        if (title.length) {
            dispatch(addTask({
                id: nanoid(),
                title,
                isCompleted: false,
                created: moment().format("YYYY-MM-DD, HH:mm:ss"),
                finished: null
            }));
            clearHandler();
            success();
        }
        else error();
    };

    const clearHandler = () => setTitle("");

    return (
        <div>
            <div className="row gy-3">
                <div className="col-12">
                    <Input placeholder="Название" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-auto">
                    <Button className="btn-success" onClick={addHandler}>Добавить</Button>
                </div>
                <div className="col-auto">
                    <Button className="btn-cencel" onClick={clearHandler}>Очистить</Button>
                </div>
            </div>
        </div>
    );
}
