import Link from 'next/link'
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="row">
                            <div className="col-auto">
                                <Link href="/">
                                    <a className={styles.link}>Главная</a>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link href="/all-tasks">
                                    <a className={styles.link}>Задачи</a>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link href="/add-task">
                                    <a className={styles.link}>Добавить</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <p className={styles.logo}>TodoList</p>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;