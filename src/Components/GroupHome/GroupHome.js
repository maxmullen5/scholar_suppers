import React, { useState, useEffect } from "react";
import { getAllMeals, Meals } from "../../Common/Services/Meals";
import Header from "../Header/Header.js";
import GroupList from "./GroupHomeList";
// import useFetch from "../../Common/Services/useFetch.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const GroupHome = () => {
  // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log("data: ", data);
  // Variables in the state to hold data
  const [meals, setMeals] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    if (Meals.collection.length) {
      setMeals(Meals.collection);
    } else {
      getAllMeals().then((meals) => {
        console.log(meals);
        setMeals(meals);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div class="outer_div">
      <div>
        <h1>Welcome Back!</h1>
        <h2>Your Meals:</h2>
      </div>
    </div>
      <GroupList meals={meals} />
    </div>
  );
};

export default GroupHome;