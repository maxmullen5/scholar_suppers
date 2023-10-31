import { Link } from "react-router-dom";
// header function that inputs header nav html
const Header = () => {
    return (
      <div className="nav_div">
        <ul className="navigation">
          <li className="name">
            <a href="/">Scholar Suppers</a>
          </li>
          <li>
            <Link to="/">Groups</Link>
          </li>
          <li>
            <Link to="/group">Meals</Link>
          </li>
          <li>
          <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Header;
  