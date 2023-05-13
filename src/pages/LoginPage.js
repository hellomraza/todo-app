import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserAuthentication from "../firebase/UserAuth";
import { AppContext } from "../utils/AppContext";

const LoginPage = () => {
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    UserAuthentication.LoginUser({
      email: email.value,
      password: password.value,
    });
  };
  // useEffect(() => {
  //   if (currentUser) navigate("/");
  // });
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center w-full ">
        <input
          className="border w-96 px-3 py-2 bg-slate-400"
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="border w-96 px-3 py-2 bg-slate-400"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
