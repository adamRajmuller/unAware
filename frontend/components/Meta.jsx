import Head from 'next/head';

const Meta = () => {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel='shortcut icon' href='/static/favicon.png' />
            <link rel='stylesheet' type='/text/css' href='/static/nprogress.css' />

            <title>unAware</title>
        </Head>
    );
};

export default Meta;
