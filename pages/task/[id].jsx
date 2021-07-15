import React, { Fragment, useContext } from "react";
import Head from "next/head";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LocaleContext } from "../../src/context/LocaleContext";
import TaskInfo from "../../src/components/TaskInfo";

export default function Task() {

    const router = useRouter();
    const [task] = useSelector(state => state.tasks.tasks.filter(item => item.id === router.query.id));
    const locale = useContext(LocaleContext);

    return (
        <Fragment>
            <Head>
                <title>{locale.titles.task}</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-4">{locale.titles.task}</h1>
                <div className="description">
                    {task ? <TaskInfo task={task} /> : <Skeleton active />}
                </div>
            </div>
        </Fragment>
    );
}
