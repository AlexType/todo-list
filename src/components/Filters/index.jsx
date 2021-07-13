import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "antd";

export default function Filters({ setFilters }) {

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => setFilters(null)}>
                <span>Все</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setFilters("finished")}>
                <span>Выполненые</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => setFilters("active")}>
                <span>Активные</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => setFilters("deadline")}>
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

Filters.propTypes = {
    setFilters: PropTypes.func,
};