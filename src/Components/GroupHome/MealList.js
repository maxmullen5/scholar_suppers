/* STATEFUL PARENT COMPONENT */
const MealList = ({ meals }) => {
    const renderIngredients = (meal) => {
      return meal.get("Ingredients").map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));
    };

    return (
      <div>
        <div>
          {/* Check that the meal object exists */}
          {meals.length > 0 && (
            <ul>
              {/* Using getter for meal Object to display name */}
              {meals.map((meal) => (
                <div key={meal.id} className="card">
                <li>
                  {" "}
                  {meal.get("date").toLocaleDateString()} : {meal.get("name")} - {meal.get("notes")}
                  <ul>{renderIngredients(meal)}</ul> 
                </li>
                </div>
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
  };
  
  export default MealList;
  