import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SimpleReactLightbox from "simple-react-lightbox";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
