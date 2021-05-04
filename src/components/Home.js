import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../images/Logo.svg";
import "./Home.css";
import BigButton from "./BigButton";

export default function Home() {
  return (
    <div className="Home">
      <Logo className="Logo" />
      <div className="ButtonList">
        <NavLink to="/add">
          <BigButton text="Klinik hinzufügen" />
        </NavLink>
        <NavLink to="/list">
          <BigButton text="Deine Kliniken" />
        </NavLink>
        <NavLink to="/checklist">
          <BigButton text="Checklist" />
        </NavLink>
      </div>
    </div>
  );
}
