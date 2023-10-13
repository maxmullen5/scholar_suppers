import { Link } from "react-router-dom";
// header function that inputs header nav html
const Header = () => {
    return (
      <div className="nav_div">
        <ul className="navigation">
          <li className="name">
            <a href=".">Scholar Suppers</a>
          </li>
          <li>
            <Link to="/Main">Groups</Link>
          </li>
          <li>
            <Link to="/GroupHome">Meals</Link>
          </li>
          <li>
            <a href="../index.html">Log out</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Header;
  