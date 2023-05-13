import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./utils/AppContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(currentUser);
  if (!currentUser) navigate("/login");
  else return { children };
};

export default PrivateRoute;
