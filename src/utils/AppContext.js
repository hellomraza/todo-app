/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import UserAuthentication from "../firebase/UserAuth";
import { GET_USERS } from "./constant";

export const AppContext = React.createContext(() => {});

export const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [navigate]);
  console.log(auth.currentUser);
  console.log(user);

  const { data = [], isLoading } = useQuery(
    [GET_USERS],
    UserAuthentication.getUsers,
    { enabled: !user && pathname !== "/login" }
  );

  return (
    <AppContext.Provider
      value={{
        users: data,
        currentUser: user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
