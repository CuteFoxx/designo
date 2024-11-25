import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink className="header__nav-link" to="/">
          OUR COMPANY
        </NavLink>
      </li>
      <li>
        <NavLink className="header__nav-link" to="/">
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink className="header__nav-link" to="/locations">
          LOCATIONS
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
