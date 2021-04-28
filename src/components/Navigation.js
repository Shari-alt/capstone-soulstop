import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as FavouriteIcon } from "../images/FavouriteIcon.svg";
import { ReactComponent as ChecklistIcon } from "../images/ChecklistIcon.svg";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/list">
        <HomeIcon />
      </NavLink>
      <NavLink to="/favourites">
        <FavouriteIcon />
      </NavLink>
      <NavLink to="/checklist">
        <ChecklistIcon />
      </NavLink>
    </div>
  );
}
