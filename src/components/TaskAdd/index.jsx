import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { Input, DatePicker, Button, message, Modal } from "antd";
import { addTask } from "../../redux/actions/taskActions";
import { LocaleContext } from "../../context/LocaleContext";
import useDatePicker from "../../hooks/datePicker.hook";

export default function TaskAdd({ visible, setVisible }) {

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
        <Modal
            title="Добавить задачу"
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={[
                <Button key="1" className="btn-success" onClick={addTaskHandler}>
                    {locale.events.add}
                </Button>,
                <Button key="2" className="btn-cencel" onClick={() => setVisible(false)}>
                    {locale.events.clear}
                </Button>
            ]}
        >
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
        </Modal>
    );
}

TaskAdd.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func
};