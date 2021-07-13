import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {

    const [drawerVisible, setDrawerVisible] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="ico-dark" onClick={() => setDrawerVisible(true)}>
                            <MenuOutlined />
                        </button>
                    </div>
                    <div className="col-auto">
                        <p className="logo">TodoList</p>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                        <Link href="https://github.com/AlexType">
                            <a target="_blank" className="ico-reference me-3">
                                <i className="bi bi-github"></i>
                            </a>
                        </Link>
                        <Link href="https://t.me/AlexColdD">
                            <a target="_blank" className="ico-reference">
                                <i className="bi bi-telegram"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Drawer
                title="TodoList"
                placement="left"
                closable={() => setDrawerVisible(true)}
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
            >
                <div className="row row-cols-1 gy-3">
                    <div className="col">
                        <Link href="/">
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>Главная</a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/all-tasks">
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>Задачи</a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/add-task">
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>Добавить</a>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;