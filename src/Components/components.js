import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import AuthLogout from "./Auth/AuthLogout.js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import Main from "./Main/Main";
import GroupHome from "./GroupHome/GroupHome";

// routing for which links take to which pages 
// root will be changed in upcoming feature to sign in page
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/logout" element={<AuthLogout />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={Main} />}
        />
        <Route
          path="/group"
          element={<ProtectedRoute path="/group" element={GroupHome} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}