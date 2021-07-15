import React, { Fragment, useContext } from "react";
import { LocaleContext } from "../src/context/LocaleContext";
import Head from "next/head";

export default function Home() {

    const locale = useContext(LocaleContext);

    return (
        <Fragment>
            <Head>
                <title>{locale.titles.home}</title>
            </Head>
            <div className="container">
                <h1 className="title-page mb-3">{locale.titles.home}</h1>
                <p>
                    <span className="logo">TodoList </span>
                    - это небольшой сервис, который может отслеживать/редактировать поставленные задачи.
                </p>
            </div>
        </Fragment>
    );
}
