const ChoreList = ({ chores }) => {
  return (
    <div>
      {chores.length > 0 && (
        <ul>
          {chores.map((chore) => {
            // Check if user is assigned to the chore
            const assignedUser = chore.get("user") 
              ? `${chore.get("user").get("firstName")} ${chore.get("user").get("lastName")}` 
              : "Unassigned";

            return (
              <div key={chore.id} className="card">
                <li>
                  {chore.get("name")} - {assignedUser}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ChoreList;