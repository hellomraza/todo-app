/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { auth } from "../firebase";
import UserAuthentication from "../firebase/UserAuth";
import { GET_USERS } from "./constant";

export const AppContext = React.createContext(() => {});

export const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const { data = [], isLoading } = useQuery(
    [GET_USERS],
    UserAuthentication.getUsers
  );

  const activeUser = auth.currentUser;
  console.log(data);
  return (
    <AppContext.Provider
      value={{
        users: data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
