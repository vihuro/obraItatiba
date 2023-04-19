import "../stylesheet/styles.css"
import Head from 'next/head';


function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>THR</title>
        </Head>
            <Component {...pageProps} />
        </>
    )

}
export default App