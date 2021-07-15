import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";
import Link from "next/link";
import styles from "./Search.module.scss";

const Search = () => {

    const [find, setFind] = useState("");
    const ref = useRef();
    const tasks = useSelector(state => state.tasks.tasks);

    const filterByTitle = item => find && item.title.toLowerCase().includes(find);

    useEffect(() => {
        const onClick = e => ref.current.contains(e.target) || setFind("");
        document.addEventListener("click", onClick);

        return () => document.removeEventListener("click", onClick);
    }, []);

    return (
        <div className={styles.search} ref={ref}>
            <Input.Search
                className="input-search"
                placeholder="Поиск"
                value={find}
                onChange={event => setFind(event.target.value.toLowerCase())}
                style={{ width: 200 }}
            />
            <ul className={styles.list}>
                {
                    tasks.filter(filterByTitle).map(item =>
                        <li className={styles.task} key={item.id}>
                            <Link href={`/task/${item.id}`}>
                                <a className={styles.title} onClick={() => setFind("")}>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Search;