import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-N5GCXSTB" />
    </>
  );
}
