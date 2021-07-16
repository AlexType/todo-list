import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
import { LOCALES } from "../../constants/locales";
import styles from "./Locale.module.scss";

const Locale = () => {

    const router = useRouter();
    const [activeLang, setActiveLang] = useState(router.locale);

    const changeLanguage = locale => {
        router.push(router.pathname, router.asPath, { locale });
        setActiveLang(locale);
    };

    const menu = (
        <Menu>
            {
                LOCALES.map(item =>
                    <Menu.Item
                        key={item.lang}
                        onClick={() => changeLanguage(item.lang)}
                        className={styles.item}
                    >
                        {item.title}
                        {activeLang === item.lang && <i className="bi bi-check"></i>}
                    </Menu.Item>)
            }
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger="click">
            <button className="btn-ico-lignt">
                <i className="bi bi-translate"></i>
            </button>
        </Dropdown>
    );
};

export default Locale;