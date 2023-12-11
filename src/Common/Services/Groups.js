import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new group with Name and password
export const createGroup = async (Name, Password, userId) => {
  console.log("Creating: ", Name);
  const Group = Parse.Object.extend("Group");
  const group = new Group();

  // Set the group's name and password
  group.set("name", Name);
  group.set("password", Password);

  try {
    // Save the new Group object
    const savedGroup = await group.save();

    // Only proceed if the group was successfully created
    if (savedGroup) {
      const UserGroup = Parse.Object.extend("UserGroup");
      const userGroup = new UserGroup();

      // Ensure you have a valid User object
      const userQuery = new Parse.Query(Parse.User);
      const user = await userQuery.get(userId);

      // Check if the user actually has a username set
      if (!user.get("username")) {
        throw new Error("The user object is missing the username field.");
      }

      // Set the user and group pointers on the UserGroup object
      userGroup.set("user", user);
      userGroup.set("group", savedGroup);

      // Save the UserGroup object
      await userGroup.save();

      // Return the new Group object
      return savedGroup;
    } else {
      throw new Error("Group creation failed");
    }
  } catch (error) {
    console.error("Error creating UserGroup relationship:", error);
    // Log the full error for debugging purposes
    if (error instanceof Parse.Error) {
      console.error("Parse Error code:", error.code);
      console.error("Parse Error message:", error.message);
    }
    throw new Error("Failed to create group and user group relationship");
  }
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


// DELETE operation - remove UserGroup by Group ID for the current user
export const removeGroup = (groupId, userId) => {
  const UserGroup = Parse.Object.extend("UserGroup");
  const userGroupQuery = new Parse.Query(UserGroup);

  // Create a pointer to the User with the provided userId
  const userPointer = {
    __type: 'Pointer',
    className: '_User',
    objectId: userId
  };

  // Create a pointer to the Group with the provided groupId
  const groupPointer = {
    __type: 'Pointer',
    className: 'Group',
    objectId: groupId
  };

  // Set conditions to find the UserGroup row that matches both the user and the group
  userGroupQuery.equalTo("user", userPointer);
  userGroupQuery.equalTo("group", groupPointer);

  return userGroupQuery.first().then((userGroup) => {
    // If an entry exists, delete it
    if (userGroup) {
      return userGroup.destroy();
    } else {
      throw new Error("Membership not found");
    }
  }).catch((error) => {
    console.error("Error removing user from group: ", error);
  });
};
