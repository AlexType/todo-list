import React, { Fragment, useContext } from "react";
import Head from "next/head";
import { LocaleContext } from "../../src/context/LocaleContext";
import TaskAdd from "../../src/components/TaskAdd";

export default function AddTask() {

    const locale = useContext(LocaleContext);

    return (
        <Fragment>
            <Head>
                <title>{locale.titles.addTask}</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-4">{locale.titles.addTask}</h1>
                <TaskAdd />
            </div>
        </Fragment>
    );
}
