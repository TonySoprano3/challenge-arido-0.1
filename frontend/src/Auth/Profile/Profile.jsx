import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Logout/Logout";
import {FaUserAlt, FaMapMarkerAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import './Profile.scss'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <section className="app__profile">
        
        <img src={user.picture} alt={user.name} />
        <p className="app-user" ><b><FaUserAlt/>{user.name}</b></p>
        <p> <HiMail />{user.email}</p>
        <p> <FaMapMarkerAlt />{`${user.zoneinfo="San Luis"} - ${user.locale}`}</p>

        <LogoutButton />
      </section>
    )
  );
};
