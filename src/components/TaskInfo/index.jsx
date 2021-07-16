import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import DateInfo from "../DateInfo";
import TaskTitle from "../TaskTitle";
import { LocaleContext } from "../../context/LocaleContext";
import useMoment from "../../hooks/moment.hook";

export default function TaskInfo({ task }) {

    const { id, created, finished, deadline } = task;

    const [isChange, setIsChange] = useState(false);
    const locale = useContext(LocaleContext);
    const { dateFromNow, dateEndOfFromNow } = useMoment();

    return (
        <Fragment>
            <div className="description__id pb-2">
                <span>ID: {id}</span>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <p className="description__edit mb-3" onClick={() => setIsChange(!isChange)}>
                        {locale.events.editTask}
                    </p>
                    <div className="row">
                        <div className="col-auto">
                            <TaskTitle
                                task={task}
                                change={isChange}
                                setChange={setIsChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <DateInfo
                        start={dateFromNow(new Date(created))}
                        deadline={deadline ? dateEndOfFromNow(new Date(deadline)) : locale.moment.indefinitely}
                        end={finished ? dateFromNow(new Date(finished)) : locale.moment.inWork}
                    />
                </div>
            </div>
        </Fragment>
    );
}

TaskInfo.propTypes = {
    task: PropTypes.object,
};