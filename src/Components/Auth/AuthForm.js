import React from "react";
import UnauthorizedHeader from "../Header/UnauthorizedHeader";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  // form for user to regiser or login
  return (
    <div>
      <UnauthorizedHeader />
    <div className="outer_div">
      {/* Conditionally show either login or register */}
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={onSubmit} autoComplete="off">
        {!isLogin ?
          <div>
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="first-name-input"
                value={user.firstName}
                onChange={onChange}
                name="firstName"
                placeholder="first name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="last-name-input"
                value={user.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="last name"
                required
              />
            </div>{" "}
          </div> : <></>}
        <div>
          <div className="form-group">
            <label>Email</label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="email"
              required
            />
          </div>{" "}
          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="password"
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AuthForm;