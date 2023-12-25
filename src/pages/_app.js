import "@/styles/globals.css";
import Head from "next/head";
import {Fragment} from "react";

export default function App({Component, pageProps}) {
  return (
    <Fragment>
      <Head>
        <title>locofy-react-nextjs-project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
