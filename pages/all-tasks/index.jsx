import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
import TasksList from "../../src/components/TasksList";
import TaskAdd from "../../src/components/TaskAdd";

export default function AllTasks() {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <div className="container">
            <h1 className="title-page mb-4">Все задачи</h1>
            <TasksList tasks={tasks} />
            <Button className="btn-success mt-4" onClick={showModal}>
                Добавить задачу
            </Button>
            <Modal
                title="Быстрое добавление"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" className="btn-success" onClick={handleCancel}>
                        Готово
                    </Button>
                ]}
            >
                <TaskAdd />
            </Modal>
        </div>
    );
}
