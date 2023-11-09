import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Common/Services/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();

  // check if user is auth and send back to login if not
  useEffect(() => {
    if (!checkUser()) {
      navigate("/auth");
    }
  }, [navigate]); 

  if (checkUser()) {
    return <Component />;
  } else {
    // This will never be rendered since we're redirecting in the useEffect above.
    return null;
  }
};

export default ProtectedRoute;
