import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@fontsource/jost/latin.css";

import Layout from "../components/layout";

import { initGA, logPageView } from "../helpers/analytics";

import customTheme from "../styles/customTheme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      logPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
