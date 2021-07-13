import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import TaskInfo from "../../src/components/TaskInfo";

export default function Task() {

    const router = useRouter();
    const [task] = useSelector(state => state.tasks.tasks.filter(item => item.id === router.query.id));

    return (
        <Fragment>
            <Head>
                <title>Таск</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-4">Информация по задаче</h1>
                <div className="description">
                    {task ? <TaskInfo task={task} /> : <Skeleton active />}
                </div>
            </div>
        </Fragment>
    );
}
