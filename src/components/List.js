import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "./Services/ClinicStorage";
import ClinicCard from "./ClinicCard";

function List() {
  const [clinicData, setClinicData] = useState([]);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage("clinicData");
    setClinicData(clinic);
  }, []);

  function renderClinic() {
    return clinicData.map((singleClinic) => {
      return (
        <article className="ClinicCardList">
          <ClinicCard />s
        </article>
      );
    });
  }

  return (
    <div className="Listlayout">
      <div className="SmallButtons">
        <SmallButton text="Suche" />
        <NavLink to="/add">
          <SmallButton text="Hinzufügen" />
        </NavLink>
        <SmallButton text="Filter" />
      </div>
      <article> {renderClinic()} </article>
    </div>
  );
}
export default List;
