import React, { Fragment } from "react";
import Head from "next/head";
import TaskAdd from "../../src/components/TaskAdd";

export default function AddTask() {
    return (
        <Fragment>
            <Head>
                <title>Добавление задачи</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-4">Добавить задачу</h1>
                <TaskAdd />
            </div>
        </Fragment>
    );
}
