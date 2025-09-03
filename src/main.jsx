import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Common/Header.jsx";
import Context from "./Components/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Header>
          <App />
        </Header>
      </BrowserRouter>
    </Context>
  </StrictMode>
);
