import React, { useState, useEffect } from "react";
import { getAllGroups, createGroup } from "../../Common/Services/Groups";
import { getCurrentUserId, getCurrentUserName } from "../../Common/Services/AuthService";
import Header from "../Header/Header.js";
import MainList from "./MainList";

const Main = () => {
  const [groups, setGroups] = useState([]);
  const [userName, setUserName] = useState('');
  const [showAddGroupForm, setShowAddGroupForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPassword, setNewGroupPassword] = useState('');

  useEffect(() => {
    const userId = getCurrentUserId();

    if (userId) {
      // Fetch the user's name
      const name = getCurrentUserName();
      setUserName(name);

      // Fetch the groups associated with this user
      getAllGroups(userId).then((groups) => {
        console.log(groups);
        setGroups(groups);
      });
    } else {
      console.log('No user is currently logged in.');
    }
  }, []);

  /*const handleAddGroup = async () => {
    const result = await createGroup(newGroupName, newGroupPassword);
    if (result.success) {
      setGroups([...groups, { id: result.groupId, name: newGroupName }]);
      setShowAddGroupModal(false); // Close the modal
      // Reset the form fields
      setNewGroupName('');
      setNewGroupPassword('');
    } else {
      // Handle errors and display a notification
      console.log("Error adding group")
    }
  };*/

  const handleButtonClick = async () => {
    if (!showAddGroupForm) {
      setShowAddGroupForm(true); // First click: Show the form
    } else {
      // Second click: Submit the form
      const result = await createGroup(newGroupName, newGroupPassword);
      if (result.success) {
        // Update groups state with the new group
        setGroups([...groups, { id: result.groupId, name: newGroupName }]);

        // Reset form state
        setNewGroupName('');
        setNewGroupPassword('');
        setShowAddGroupForm(false);

        // Show success message to the user
        alert("Group created successfully!");
      } else {
        // Handle errors
        alert("Failed to create group. Please try again.");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="outer_div">
        <div>
          <h1>Welcome Back, {userName}!</h1>
          <h2>Your Groups:</h2>
        </div>
        <MainList groups={groups} />
        <button onClick={handleButtonClick}>{showAddGroupForm ? "Create Group" : "Add Group"}</button>
        {showAddGroupForm && (
          <div className="modal">
            <input type="text" placeholder="Group Name" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} />
            <input type="password" placeholder="Password" value={newGroupPassword} onChange={(e) => setNewGroupPassword(e.target.value)} />
          </div>
        )}

      </div>
    </div>
  );
};

export default Main;
