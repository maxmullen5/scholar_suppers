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


export const assignChores = async (groupId, users) => {
  try {
    const chores = await getAllChores(groupId);

    if (!users.length) {
      throw new Error("No users available for assigning chores");
    }

    chores.forEach(async (chore) => {
      // Randomly select a user
      const randomUser = users[Math.floor(Math.random() * users.length)];

      // Assign the random user to the chore
      chore.set("user", randomUser);

      try {
        // Save the updated chore back to Parse
        await chore.save();
        console.log(`Chore ${chore.id} assigned to user ${randomUser.id}`);
      } catch (error) {
        console.error("Error saving chore: ", error);
      }
    });
  } catch (error) {
    console.error("Error in assignUserToChore: ", error);
  }
};