import { useState } from "react";
import { useSelector } from "react-redux"
import { Modal, Button } from 'antd';
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
            <h1>Все задачи</h1>
            <TasksList tasks={tasks} />
            <Button className="mt-4" type="primary" onClick={showModal}>
                Добавить задачу
            </Button>
            <Modal
                title="Быстрое добавление"
                visible={visible}
                footer={[
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Закрыть
                    </Button>
                ]}
            >
                <TaskAdd />
            </Modal>
        </div>
    )
}
