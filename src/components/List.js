import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink } from "react-router-dom";

import ClinicCard from "./ClinicCard";

export default function List() {
  return (
    <div className="Listlayout">
      <div className="SmallButtons">
        <SmallButton text="Suche" />
        <NavLink to="/add">
          <SmallButton text="Hinzufügen" />
        </NavLink>
        <SmallButton text="Filter" />
      </div>
      <div className="ClinicCardList">
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
        <ClinicCard />
      </div>
    </div>
  );
}
