/* STATEFUL PARENT COMPONENT */
const MainList = ({ groups }) => {
    return (
      <div>
        <div>
          {/* Check that the lesson object exists */}
          {groups.length > 0 && (
            <ul>
              {/* Using getter for lesson Object to display name */}
              {groups.map((lesson) => (
                <div className="group">
                <li key={lesson.id}>
                  {" "}
                  {lesson.get("name")}
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
  