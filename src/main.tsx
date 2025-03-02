import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/fonts.css";
import "./styles/globals.css";
import "./styles/btn.css";
import "./styles/animation.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@splidejs/splide/dist/css/splide.min.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="32126b48234958e20611a01745d41443"
      secretKey="dfslCcj8zZj6xeK-3UqjpUuE-m5PQsS85dp23wZjAGLyppP0JoeKfQdFOlRzIrET0xJM1VEb3OiE0jpshHUROA"
      // activeChain="binance"
      activeChain="binance"
    >
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
