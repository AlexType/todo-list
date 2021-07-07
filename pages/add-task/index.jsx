import React from "react";
import TaskAdd from "../../src/components/TaskAdd";

export default function AddTask() {
    return (
        <div className="container">
            <h2 className="title mb-3">Добавить задачу</h2>
            <TaskAdd />
        </div>
    );
}
