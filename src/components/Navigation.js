import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as FavouriteIcon } from "../images/FavouriteIcon.svg";
import { ReactComponent as ChecklistIcon } from "../images/ChecklistIcon.svg";
import { ReactComponent as Glühbirne1 } from "../images/Glühbirne1.svg";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/list">
        <HomeIcon />
      </NavLink>
      <NavLink to="/favourites">
        <FavouriteIcon />
      </NavLink>
      <NavLink to="/tipps">
        <Glühbirne1 />
      </NavLink>
      <NavLink to="/checklist">
        <ChecklistIcon />
      </NavLink>
    </div>
  );
}
