import "@/styles/globals.css";
import { ContextProvider } from "../contexts/ContextProvider";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  );
}
