import React, { Fragment, useContext, useState } from "react";
import Head from "next/head";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { LocaleContext } from "../../src/context/LocaleContext";
import TasksList from "../../src/components/TasksList";
import TaskAdd from "../../src/components/TaskAdd";
import Filter from "../../src/components/Filter";
import useFilter from "../../src/hooks/filter.hook";

export default function AllTasks() {

    const [modalVisible, setModalVisible] = useState(false);
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
                <Button className="btn-success mt-4"
                    onClick={() => setModalVisible(true)}
                >
                    {locale.events.addTask}
                </Button>
                <Modal
                    title="Быстрое добавление"
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                >
                    <TaskAdd />
                </Modal>
            </div >
        </Fragment>
    );
}
