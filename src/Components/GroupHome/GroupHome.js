import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCurrentUserId, getCurrentUserName } from "../../Common/Services/AuthService";
import { getAllMeals, Meals } from "../../Common/Services/Meals";
import { getAllChores, Chores } from "../../Common/Services/Chores";
import Header from "../Header/Header.js";
import MealList from "./MealList";
import ChoreList from "./ChoreList";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const GroupHome = () => {

  const { groupId } = useParams();

  // Variables in the state to hold data
  const [meals, setMeals] = useState([]);
  const [chores, setChores] = useState([]);
  const [userName, setUserName] = useState('');

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    const userId = getCurrentUserId();

    if (userId) {
      // Fetch the user's name
      const name = getCurrentUserName();
      setUserName(name);
    } 
  }, []);


  useEffect(() => {
    // Function to fetch meals and then chores
    const fetchGroupData = async () => {
      let fetchedMeals = [];
      let fetchedChores = [];

      // Fetch meals
      if (Meals.collection.length) {
        fetchedMeals = Meals.collection;
      } else {
        fetchedMeals = await getAllMeals(groupId);
      }
      setMeals(fetchedMeals);

      // Fetch chores after meals are fetched
      if (Chores.collection.length) {
        fetchedChores = Chores.collection;
      } else {
        fetchedChores = await getAllChores(groupId);
      }
      setChores(fetchedChores);
    };

    // Call the fetch function
    fetchGroupData();
  }, [groupId]);

  // Display the group's meals and chores
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
          <h2>Chores:</h2>
        </div>
        <ChoreList chores={chores}/>
      </div>
    </div>
  );
};

export default GroupHome;
