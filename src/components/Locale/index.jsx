import React from "react";
import { Dropdown, Menu } from "antd";
import { useRouter } from "next/router";

const Locale = () => {

    const router = useRouter();

    const changeLanguage = locale => {
        router.push(router.pathname, router.asPath, { locale });
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeLanguage("ru")}>
                <span>Русский</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeLanguage("en")}>
                <span>English</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <button className="btn-ico-lignt">
                <i className="bi bi-translate"></i>
            </button>
        </Dropdown>
    );
};

export default Locale;