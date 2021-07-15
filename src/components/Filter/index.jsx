import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "antd";
import { LocaleContext } from "../../context/LocaleContext";

export default function Filter({ setFilter }) {

    const locale = useContext(LocaleContext);

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => setFilter(null)}>
                <span>{locale.filter.all}</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setFilter("finished")}>
                <span>{locale.filter.complited}</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => setFilter("active")}>
                <span>{locale.filter.active}</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => setFilter("deadline")}>
                <span>{locale.filter.overdue}</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <div className="filter-item">
                <i className="bi bi-funnel-fill"></i>
                <span>{locale.words.filter}</span>
            </div>
        </Dropdown>
    );
}

Filter.propTypes = {
    setFilter: PropTypes.func,
};