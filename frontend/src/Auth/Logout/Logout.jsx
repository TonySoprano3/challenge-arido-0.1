import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Login/Login.scss';
import './Logout.scss';
export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn__login btn__logout" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};
