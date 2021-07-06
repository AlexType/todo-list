import { Empty, Button } from 'antd';
import { useRouter } from 'next/router';
import TaskItem from "../TaskItem";

export default function TasksList({ tasks }) {
    const router = useRouter();
    return (
        <div className="row row-cols-1 gy-3">
            {
                tasks.length ?
                    tasks.map(item => <TaskItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        isCompleted={item.isCompleted}
                    />)
                    :
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 160 }}
                        description={<span>У вас пока нет задач</span>} >
                        <Button type="primary" onClick={() => router.push('/add-task')}>
                            Создать задачу
                        </Button>
                    </Empty>
            }
        </div>
    )
}
