import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Layout } from "../components";
import { AppKitProvider } from "../components/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppKitProvider>
      <ThirdwebProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </AppKitProvider>
  );
}

export default MyApp;
