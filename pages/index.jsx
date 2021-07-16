import React, { Fragment, useContext } from "react";
import Head from "next/head";
import { LocaleContext } from "../src/context/LocaleContext";
import InfoBlock from "../src/components/InfoBlock";
import { useSelector } from "react-redux";
import useFilter from "../src/hooks/filter.hook";

export default function Home() {

    const tasks = useSelector(state => state.tasks.tasks);
    const locale = useContext(LocaleContext);
    const { filterByDeadline } = useFilter();

    return (
        <Fragment>
            <Head>
                <title>{locale.titles.home}</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-3">{locale.titles.home}</h1>
                <InfoBlock
                    all={tasks.length}
                    today={tasks.filter(filterByDeadline).length}
                />
                <p>
                    <span className="logo">TodoList </span>
                    - это небольшой сервис, который может отслеживать/редактировать поставленные задачи.
                </p>
            </div>
        </Fragment>
    );
}
