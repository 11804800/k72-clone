import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./Components/Context/Context.jsx";
import FullScreenNav from "./Components/Navigation/FullScreenNav.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <FullScreenNav />
        <App />
      </BrowserRouter>
    </Context>
  </StrictMode>
);
