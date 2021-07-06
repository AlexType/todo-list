import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Radio } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

import { removeTask, updateCompletedTask } from "../../redux/actions/taskActions";
import styles from './TaskItem.module.scss';
import InputChange from './components/InputChange';

export default function TaskItem({ id, title, isCompleted }) {

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(isCompleted);
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        dispatch(updateCompletedTask(id, isChecked));
    }, [isChecked]);

    const deleteHandler = () => {
        dispatch(removeTask(id));
    };

    return (
        <div className="col">
            <div className={`${styles.card} ${isChange ? styles.isChange : ''} ${isChecked ? styles.isChecked : ''}`}>
                {!isChange ?
                    <Radio checked={isChecked} value={isChecked} onClick={() => setIsChecked(!isChecked)}>{title}</Radio> :
                    <InputChange id={id} title={title} setIsChange={setIsChange} />}
                <div className={styles.helpers}>
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
