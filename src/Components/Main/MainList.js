import { Link } from 'react-router-dom';

const MainList = ({ groups, onLeaveGroup }) => {
  return (
    <div>
      {groups.length > 0 && (
        <ul>
          {groups.map((group) => (
            // The key prop is now correctly placed on the <li>
            <li key={group.id}>
              {/* The Link component is wrapped inside the <li> */}
              <Link to={`/group/${group.id}`} className="link">
                <div className="card">
                  {/* Display the group name using the group object */}
                  {group.get("name")}
                  {/* Button to handle leaving the group */}
                  <button onClick={() => onLeaveGroup(group.id)} className="leave-group-button">
                    Leave Group
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainList;
