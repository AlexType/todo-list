import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, message } from "antd";
import { nanoid } from "nanoid";
import moment from "moment";
import "moment/locale/ru";
import { addTask } from "../../redux/actions/taskActions";

export default function TaskAdd() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    useEffect(() => {
        moment.locale("ru");
    }, []);

    const addHandler = () => {
        if (title.length) {
            dispatch(addTask({
                id: nanoid(),
                title,
                isCompleted: false,
                created: moment().format("YYYY-MM-DD, HH:mm:ss"),
                finished: null
            }));
            setTitle("");
            message.success("Задача успешно добавленна!");
        }
        else message.error("Вы не ввели название задачи");
    };

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
                    <Button className="btn-cencel" onClick={() => setTitle("")}>Очистить</Button>
                </div>
            </div>
        </div>
    );
}
