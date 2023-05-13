import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Signpage from "./pages/Signpage";
import { AppContext } from "./utils/AppContext";

// const PrivateRoute = ({ children, currentUser }) => {
//   console.log(currentUser);
//   const navigate = useNavigate();
//   if (currentUser === null) navigate("/login");
//   else return <div>{children}</div>;
// };
function App() {
  const { currentUser } = useContext(AppContext);
  return (
    <Routes>
      <Route end path="/" element={<HomePage />} />
      <Route end path="/signin" element={<Signpage />} />
      <Route end path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
