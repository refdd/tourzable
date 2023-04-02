import "@/styles/globals.css";
import { ContextProvider } from "../contexts/ContextProvider";
export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
