import { Link } from 'react-router-dom';

const MainList = ({ groups, onLeaveGroup }) => {
  return (
    <div>
      {groups.length > 0 && (
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              {/* Link component is wrapped inside the <li> */}
              {/*<Link to={`/group/${group.id}`} className="link">*/}
                <div className="card">
                <Link to={`/group/${group.id}`} className="link">
                  <div className="card-header">
                    {/* Display the group name using the group object */}
                    {group.get("name")}
                  </div>
                </Link>
                  <div className="card-body">
                    {/* Button to handle leaving the group */}
                    <button onClick={() => onLeaveGroup(group.id)} className="leave-group-button">
                      Leave Group
                    </button>
                  </div>
                </div>
              {/*</Link>*/}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainList;
