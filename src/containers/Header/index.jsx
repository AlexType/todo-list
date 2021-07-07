import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {

    const [visible, setVisible] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <button className="ico-dark" onClick={() => setVisible(true)}>
                            <MenuOutlined />
                        </button>
                    </div>
                    <div className="col-auto">
                        <p className="logo">TodoList</p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <Drawer
                title="TodoList"
                placement="left"
                closable={() => setVisible(true)}
                onClose={() => setVisible(false)}
                visible={visible}
            >
                <div className="row row-cols-1 gy-3">
                    <div className="col">
                        <Link href="/">
                            <a className="header__link">Главная</a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/all-tasks">
                            <a className="header__link">Задачи</a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/add-task">
                            <a className="header__link">Добавить</a>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;