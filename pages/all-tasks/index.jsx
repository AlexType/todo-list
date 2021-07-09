import React, { useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
import TasksList from "../../src/components/TasksList";
import TaskAdd from "../../src/components/TaskAdd";

export default function AllTasks() {

    const [visible, setVisible] = useState(false);
    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <div className="container">
            <Head>
                <title>Все задачи</title>
            </Head>
            <h1 className="title-page mb-4">Все задачи</h1>
            <TasksList tasks={tasks} />
            <Button className="btn-success mt-4" onClick={() => setVisible(true)}>
                Добавить задачу
            </Button>
            <Modal
                title="Быстрое добавление"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key="submit" className="btn-success" onClick={() => setVisible(false)}>
                        Готово
                    </Button>
                ]}
            >
                <TaskAdd />
            </Modal>
        </div>
    );
}
