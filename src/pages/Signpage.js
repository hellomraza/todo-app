import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserAuthentication from "../firebase/UserAuth";
import { AppContext } from "../utils/AppContext";

const Signpage = () => {
  const { users } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const isUserExist = users.find((user) => user.email === email.value);
    if (isUserExist) {
      alert("User Already Exist");
      navigate("/login");
    } else {
      UserAuthentication.SigninUser({
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <div>
      <form className="flex flex-col items-center w-full " onSubmit={onSubmit}>
        <input
          name="email"
          className="border w-96 px-3 py-2 bg-slate-400"
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          className="border w-96 px-3 py-2 bg-slate-50"
          type="password"
          placeholder="password"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signpage;
