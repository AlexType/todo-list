import React from "react";
import PropTypes from "prop-types";
import { Empty, Button } from "antd";
import { useRouter } from "next/router";
import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {

    const router = useRouter();

    return (
        <article className="row row-cols-1 gy-3">
            {
                tasks.length ?
                    tasks.map(item => <TaskItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        isCompleted={item.isCompleted}
                        created={item.created}
                        finished={item.finished}
                        deadline={item.deadline}
                    />)
                    :
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 160 }}
                        description={<span>У вас пока нет задач</span>} >
                        <Button className="btn-success" onClick={() => router.push("/add-task")}>
                            Создать задачу
                        </Button>
                    </Empty>
            }
        </article>
    );
}

TasksList.propTypes = {
    tasks: PropTypes.array,
};
