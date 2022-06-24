import { useAuth0, User } from "@auth0/auth0-react";
import React, { Component }  from 'react';
import { LoginButton } from "./Auth/Login/Login"
import "./App.scss";
import Home from "./pages/Home";
import Users from "./container/Users/Users";



function App() {
  const { isAuthenticated } = useAuth0();

  return (
  
    <div className="App">
        {isAuthenticated ? (
          <>
 
      <Home /> 
      <Users />
          </>
          
        ) :
        (
         
      <LoginButton />
         
        )}
  
    </div>

  );
}

export default App;
