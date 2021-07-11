import React from "react";
import PropTypes from "prop-types";

export default function TaskFooter({ start, deadline, end }) {

    return (
        <div className="task-item__footer">
            <ul>
                <li className="start">
                    <i className="bi bi-check"></i>
                    <span>{start}</span>
                </li>
                <li className="deadline">
                    <i className="bi bi-alarm"></i>
                    <span>{deadline}</span>
                </li>
                <li className="end">
                    <i className="bi bi-check-all"></i>
                    <span>{end}</span>
                </li>
            </ul>
        </div>
    );
}

TaskFooter.propTypes = {
    start: PropTypes.any,
    deadline: PropTypes.any,
    end: PropTypes.any,
};