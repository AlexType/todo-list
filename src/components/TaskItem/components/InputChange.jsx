import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Input, Button } from "antd";
import { updateTitleTask } from "../../../redux/actions/taskActions";

export default function InputChange({ id, title, setIsChange }) {

    const [changeTitle, setChangeTitle] = useState(title);
    const dispatch = useDispatch();

    const updateTitleHandler = () => {
        dispatch(updateTitleTask(id, changeTitle));
        setIsChange(false);
    };

    return (
        <div>
            <Input
                value={changeTitle}
                onChange={e => setChangeTitle(e.target.value)}
            />
            <div className="row mt-2">
                <div className="col-auto">
                    <Button type="primary" onClick={updateTitleHandler}>Сохранить</Button>
                </div>
                <div className="col-auto">
                    <Button type="danger" onClick={() => setIsChange(false)}>Отменить</Button>
                </div>
            </div>
        </div>
    );
}

InputChange.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    setIsChange: PropTypes.func,
};