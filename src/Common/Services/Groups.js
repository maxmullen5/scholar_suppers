import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new group with Name and password
export const createGroup = (Name, Password) => {
  console.log("Creating: ", Name);
  const Group = Parse.Object.extend("Group");
  const group = new Group();
  // using setter to UPDATE the object
  group.set("name", Name);
  group.set("password", Password)
  return group.save().then((result) => {
    // returns new Group object
    return result;
  });
};

// READ operation - get group by ID
export const getById = (id) => {
  const Group = Parse.Object.extend("Group");
  const query = new Parse.Query(Group);
  return query.get(id).then((result) => {
    // return Group object with objectId: id
    return result;
  });
};

export let Groups = {};
Groups.collection = [];

// READ operation - get all Groups for a specific User in Parse class UserGroup
export const getAllGroups = (userId) => {
  const UserGroup = Parse.Object.extend("UserGroup");
  const userQuery = new Parse.Query(UserGroup);

  const User = Parse.Object.extend("User");
  const userPointer = User.createWithoutData(userId);
  userQuery.equalTo("user", userPointer); // filter userGroups by the user pointer

  return userQuery.find().then((userGroups) => {
    // Now we have all UserGroup objects that contain the user pointer
    // Extract the Group pointers from those UserGroup objects
    const groups = userGroups.map((userGroup) => userGroup.get("group"));
    console.log("Groups for current user: ", groups);
    return groups;
  });
};


// DELETE operation - remove group by ID
export const removeGroup = (id) => {
  const Group = Parse.Object.extend("Group");
  const query = new Parse.Query(Group);
  return query.get(id).then((group) => {
    group.destroy();
  });
};