import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

export let Users = {};
Users.collection = [];

// READ operation - get all Groups for a specific User in Parse class Group
export const getUsersInGroup = (groupId) => {

  const UserGroup = Parse.Object.extend("UserGroup");
  const userQuery = new Parse.Query(UserGroup);

  const Group = Parse.Object.extend("Group");
  const groupPointer = Group.createWithoutData(groupId);
  userQuery.equalTo("group", groupPointer); // Filter userGroups by the group pointer

  return userQuery.find().then((userGroups) => {

    // Extract the User pointers from those UserGroup objects
    const userPointers = userGroups.map((userGroup) => userGroup.get("user"));

    // Now fetch the actual groups
    const User = Parse.Object.extend("User");
    const userQuery = new Parse.Query(User);
    userQuery.containedIn("objectId", userPointers.map(up => up.id));
    
    return userQuery.find();
  }).then((filteredUsers) => {
    console.log("Groups for current user: ", filteredUsers);
    return filteredUsers;
  });
};