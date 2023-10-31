import React, { useState, useEffect } from "react";
import { getAllGroups, Groups } from "../../Common/Services/Groups";
import Header from "../Header/Header.js";
import MainList from "./MainList";
// import useFetch from "../../Common/Services/useFetch.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Main = () => {
  // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log("data: ", data);
  // Variables in the state to hold data
  const [groups, setGroups] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    if (Groups.collection.length) {
      setGroups(Groups.collection);
    } else {
      getAllGroups().then((groups) => {
        console.log(groups);
        setGroups(groups);
      });
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