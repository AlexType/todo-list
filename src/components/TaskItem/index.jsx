import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Radio } from 'antd';
import { EditFilled, DeleteFilled, CheckOutlined } from '@ant-design/icons';

import { removeTask } from "../../redux/actions/taskActions";
import styles from './TaskItem.module.scss';
import InputChange from './components/InputChange';

export default function TaskItem({ id, title }) {

    const [isChange, setIsChange] = useState(false);

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(removeTask(id));
    };

    return (
        <div className="col">
            <div className={`${styles.card} ${isChange ? styles.isChange : ''}`}>
                {!isChange ?
                    <Radio >{title}</Radio> :
                    <InputChange id={id} title={title} setIsChange={setIsChange} />}
                <div className={styles.helpers}>
                    <div className="ico-lg">
                        <CheckOutlined />
                    </div>
                    <div className="ico-lg mx-1" onClick={() => setIsChange(!isChange)}>
                        <EditFilled />
                    </div>
                    <div className="ico-lg" onClick={deleteHandler} >
                        <DeleteFilled />
                    </div>
                </div>
            </div>
        </div>
    )
}
