import { useEffect } from "react";
import { logoutUser } from "../../Common/Services/AuthService";
import { useNavigate } from "react-router-dom";

const AuthLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser()
      .then((success) => {
        if (success) {
          alert("You have been logged out.");
          navigate("/auth"); // or wherever you want to redirect after logout
        } else {
          navigate("/"); // If there's an error, navigate to the homepage or another appropriate page
        }
      });
  }, [navigate]);

  return null; // This component doesn't need to render anything
};

export default AuthLogout;
