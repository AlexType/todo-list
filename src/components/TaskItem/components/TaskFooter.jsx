import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

export default function TaskFooter({ start, deadline, end }) {

    return (
        <div className="task-item__footer">
            <ul>
                {
                    start &&
                    <Tooltip placement="left" color="orange" title="Дата создания">
                        <li className="start">
                            <i className="bi bi-check"></i>
                            <span>{start}</span>
                        </li>
                    </Tooltip>
                }
                {
                    deadline &&
                    <Tooltip placement="left" color="orange" title="Deadline">
                        <li className="deadline">
                            <i className="bi bi-alarm"></i>
                            <span>{deadline}</span>
                        </li>
                    </Tooltip>
                }
                {
                    end &&
                    <Tooltip placement="left" color="orange" title="Дата выполнения">
                        <li className="end">
                            <i className="bi bi-check-all"></i>
                            <span>{end}</span>
                        </li>
                    </Tooltip>
                }
            </ul>
        </div>
    );
}

TaskFooter.propTypes = {
    start: PropTypes.any,
    deadline: PropTypes.any,
    end: PropTypes.any,
};