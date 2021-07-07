import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import Header from '../src/containers/Header'
import Footer from '../src/containers/Footer'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <Header />
            <main className="py-4">
                <Component {...pageProps} />
            </main>
            <Footer />
        </Provider >
    )
}

export default MyApp
