import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";
import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {
    return (
        <article className="row row-cols-4 gy-3">
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
                    <div className="col-auto mx-auto">
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{ height: 160 }}
                            description={<span className="mt-4">У вас пока нет задач</span>} >
                        </Empty>
                    </div>
            }
        </article>
    );
}

TasksList.propTypes = {
    tasks: PropTypes.array,
};
