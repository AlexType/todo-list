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
                <div className="row">
                    <div className="col-auto">
                        <InfoBlock
                            all={tasks.length}
                            today={tasks.filter(filterByDeadline).length}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
