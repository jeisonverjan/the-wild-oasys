import { useEffect } from "react";
import styled from "styled-components";
import { getCabins } from "./services/apiCabins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const H1 = styled.h1`
  color: red;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div>
        <H1>hOLA VITE</H1>
      </div>
    </QueryClientProvider>
  );
}

export default App;
