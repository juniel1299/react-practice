import GlobalLayouts from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalLayouts>
        <Component {...pageProps} />
      </GlobalLayouts> 
    </>
  );
}
