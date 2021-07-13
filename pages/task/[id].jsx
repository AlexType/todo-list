import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import TaskInfo from "../../src/components/TaskInfo";

export default function Task() {

    const router = useRouter();
    const [task] = useSelector(state => state.tasks.tasks.filter(item => item.id === router.query.id));

    return (
        <div className="container">
            <Head>
                <title>Таск</title>
            </Head>
            <h1 className="title-page mb-4">Информация по задаче</h1>
            <div className="description">
                {
                    task ?
                        <TaskInfo
                            id={task.id}
                            title={task.title}
                            isCompleted={task.isCompleted}
                            created={task.created}
                            deadline={task.deadline}
                            finished={task.finished}
                        />
                        :
                        <Skeleton active />
                }
            </div>
        </div>
    );
}
