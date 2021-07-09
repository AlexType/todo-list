import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Input, DatePicker, Button } from "antd";
import { updateDeadline, updateTitleTask } from "../../../redux/actions/taskActions";

export default function InputChange({ id, title, setIsChange, deadline }) {

    const [changeTitle, setChangeTitle] = useState(title);
    const [changeDatePicker, setChangeDatePicker] = useState(deadline);
    const dispatch = useDispatch();

    const onChangeDatePicker = (date) => {
        setChangeDatePicker(date);
    };

    const disabledDate = (current) => {
        return current && current < moment().startOf("day");
    };

    const update = () => {
        dispatch(updateTitleTask(id, changeTitle));
        dispatch(updateDeadline(id, changeDatePicker));
        setIsChange(false);
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Input
                        value={changeTitle}
                        onChange={e => setChangeTitle(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <DatePicker
                        onChange={onChangeDatePicker}
                        disabledDate={disabledDate}
                        format={"DD.MM.YYYY"}
                        defaultValue={changeDatePicker}
                    />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-auto">
                    <Button className="btn-success" onClick={update}>Сохранить</Button>
                </div>
                <div className="col-auto">
                    <Button className="btn-cencel" onClick={() => setIsChange(false)}>Отменить</Button>
                </div>
            </div>
        </div>
    );
}

InputChange.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    setIsChange: PropTypes.func,
    deadline: PropTypes.any,
};