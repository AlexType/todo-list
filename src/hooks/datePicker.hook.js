import moment from "moment";

export default function useDatePicker() {

    const disabledDate = current => {
        return current && current < moment().startOf("day");
    };

    return { disabledDate };
}