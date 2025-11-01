import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Layout } from "../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
