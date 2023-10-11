/* STATEFUL PARENT COMPONENT */
const GroupHomeList = ({ meals }) => {
    return (
      <div>
        <div>
          {/* Check that the meal object exists */}
          {meals.length > 0 && (
            <ul>
              {/* Using getter for meal Object to display name */}
              {meals.map((meal) => (
                <div className="group">
                <li key={meal.id}>
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
  
  export default GroupHomeList;
  