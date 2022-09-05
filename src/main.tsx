import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import storeConfig from "./store";

const store = storeConfig();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <meta name="apple-mobile-web-app-status-bar-style" content="#280034" />
    <meta name="theme-color" content="#280034" />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
