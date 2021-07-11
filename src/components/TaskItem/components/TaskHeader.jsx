import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Tooltip, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { updateDeadline } from "../../../redux/actions/taskActions";

export default function TaskHeader({ id, edit, remove, deadline, setIsChange }) {

    const [calssAnimation, setCalssAnimation] = useState("");
    const [visibilityDatePicker, setVisibilityDatePicker] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setCalssAnimation("show");
    }, []);

    const disabledDate = (current) => {
        return current && current < moment().startOf("day");
    };

    const update = (date) => {
        dispatch(updateDeadline(id, date));
        setVisibilityDatePicker(false);
        setIsChange(false);
    };

    return (
        <div className={`task-item__header ${calssAnimation}`}>
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <Tooltip placement="top" color="orange" title="Редактировать задачу">
                        <i className="bi bi-pencil-square" onClick={edit}></i>
                    </Tooltip>
                    <Tooltip placement="top" color="orange" title="Редактировать deadline">
                        <i className="bi bi-calendar3 ms-3" onClick={() => setVisibilityDatePicker(!visibilityDatePicker)}></i>
                    </Tooltip>
                </div>
                <div className="col-auto">
                    <Tooltip placement="top" color="orange" title="Удалить задачу">
                        <i className="bi bi-trash2" onClick={remove}></i>
                    </Tooltip>
                </div>
            </div>
            <DatePicker
                open={visibilityDatePicker}
                className="task-item__date-picker-short"
                onChange={(date) => update(date)}
                disabledDate={disabledDate}
                defaultValue={deadline}
            />
        </div>
    );
}

TaskHeader.propTypes = {
    id: PropTypes.string,
    edit: PropTypes.func,
    remove: PropTypes.func,
    deadline: PropTypes.any,
    setIsChange: PropTypes.func,
};