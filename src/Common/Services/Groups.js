import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new group with Name and password
export const createGroup = async (Name, Password) => {
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


// READ operation - get all Groups for a specific User in Parse class Group
export const getAllGroups = (userId) => {

  const UserGroup = Parse.Object.extend("UserGroup");
  const userQuery = new Parse.Query(UserGroup);

  const User = Parse.Object.extend("User");
  const userPointer = User.createWithoutData(userId);
  userQuery.equalTo("user", userPointer); // Filter userGroups by the user pointer

  return userQuery.find().then((userGroups) => {

    // Extract the Group pointers from those UserGroup objects
    const groupPointers = userGroups.map((userGroup) => userGroup.get("group"));

    // Now fetch the actual groups
    const Group = Parse.Object.extend("Group");
    const groupQuery = new Parse.Query(Group);
    groupQuery.containedIn("objectId", groupPointers.map(gp => gp.id));
    
    return groupQuery.find();
  }).then((filteredGroups) => {
    console.log("Groups for current user: ", filteredGroups);
    return filteredGroups;
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