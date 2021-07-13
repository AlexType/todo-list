import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Radio, message } from "antd";
import { removeTask, updateCompletedTask, updateFinishedTask } from "../../redux/actions/taskActions";
import InputChange from "./components/InputChange";
import TaskHeader from "./components/TaskHeader";
import TaskFooter from "./components/TaskFooter";

export default function TaskItem({ id, title, isCompleted, created, finished, deadline }) {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(isCompleted);
    const [isChange, setIsChange] = useState(false);

    const checkHandler = (bool) => {
        if (bool) message.success("Задача завершена");
        else message.warning("Задача востановлена");

        setChecked(bool);
        dispatch(updateCompletedTask(id, bool));
        dispatch(updateFinishedTask(id, bool ? moment() : null));
    };

    const deleteHandler = () => {
        dispatch(removeTask(id));
        message.warning("Задача удалена");
    };

    return (
        <section className="col">
            <div className={`task-item ${checked ? "is-checked" : ""}`}>
                <TaskHeader
                    id={id}
                    edit={() => setIsChange(!isChange)}
                    remove={deleteHandler}
                    setIsChange={setIsChange}
                    deadline={deadline === null ? moment() : moment(deadline)}
                />
                <div className="task-item__body">
                    {
                        isChange ?
                            <InputChange
                                id={id}
                                title={title}
                                setIsChange={setIsChange}
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
                <TaskFooter
                    start={moment(new Date(created)).fromNow()}
                    deadline={deadline ? moment(new Date(deadline)).endOf("day").fromNow() : "бессрочно"}
                    end={finished ? moment(new Date(finished)).fromNow() : "в работе"}
                />
            </div>
        </section>
    );
}

TaskItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
    created: PropTypes.any,
    finished: PropTypes.any,
    deadline: PropTypes.any
};