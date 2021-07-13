import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DateInfo from "../../containers/DateInfo/DateInfo";
import TaskTitle from "../TaskTitle";

export default function TaskInfo({ id, title, isCompleted, created, finished, deadline }) {

    const [isChange, setIsChange] = useState(false);

    return (
        <Fragment>
            <div className="description__id pb-2">
                <span>ID: {id}</span>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <p className="description__edit mb-3" onClick={() => setIsChange(!isChange)}>
                        Редактировать задачу
                    </p>
                    <div className="row">
                        <div className="col-auto">
                            <TaskTitle
                                id={id}
                                title={title}
                                isCompleted={isCompleted}
                                deadline={deadline}
                                change={isChange}
                                setChange={setIsChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <DateInfo
                        start={moment(new Date(created)).fromNow()}
                        deadline={deadline ? moment(new Date(deadline)).endOf("day").fromNow() : "бессрочно"}
                        end={finished ? moment(new Date(finished)).fromNow() : "в работе"}
                    />
                </div>
            </div>
        </Fragment>
    );
}

TaskInfo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
    created: PropTypes.any,
    finished: PropTypes.any,
    deadline: PropTypes.any,
};