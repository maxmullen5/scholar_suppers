import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCurrentUserId, getCurrentUserName } from "../../Common/Services/AuthService";
import { getAllMeals, Meals } from "../../Common/Services/Meals";
import { getAllChores, assignChores, Chores } from "../../Common/Services/Chores";
import { getUsersInGroup, Users } from "../../Common/Services/Users";
import Header from "../Header/Header.js";
import MealList from "./MealList";
import ChoreList from "./ChoreList";

const GroupHome = () => {
  const { groupId } = useParams();
  const [meals, setMeals] = useState([]);
  const [chores, setChores] = useState([]);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      setUserName(getCurrentUserName());
    } 
  }, []);

  useEffect(() => {
    const fetchGroupData = async () => {
      const fetchedMeals = Meals.collection.length ? Meals.collection : await getAllMeals(groupId);
      setMeals(fetchedMeals);

      const fetchedChores = Chores.collection.length ? Chores.collection : await getAllChores(groupId);
      setChores(fetchedChores);

      const fetchedUsers = Users.collection.length ? Users.collection : await getUsersInGroup(groupId);
      setUsers(fetchedUsers);
    };

    fetchGroupData();
  }, [groupId]);

  const handleAssignChores = async () => {
    if (chores.length && users.length) {
      await assignChores(groupId, users);
      setChores(await getAllChores(groupId));
    }
  };

  return (
    <div>
      <Header />
      <div className="outer_div">
        <div>
          <h1>Welcome Back, {userName}!</h1>
          <h2>Meals:</h2>
        </div>
        <MealList meals={meals} />
        <br />
        <div>
          <h2>
            Chores:
            <button className="btn btn-primary" onClick={handleAssignChores} style={{ marginLeft: "1rem" }}>Reassign</button>
          </h2>
        </div>
        <ChoreList chores={chores} />
      </div>
    </div>
  );
};

export default GroupHome;
