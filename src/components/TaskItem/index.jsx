import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { removeTask } from "../../redux/actions/taskActions";
import TaskHeader from "./components/TaskHeader";
import DateInfo from "../../containers/DateInfo/DateInfo";
import TaskTitle from "../TaskTitle";

export default function TaskItem({ task }) {

    const { id, created, finished, deadline } = task;

    const dispatch = useDispatch();
    const [isChange, setIsChange] = useState(false);

    const deleteHandler = () => {
        dispatch(removeTask(id));
        message.warning("Задача удалена");
    };

    return (
        <section className="col">
            <div className="task-item">
                <TaskHeader
                    id={id}
                    edit={() => setIsChange(!isChange)}
                    remove={deleteHandler}
                    setIsChange={setIsChange}
                    deadline={deadline === null ? moment() : moment(deadline)}
                />
                <div className="task-item__body">
                    <TaskTitle
                        task={task}
                        change={isChange}
                        setChange={setIsChange}
                    />
                </div>
                <DateInfo
                    className="task-item__footer"
                    start={moment(new Date(created)).fromNow()}
                    deadline={deadline ? moment(new Date(deadline)).endOf("day").fromNow() : "бессрочно"}
                    end={finished ? moment(new Date(finished)).fromNow() : "в работе"}
                />
            </div>
        </section>
    );
}

TaskItem.propTypes = {
    task: PropTypes.object
};