import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Input, DatePicker } from "antd";
import { updateDeadline, updateTitleTask } from "../../../../redux/actions/taskActions";
import { LocaleContext } from "../../../../context/LocaleContext";

export default function InputChange({ id, title, setIsChange, deadline }) {

    const [changeTitle, setChangeTitle] = useState(title);
    const [changeDatePicker, setChangeDatePicker] = useState(deadline);
    const locale = useContext(LocaleContext);
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
                <div className="col-12 mb-2">
                    <Input
                        className="task-title__input"
                        value={changeTitle}
                        onChange={e => setChangeTitle(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <DatePicker
                        className="task-title__date-picker"
                        onChange={onChangeDatePicker}
                        disabledDate={disabledDate}
                        format={"DD.MM.YYYY"}
                        defaultValue={changeDatePicker}
                    />
                </div>
            </div>
            <div className="row mt-1 gx-2">
                <div className="col-auto">
                    <button className="task-item__btn done" onClick={update}>
                        {locale.words.save}
                    </button>
                </div>
                <div className="col-auto">
                    <button className="task-item__btn cancel" onClick={() => setIsChange(false)}>
                        {locale.words.undo}
                    </button>
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