import React, { useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
import TasksList from "../../src/components/TasksList";
import TaskAdd from "../../src/components/TaskAdd";
import Filters from "../../src/components/Filters";
import useFilter from "../../src/hooks/filter.hook";

export default function AllTasks() {

    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState(null);
    const tasks = useSelector(state => state.tasks.tasks);

    const { filteredList } = useFilter();

    return (
        <div className="container">
            <Head>
                <title>Все задачи</title>
            </Head>
            <h1 className="title-page mb-4">Все задачи</h1>
            <div className="row justify-content-end mb-4">
                <div className="col-auto">
                    <Filters setFilters={setFilters} />
                </div>
            </div>
            <TasksList tasks={filteredList(tasks, filters)} />
            <Button className="btn-success mt-4" onClick={() => setVisible(true)}>
                Добавить задачу
            </Button>
            <Modal
                title="Быстрое добавление"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <TaskAdd />
            </Modal>
        </div >
    );
}
