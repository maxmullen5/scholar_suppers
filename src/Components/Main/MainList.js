/* STATEFUL PARENT COMPONENT */
const MainList = ({ groups }) => {
    return (
      <div>
        <div>
          {/* Check that the group object exists */}
          {groups.length > 0 && (
            <ul>
              {/* Using getter for group Object to display name */}
              {groups.map((group) => (
                <div key={group.id} className="group">
                <li>
                  {" "}
                  {group.get("name")}
                </li>
                </div>
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
  };
  
  export default MainList;
  