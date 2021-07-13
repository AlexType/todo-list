import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { removeTask } from "../../redux/actions/taskActions";
import TaskHeader from "./components/TaskHeader";
import DateInfo from "../../containers/DateInfo/DateInfo";
import TaskTitle from "../TaskTitle";

export default function TaskItem({ id, title, isCompleted, created, finished, deadline }) {

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
                        id={id}
                        change={isChange}
                        setChange={setIsChange}
                        title={title}
                        isCompleted={isCompleted}
                        deadline={deadline}
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
    id: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
    created: PropTypes.any,
    finished: PropTypes.any,
    deadline: PropTypes.any
};