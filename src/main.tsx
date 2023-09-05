import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
  body: `"Raleway", sans-serif`,
  heading: `'Poppins', sans-serif`,
};
const theme = extendTheme({
  colors: {
    brand: {
      main: "#c1f377",
      button: "#a5f88c",
      accent: "#a8f560",
      secondary: "#ffdf00",
      main_dark: "#2c4432",
      background: "#f8f9fd",
    },
  },
  fonts,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
