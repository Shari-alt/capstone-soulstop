import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "./Services/ClinicStorage";
import ClinicCard from "./ClinicCard";

function ClinicList() {
  const [clinicData, setClinicData] = useState([]);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage();
    setClinicData(clinic);
  }, []);

  function renderClinics() {
    return clinicData.map((singleClinicData, index) => {
      return (
        <article className="ClinicCardList">
          <Link to={`/singleclinic/${singleClinicData.id}`}>
            {ClinicCard.length > 0 && (
              <ClinicCard clinicData={singleClinicData} />
            )}
          </Link>
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
      {renderClinics()}
    </div>
  );
}
export default ClinicList;
