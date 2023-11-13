import React, { useState, useEffect } from "react";
import { getAllGroups } from "../../Common/Services/Groups";
import { getCurrentUserId } from "../../Common/Services/AuthService";
import Header from "../Header/Header.js";
import MainList from "./MainList";

const Main = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Call getCurrentUserId to get the ID of the currently logged-in user
    const userId = getCurrentUserId();

    if (userId) {
      // If we have a user ID, fetch the groups associated with this user
      getAllGroups(userId).then((groups) => {
        console.log(groups);
        setGroups(groups);
      });
    } else {
      // If there is no logged-in user, handle accordingly (e.g., redirect to login)
      console.log('No user is currently logged in.');
      // Redirect to login or other appropriate action
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="outer_div">
        <div>
          <h1>Welcome Back!</h1>
          <h2>Your Groups:</h2>
        </div>
        <MainList groups={groups} />
      </div>
    </div>
  );
};

export default Main;
