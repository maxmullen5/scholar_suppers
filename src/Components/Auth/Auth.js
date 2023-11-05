import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Common/Services/AuthService";
import UnauthorizedHeader from "../Header/UnauthorizedHeader.js"

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <UnauthorizedHeader />
      <div className="outer_div">
        <div>
          <h1 className="title">Scholar Suppers</h1>
          <h2 className="slogan">Helping roommates coordinate meals</h2>
        </div>
        <div>
          <img
            className="logo"
            src="/scholar_suppers_logo.png"
            alt="Scholar Suppers Logo"
            width="470"
            height="300"
          />
        </div>
      </div>
      <div className="button_group">
      <Link to="/auth/register">
        <button className="btn btn-primary">Register</button>
      </Link>
      <Link to="/auth/login">
        <button className="btn btn-secondary">Login</button>
      </Link>
      </div>
    </div>
  );
};

export default AuthModule;
