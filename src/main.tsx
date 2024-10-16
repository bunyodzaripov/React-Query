import { createRoot } from "react-dom/client";
import Root from "./router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider } from "antd";
import "./index.css";
const queryClient = new QueryClient({
   defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

createRoot(document.getElementById("root")!).render(
   <ConfigProvider
      theme={{
         token: {
            colorPrimary: "#c2410c",
         },
      }}
   >
      <QueryClientProvider client={queryClient}>
         <Root />
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   </ConfigProvider>
);
