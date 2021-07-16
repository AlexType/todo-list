import React, { useState } from "react";
import Link from "next/link";
import Search from "../Search";
import Locale from "../Locale";
import TaskAdd from "../TaskAdd";
import Menu from "./components/Menu";
import styles from "./Header.module.scss";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [addTaskVisible, setAddTaskVisible] = useState(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.item}>
                        <button className="btn-ico-lignt me-3" onClick={() => setMenuVisible(true)}>
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                        </button>
                        <Link href="/">
                            <a className="btn-ico-lignt me-3">
                                <i className="bi bi-house-fill"></i>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Search />
                    </div>
                    <div className={styles.item}>
                        <button className="btn-ico-lignt me-3" onClick={() => setAddTaskVisible(!addTaskVisible)}>
                            <i className="bi bi-plus-square"></i>
                        </button>
                        <Locale />
                        <Link href="https://github.com/AlexType">
                            <a target="_blank" className="btn-ico-lignt mx-3">
                                <i className="bi bi-github"></i>
                            </a>
                        </Link>
                        <Link href="https://t.me/AlexColdD">
                            <a target="_blank" className="btn-ico-lignt">
                                <i className="bi bi-telegram"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Menu
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
            />
            <TaskAdd
                visible={addTaskVisible}
                setVisible={setAddTaskVisible}
            />
        </header>
    );
};

export default Header;
