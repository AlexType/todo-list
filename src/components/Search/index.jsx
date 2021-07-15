import React, {useContext, useEffect, useRef, useState} from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";
import Link from "next/link";
import styles from "./Search.module.scss";
import {LocaleContext} from "../../context/LocaleContext";

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const tasks = useSelector(state => state.tasks.tasks);
    const ref = useRef();
    const locale = useContext(LocaleContext);

    useEffect(() => {
        const onClick = event => ref.current.contains(event.target) || setSearchText("");
        document.addEventListener("click", onClick);

        return () => document.removeEventListener("click", onClick);
    }, []);

    const filterByTitle = item => {
        searchText && item.title.toLowerCase().includes(searchText);
    };

    return (
        <div
            ref={ref}
            className={styles.search}
        >
            <Input.Search
                className="input-search"
                placeholder={locale.words.search}
                value={searchText}
                onChange={event => setSearchText(event.target.value.toLowerCase())}
                style={{ width: 200 }}
            />
            <ul className={styles.list}>
                {
                    tasks.filter(filterByTitle).map(item =>
                        <li className={styles.task} key={item.id}>
                            <Link href={`/task/${item.id}`}>
                                <a className={styles.title} onClick={() => setSearchText("")}>
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
