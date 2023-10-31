import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import Header from "../Header/Header.js"

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
      <Header />
      <div class="outer_div">
        <div>
          <h1 class="title">Scholar Suppers</h1>
          <h2 class="slogan">Helping roommates coordinate meals</h2>
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
      <Link to="/auth/register">
        <button className="btn btn-primary">Register</button>
      </Link>
      <Link to="/auth/login">
        <button className="btn btn-secondary">Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
