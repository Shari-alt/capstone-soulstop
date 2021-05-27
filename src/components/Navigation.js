import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as HomeIcon } from "../images/HomeIcon.svg";
import { ReactComponent as FavouriteIcon } from "../images/FavouriteIcon.svg";
import { ReactComponent as ChecklistIcon } from "../images/ChecklistIcon.svg";
import { AiOutlineBulb } from "react-icons/ai";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/list">
        <HomeIcon />
      </NavLink>
      <NavLink to="/favourites">
        <FavouriteIcon />
      </NavLink>
      <NavLink to="/tips">
        <AiOutlineBulb className="Lightbulb" />
      </NavLink>
      <NavLink to="/checklist">
        <ChecklistIcon />
      </NavLink>
    </div>
  );
}
