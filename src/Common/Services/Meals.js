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

// READ operation - get all Meals in Parse class Meal
export const getAllMeals = () => {
  const Meal = Parse.Object.extend("Meal");
  const query = new Parse.Query(Meal);
  return query.find().then((results) => {
    console.log("results: ", results);
    // returns array of Meal objects
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