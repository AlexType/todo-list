import { Fragment } from 'react'
import Header from '../src/containers/Header'
import Footer from '../src/containers/Footer'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Header />
            <main className="py-4">
                <Component {...pageProps} />
            </main>
            <Footer />
        </Fragment>
    )
}

export default MyApp
