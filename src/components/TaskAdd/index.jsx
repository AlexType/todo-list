import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, DatePicker, Button, message } from "antd";
import { nanoid } from "nanoid";
import moment from "moment";
import { addTask } from "../../redux/actions/taskActions";

export default function TaskAdd() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [datePicker, setDatePicker] = useState(null);

    const onChangeDatePicker = (date) => {
        setDatePicker(date);
    };

    const disabledDate = (current) => {
        return current && current < moment().startOf("day");
    };

    const addHandler = () => {
        if (title.length) {
            dispatch(addTask({
                id: nanoid(),
                title,
                isCompleted: false,
                created: moment(),
                deadline: datePicker,
                finished: null
            }));
            setTitle("");
            setDatePicker(null);
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
                <div className="col-12">
                    <DatePicker
                        value={datePicker}
                        onChange={onChangeDatePicker}
                        disabledDate={disabledDate}
                        format={"DD.MM.YYYY"}
                    />
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
