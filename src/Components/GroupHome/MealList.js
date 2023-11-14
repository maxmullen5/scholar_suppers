/* STATEFUL PARENT COMPONENT */
const MealList = ({ meals }) => {
    return (
      <div>
        <div>
          {/* Check that the meal object exists */}
          {meals.length > 0 && (
            <ul>
              {/* Using getter for meal Object to display name */}
              {meals.map((meal) => (
                <div key={meal.id} className="group">
                <li>
                  {" "}
                  {meal.get("name")}
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
  