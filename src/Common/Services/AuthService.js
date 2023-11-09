import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  // set init user info
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  // returns user object
  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

// used to log out a user
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      return true; // Successfully logged out
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
      return false; // Failed to log out
    });
};

// Function to get the current user's ID
export const getCurrentUserId = () => {
  const currentUser = Parse.User.current();
  // Check if there is a logged-in user
  if (currentUser) {
    return currentUser.id; // or currentUser.get('objectId') if using a key to access the ID
  } else {
    return null; // No user is logged in
  }
};