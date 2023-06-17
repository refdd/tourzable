import "@/styles/globals.css";
import { ContextProvider } from "../contexts/ContextProvider";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import Router from "next/router";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import React from "react";
import * as locales from "@mui/material/locale";

const cacheLtr = createCache({
  key: "muiltr",
});

const cacheRtl = createCache({
  key: "muirtl",
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrTheme = createTheme({ direction: "ltr" });
const rtlTheme = createTheme({ direction: "rtl" });
export default function App({ Component, pageProps, session }) {
  const [isRtl, setIsRtl] = React.useState(false);
  const [value, setValue] = React.useState("initial value");
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);
  // console.log(ltrTheme);
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
        <I18nextProvider i18n={i18n}>
          <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
            <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </I18nextProvider>
      </ContextProvider>
    </SessionProvider>
  );
}
