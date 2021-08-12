import "../assets/css/main.css";
import Head from "next/head";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "../core/store";

function BournixApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const ComponentWithLayout = getLayout(<Component {...pageProps} />);

  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <>
      <Head>
        <title>Bournix</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ComponentWithLayout />
        </PersistGate>
      </Provider>
    </>
  );
}

export function reportWebVitals(metric) {
  console.log(metric);
  if (window.gtag) {
    window.gtag("event", name, {
      event_category:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  }
}

export default BournixApp;
