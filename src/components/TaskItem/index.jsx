import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Radio, message } from "antd";
import moment from "moment";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { removeTask, updateCompletedTask, updateFinishedTask } from "../../redux/actions/taskActions";
import InputChange from "./components/InputChange";

export default function TaskItem({ id, title, isCompleted, created, finished, deadline }) {

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(isCompleted);
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        dispatch(updateCompletedTask(id, isChecked));
        dispatch(updateFinishedTask(id, isChecked ? moment() : null));
    }, [isChecked]);

    const checkHandler = () => {
        !isChecked ? message.success("Задача завершена") : message.warning("Задача востановлена");
        setIsChecked(!isChecked);
    };

    const deleteHandler = () => {
        dispatch(removeTask(id));
        message.warning("Задача удалена");
    };

    return (
        <section className="col">
            <div className={`task-add ${isChecked ? "is-checked" : ""} ${isChange ? "is-change" : ""}`}>
                {!isChange ?
                    <Radio
                        checked={isChecked}
                        value={isChecked}
                        onClick={checkHandler}>
                        {title}
                    </Radio>
                    :
                    <InputChange
                        id={id}
                        title={title}
                        setIsChange={setIsChange}
                        deadline={deadline === null ? moment() : moment(deadline)}
                    />}
                <ul className="task-add__info mt-2">
                    <li className="color-orange">Создано: <span>{moment(new Date(created)).format("DD.MM.YYYY")}</span></li>
                    {deadline !== null && <li className="color-blue">Завершить: <span>{moment(new Date(deadline)).format("DD.MM.YYYY")}</span></li>}
                    {finished !== null && <li className="color-green">Завершено: <span>{moment(new Date(finished)).format("DD.MM.YYYY")}</span></li>}
                </ul>
                <div className="task-add__helpers">
                    <div className="ico-lg mx-1" onClick={() => setIsChange(!isChange)}>
                        <EditFilled />
                    </div>
                    <div className="ico-lg" onClick={deleteHandler} >
                        <DeleteFilled />
                    </div>
                </div>
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