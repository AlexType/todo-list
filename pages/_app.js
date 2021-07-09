import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ConfigProvider } from "antd";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import Header from "../src/containers/Header";
import Footer from "../src/containers/Footer";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {

    return (
        <ConfigProvider locale={locale}>
            <Provider store={store}>
                <Head>
                    <title>TodoList</title>
                </Head>
                <Header />
                <main className="py-4">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </Provider >
        </ConfigProvider>
    );
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};