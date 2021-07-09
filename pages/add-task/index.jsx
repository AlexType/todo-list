import React from "react";
import Head from "next/head";
import TaskAdd from "../../src/components/TaskAdd";

export default function AddTask() {
    return (
        <div className="container">
            <Head>
                <title>Добавление задачи</title>
            </Head>
            <h1 className="title-page mb-4">Добавить задачу</h1>
            <TaskAdd />
        </div>
    );
}
