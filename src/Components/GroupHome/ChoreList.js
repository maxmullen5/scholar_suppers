/* STATEFUL PARENT COMPONENT */
const ChoreList = ({ chores }) => {
    return (
      <div>
        <div>
          {/* Check that the chore object exists */}
          {chores.length > 0 && (
            <ul>
              {/* Using getter for chore Object to display name */}
              {chores.map((chore) => (
                <div key={chore.id} className="card">
                <li>
                  {" "}
                  {chore.get("name")}
                </li>
                </div>
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
  };
  
  export default ChoreList;