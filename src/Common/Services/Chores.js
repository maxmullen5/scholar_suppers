import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

export let Chores = {};
Chores.collection = [];

// READ operation - get all Chores for a specific Group in Parse class Chore
export const getAllChores = (groupId) => {

  const Chore = Parse.Object.extend("Chore");
  const query = new Parse.Query(Chore);
  
  const Group = Parse.Object.extend("Group");
  const groupPointer = Group.createWithoutData(groupId);
  query.equalTo("group", groupPointer); // filter chores by the group pointer
  
  return query.find().then((results) => {
    console.log("Chores for current group: ", results);
    // returns array of Chore objects that match the groupId
    return results;
  });
};