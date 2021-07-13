import React from "react";
import Head from "next/head";
import moment from "moment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Task() {

    const router = useRouter();
    const [task] = useSelector(state => state.tasks.tasks.filter((item) => item.id === router.query.id));

    return (
        <div className="container">
            <Head>
                <title>Таск</title>
            </Head>
            <h1 className="title-page mb-4">Информация по задаче</h1>
            <div className="description">
                <div className="row">
                    <div className="col">
                        <p className="description__title">Название: {task.title}</p>
                    </div>
                    <div className="col">
                        <p className="description__text">Статус: {task.isCompleted ? "завершено" : "выполняется"}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <p className="description__text">Дата создания: {moment(task.created).format("DD.MM.YYYY, HH:mm:ss")}</p>
                    </div>
                    <div className="col-12">
                        <p className="description__text">Дата окончания: {task.finished ? moment(task.finished).format("DD.MM.YYYY, HH:mm:ss") : "-"}</p>
                    </div>
                    <div className="col-12">
                        <p className="description__text">Дата deadline: {task.deadline ? moment(task.deadline).format("DD.MM.YYYY, HH:mm:ss") : "-"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
