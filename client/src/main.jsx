import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import RequestProvider from "./context/RequestContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RequestProvider>
          <App />
        </RequestProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
