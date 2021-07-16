import React, { Fragment, useContext, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { LocaleContext } from "../../src/context/LocaleContext";
import TasksList from "../../src/components/TasksList";
import TaskAdd from "../../src/components/TaskAdd";
import Filter from "../../src/components/Filter";
import useFilter from "../../src/hooks/filter.hook";

export default function AllTasks() {

    const [addTaskVisible, setAddTaskVisible] = useState(false);
    const [filters, setFilter] = useState(null);
    const tasks = useSelector(state => state.tasks.tasks);
    const locale = useContext(LocaleContext);
    const { filteredList } = useFilter();

    return (
        <Fragment>
            <Head>
                <title>{locale.titles.allTasks}</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-4">{locale.titles.allTasks}</h1>
                <div className="row justify-content-end mb-4">
                    <div className="col-auto">
                        <Filter setFilter={setFilter} />
                    </div>
                </div>
                <TasksList tasks={filteredList(tasks, filters)} />
                <button className="btn-add mt-4" onClick={() => setAddTaskVisible(true)}>
                    <i className="bi bi-plus"></i>
                    <span>{locale.events.addTask}</span>
                </button>
                <TaskAdd
                    visible={addTaskVisible}
                    setVisible={setAddTaskVisible}
                />
            </div >
        </Fragment>
    );
}
