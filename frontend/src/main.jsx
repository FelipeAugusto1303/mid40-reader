import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/MainPage/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </ChakraProvider>
);
