import { Card } from 'antd';
import { EditOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions/taskActions";

export default function TaskItem({ id, title, description }) {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(removeTask(id));
    };

    return (
        <Card
            className="mb-3"
            size="small"
            title={title}
            style={{ width: 300 }}
            actions={[
                <CheckOutlined key="done" />,
                <EditOutlined key="edit" />,
                <CloseOutlined key="remove" onClick={deleteHandler} />,
            ]}
        >
            <p className="mb-0">{description}</p>
        </Card>
    )
}
