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

    // Shuffle the users array
    for (let i = users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [users[i], users[j]] = [users[j], users[i]];
    }

    // Assign chores in a round-robin fashion
    chores.forEach(async (chore, index) => {
      const userIndex = index % users.length;
      const userToAssign = users[userIndex];

      chore.set("user", userToAssign);

      try {
        await chore.save();
        console.log(`Chore ${chore.id} assigned to user ${userToAssign.id}`);
      } catch (error) {
        console.error("Error saving chore: ", error);
      }
    });
  } catch (error) {
    console.error("Error in assignChores: ", error);
  }
};