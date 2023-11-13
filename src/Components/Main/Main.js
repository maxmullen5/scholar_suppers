import React, { useState, useEffect } from "react";
import { getAllGroups } from "../../Common/Services/Groups";
import { getCurrentUserId, getCurrentUserName } from "../../Common/Services/AuthService";
import Header from "../Header/Header.js";
import MainList from "./MainList";

const Main = () => {
  const [groups, setGroups] = useState([]);
  const [userName, setUserName] = useState(''); // State to store the user's name

  useEffect(() => {
    const userId = getCurrentUserId();

    if (userId) {
      // Fetch the user's name
      const name = getCurrentUserName(); // Assuming getCurrentUserName returns the name directly
      setUserName(name);

      // Fetch the groups associated with this user
      getAllGroups(userId).then((groups) => {
        console.log(groups);
        setGroups(groups);
      });
    } else {
      console.log('No user is currently logged in.');
      // Redirect to login or other appropriate action
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="outer_div">
        <div>
          <h1>Welcome Back, {userName}!</h1>
          <h2>Your Groups:</h2>
        </div>
        <MainList groups={groups} />
      </div>
    </div>
  );
};

export default Main;
