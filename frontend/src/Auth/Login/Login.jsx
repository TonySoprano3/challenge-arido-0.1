import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.scss';
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="app__login">
    <h1>Árido Challenge 2022</h1>
    <p>by: Lautaro Ortiz - FrontEnd Dev</p>
    <br/>
    <button className="btn__login" onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  )
}
