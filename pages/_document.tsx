import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='ru'>
            <Head>
                <Script src='https://app.comagic.ru/static/cs.min.js?k=6cfa8yWQ94R9pQ2oGE8eLPGloudodG8k' strategy='beforeInteractive' />
                <Script src='/GTMScript.js' strategy='beforeInteractive' />
                <link rel='preload' href='/fonts/TTTravels-DemiBold.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
                <link rel='preload' href='/fonts/TTTravels-Regular.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
            </Head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSKGV6H"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                ></noscript>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<div><img src="https://mc.yandex.ru/watch/91674111" style="position:absolute; left:-9999px;" alt="" /></div>`,
                    }}
                ></noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
