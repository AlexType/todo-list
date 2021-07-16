import React, { useContext, useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { LocaleContext } from "../../context/LocaleContext";
import Search from "../Search";
import Locale from "../Locale";

const Header = () => {

    const [drawerVisible, setDrawerVisible] = useState(false);
    const locale = useContext(LocaleContext);

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center justify-content-between gx-3">
                    <div className="col-auto">
                        <div className="row justify-content-between justify-content-sm-start align-items-center">
                            <div className="col-auto d-flex align-items-center">
                                <button className="btn-ico-lignt me-3" onClick={() => setDrawerVisible(true)}>
                                    <i className="bi bi-grid-3x3-gap-fill"></i>
                                </button>
                                <Link href="/">
                                    <a className="btn-ico-lignt">
                                        <i className="bi bi-house-fill"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center justify-content-sm-start mt-2 mt-sm-0 order-1 order-sm-0">
                        <Search />
                    </div>
                    <div className="col-auto">
                        <div className="row justify-content-center justify-content-sm-end align-items-center gx-3">
                            <div className="col-auto">
                                <button className="btn-ico-lignt">
                                    <i className="bi bi-lightbulb-fill"></i>
                                </button>
                            </div>
                            <div className="col-auto">
                                <Locale />
                            </div>
                            <div className="col-auto">
                                <Link href="https://github.com/AlexType">
                                    <a target="_blank" className="btn-ico-lignt">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link href="https://t.me/AlexColdD">
                                    <a target="_blank" className="btn-ico-lignt">
                                        <i className="bi bi-telegram"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
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
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>
                                {locale.menu.home}
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/all-tasks">
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>
                                {locale.menu.tasks}
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/add-task">
                            <a className="header__link" onClick={() => setDrawerVisible(false)}>
                                {locale.menu.add}
                            </a>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;
