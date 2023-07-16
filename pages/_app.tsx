import { wrapper } from '../src/entities/store';
import { Provider } from 'react-redux';
import Layout from '../src/shared/Layout/Layout';
import Script from 'next/script';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import useScrollRestoration from '../src/hooks/useScrollRestoration';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
    const { store } = wrapper.useWrappedStore(pageProps);
    const router = useRouter();

    useEffect(() => {
        // Перезагрузка страницы возвращает на первый экран
        if (router.pathname === '/' && router.asPath.includes('#')) {
            window.location.href = '/';
        }
    });

    useScrollRestoration(router);

    return (
        <Provider store={store}>
            <Layout>
                <Script src='/CoMagicScript.js' />
                <Script src='/YandexMetrikaScript.js' />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
