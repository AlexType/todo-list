import moment from "moment";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export default function useMoment() {

    const locale = useContext(LocaleContext);

    const dateFromNow = date => {
        return moment(date).locale(locale.locale).fromNow();
    };

    const dateEndOfFromNow = date => {
        return moment(date).locale(locale.locale).endOf("day").fromNow();
    };

    return { dateFromNow, dateEndOfFromNow };
}