import { Link } from "react-router-dom";
// unautherized header function that inputs header nav html
const UnauthorizedHeader = () => {
    return (
      <div className="nav_div">
        <ul className="navigation">
          <li className="name">
            <a href=".">Scholar Suppers</a>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default UnauthorizedHeader;
  