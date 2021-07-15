import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Input, DatePicker, Button, message } from "antd";
import { addTask } from "../../redux/actions/taskActions";
import moment from "moment";
import { LocaleContext } from "../../context/LocaleContext";

export default function TaskAdd() {

    const [title, setTitle] = useState("");
    const [datePicker, setDatePicker] = useState(null);
    const locale = useContext(LocaleContext);
    const dispatch = useDispatch();

    const disabledDate = (current) => current && current < moment().startOf("day");

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
            message.success(locale.messages.addSuccess);
        }
        else message.error(locale.messages.notInputError);
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
                    <Button className="btn-success" onClick={addHandler}>
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
