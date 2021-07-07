import React from "react";
import TaskAdd from "../../src/components/TaskAdd";

export default function AddTask() {
    return (
        <div className="container">
            <h1 className="title-page mb-4">Добавить задачу</h1>
            <TaskAdd />
        </div>
    );
}
