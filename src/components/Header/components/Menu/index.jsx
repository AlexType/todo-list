import React, { useContext } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Drawer } from "antd";
import { LocaleContext } from "../../../../context/LocaleContext";
import styles from "./Menu.module.scss";

const Menu = ({ menuVisible, setMenuVisible }) => {

    const locale = useContext(LocaleContext);
    const close = () => setMenuVisible(false);

    return (
        <Drawer
            title="TodoList"
            placement="left"
            onClose={close}
            visible={menuVisible}
        >
            <div className="row row-cols-1 gy-3">
                <div className="col">
                    <Link href="/">
                        <a className={styles.link} onClick={close}>
                            {locale.menu.home}
                        </a>
                    </Link>
                </div>
                <div className="col">
                    <Link href="/all-tasks">
                        <a className={styles.link} onClick={close}>
                            {locale.menu.tasks}
                        </a>
                    </Link>
                </div>
                <div className="col">
                    <Link href="/add-task">
                        <a className={styles.link} onClick={close}>
                            {locale.menu.add}
                        </a>
                    </Link>
                </div>
            </div>
        </Drawer>
    );
};

export default Menu;

Menu.propTypes = {
    menuVisible: PropTypes.bool,
    setMenuVisible: PropTypes.func,
};