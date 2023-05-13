import { signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AppContext } from "../utils/AppContext";

const HomePage = () => {
  const { currentUser, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) navigate("/login");
  });

  const LogOut = () => {
    signOut(auth)
      .then(() => {
        alert("LogOut ... ");
        setUser(null);
      })
      .catch((err) => {
        alert("something went wrong");
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={LogOut}>LogOut</button>
    </div>
  );
};

export default HomePage;
