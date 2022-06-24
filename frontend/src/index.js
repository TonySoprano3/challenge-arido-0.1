import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

  const rootElement = document.getElementById("root");
  const root = ReactDOMClient.createRoot(rootElement);
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_ID
root.render(

  <BrowserRouter>
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      redirectUri= {window.location.origin}
    >
      <App />
    
    </Auth0Provider>
  </BrowserRouter>,
  
);
