import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Radio, message } from "antd";
import { updateCompletedTask, updateFinishedTask } from "../../redux/actions/taskActions";
import InputChange from "./components/InputChange";

export default function TaskTitle({ id, title, isCompleted, deadline, change, setChange }) {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(isCompleted);

    const checkHandler = (bool) => {
        if (bool) message.success("Задача завершена");
        else message.warning("Задача востановлена");

        setChecked(bool);
        dispatch(updateCompletedTask(id, bool));
        dispatch(updateFinishedTask(id, bool ? moment() : null));
    };

    return (
        <div className={`task-title ${checked ? "is-checked" : ""}`}>
            {
                change ?
                    <InputChange
                        id={id}
                        title={title}
                        setIsChange={setChange}
                        deadline={deadline === null ? moment() : moment(deadline)}
                    />
                    :
                    <Radio
                        checked={checked}
                        value={checked}
                        onClick={() => checkHandler(!checked)}>
                        {title}
                    </Radio>
            }
        </div>
    );
}

TaskTitle.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
    deadline: PropTypes.any,
    change: PropTypes.any,
    setChange: PropTypes.any
};