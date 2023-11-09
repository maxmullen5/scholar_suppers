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

// READ operation - get all groups in Parse class Group
export const getAllGroups = () => {
  const Group = Parse.Object.extend("Group");
  const query = new Parse.Query(Group);
  return query.find().then((results) => {
    console.log("results: ", results);
    // returns array of Group objects
    return results;
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