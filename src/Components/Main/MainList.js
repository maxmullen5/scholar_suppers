import {Link} from 'react-router-dom';

/* STATEFUL PARENT COMPONENT */
const MainList = ({ groups, onLeaveGroup }) => {
    return (
      <div>
        <div>
          {/* Check that the group object exists */}
          {groups.length > 0 && (
            <ul>
              {/* Using getter for group Object to display name */}
              {groups.map((group) => (
                <Link to={`/group/${group.id}`} className="link">
                <div key={group.id} className="card">
                <li>
                  {" "}
                  {group.get("name")}
                </li>
                <button onClick={() => onLeaveGroup(group.id)} className="leave-group-button">
                  Leave Group
                </button>
                </div>
                </Link>
              ))}
            </ul>
          )}
        </div>{" "}
      </div>
    );
  };
  
  export default MainList;
  