import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new meal with Name and password
export const createMeal = (Name) => {
  console.log("Creating: ", Name);
  const Meal = Parse.Object.extend("Meal");
  const meal = new Meal();
  // using setter to UPDATE the object
  meal.set("name", Name);
  return meal.save().then((result) => {
    // returns new Meal object
    return result;
  });
};

// READ operation - get meal by ID
export const getById = (id) => {
  const Meal = Parse.Object.extend("Meal");
  const query = new Parse.Query(Meal);
  return query.get(id).then((result) => {
    // return Meal object with objectId: id
    return result;
  });
};

export let Meals = {};
Meals.collection = [];

// READ operation - get all Meals for a specific Group in Parse class Meal
export const getAllMeals = (groupId) => {
  const Meal = Parse.Object.extend("Meal");
  const query = new Parse.Query(Meal);
  
  const Group = Parse.Object.extend("Group");
  const groupPointer = Group.createWithoutData(groupId);
  query.equalTo("group", groupPointer); // filter meals by the group pointer
  
  return query.find().then((results) => {
    console.log("Meals for current group: ", results);
    // returns array of Meal objects that match the groupId
    return results;
  });
};


// DELETE operation - remove meal by ID
export const removeMeal = (id) => {
  const Meal = Parse.Object.extend("Meal");
  const query = new Parse.Query(Meal);
  return query.get(id).then((meal) => {
    meal.destroy();
  });
};