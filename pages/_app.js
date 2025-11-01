import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Layout } from "../components";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance outside the component to persist across renders
// const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    // <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    // {/* </QueryClientProvider> */}
  );
}

export default MyApp;
