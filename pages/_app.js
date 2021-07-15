import React from "react";
import PropTypes from "prop-types";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { useRouter } from "next/router";
import { LocaleContext } from "../src/context/LocaleContext";
import momentRu from "antd/lib/locale/ru_RU";
import momentEn from "antd/lib/locale/en_US";
import Header from "../src/components/Header";
import en from "../src/locales/en.json";
import ru from "../src/locales/ru.json";
import "moment/locale/ru";
import "../src/styles/main.scss";

function MyApp({ Component, pageProps }) {

    const router = useRouter();
    const locale = router.locale === "en" ? en : ru;

    return (
        <ConfigProvider locale={router.locale === "en" ? momentEn : momentRu}>
            <Provider store={store} >
                <LocaleContext.Provider value={locale}>
                    <Header />
                    <main className="py-4">
                        <Component {...pageProps} />
                    </main>
                </LocaleContext.Provider>
            </Provider >
        </ConfigProvider>
    );
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};
