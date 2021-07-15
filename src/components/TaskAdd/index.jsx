import React, { useContext, useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { Input, DatePicker, Button, message } from "antd";
import { addTask } from "../../redux/actions/taskActions";
import { LocaleContext } from "../../context/LocaleContext";
import useDatePicker from "../../hooks/datePicker.hook";

export default function TaskAdd() {

    const [title, setTitle] = useState("");
    const [datePicker, setDatePicker] = useState(null);
    const { disabledDate } = useDatePicker();
    const locale = useContext(LocaleContext);
    const dispatch = useDispatch();

    const addTaskHandler = () => {
        if (!title.length) message.error(locale.messages.notInputError);
        else {
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
            message.success(locale.messages.addSuccess);
        }
    };

    return (
        <div>
            <div className="row gy-3">
                <div className="col-12">
                    <Input
                        placeholder={locale.words.name}
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="col-12">
                    <DatePicker
                        value={datePicker}
                        onChange={date => setDatePicker(date)}
                        disabledDate={disabledDate}
                        format={"DD.MM.YYYY"}
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-auto">
                    <Button className="btn-success" onClick={addTaskHandler}>
                        {locale.events.add}
                    </Button>
                </div>
                <div className="col-auto">
                    <Button className="btn-cencel" onClick={() => setTitle("")}>
                        {locale.events.clear}
                    </Button>
                </div>
            </div>
        </div>
    );
}
