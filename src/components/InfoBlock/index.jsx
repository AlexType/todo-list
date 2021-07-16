import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";
import { LocaleContext } from "../../context/LocaleContext";
import useMoment from "../../hooks/moment.hook";
import styles from "./InfoBlock.module.scss";

export default function InfoBlock({ all, today }) {

    const locale = useContext(LocaleContext);
    const { dateToDay } = useMoment();

    return (
        <div className={styles.infoBlock}>
            <div className={styles.header}>
                <p className={styles.title}>
                    {locale.words.today}
                </p>
                <p className={styles.date}>
                    {dateToDay().format("dddd DD MMMM")}
                </p>
            </div>
            <div className={styles.body}>
                <p className={styles.item}>
                    <span className="me-3">{locale.tasks.total} :</span>
                    <Tag color="#2db7f5">{all}</Tag>
                </p>
            </div>
            <div className={styles.body}>
                <p className={styles.item}>
                    <span className="me-3">{locale.tasks.today} :</span>
                    <Tag color="#87d068">{today}</Tag>
                </p>
            </div>
        </div>
    );
}

InfoBlock.propTypes = {
    all: PropTypes.number,
    today: PropTypes.number,
};