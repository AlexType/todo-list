import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "antd";

export default function Filter({ setFilter }) {

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => setFilter(null)}>
                <span>Все</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setFilter("finished")}>
                <span>Выполненые</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => setFilter("active")}>
                <span>Активные</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => setFilter("deadline")}>
                <span>Просрочены</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <div className="filter-item">
                <i className="bi bi-funnel-fill"></i>
                <span>Фильтр</span>
            </div>
        </Dropdown>
    );
}

Filter.propTypes = {
    setFilter: PropTypes.func,
};