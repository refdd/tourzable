import "@/styles/globals.css";
import { ContextProvider } from "../contexts/ContextProvider";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import Router from "next/router";
export default function App({ Component, pageProps, session }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <SessionProvider session={session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  );
}
