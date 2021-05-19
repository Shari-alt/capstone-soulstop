import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../components/services/ClinicStorage";
import ClinicCard from "./ClinicCard";
import Searchbar from "./Searchbar";

function ClinicList() {
  const [clinicData, setClinicData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage();
    setClinicData(clinic);
  }, []);

  function handleToggleForm() {
    setShowForm((prevState) => !prevState);
  }

  function handleOnNameFilter(filterNameValue) {
    setNameFilter(filterNameValue);
  }

  function renderClinics() {
    const filterClinics = clinicData.filter((clinic) => {
      if (nameFilter) {
        return (
          clinic.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinic.place.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinic.notes.toLowerCase().includes(nameFilter.toLowerCase())
        );
      } else {
        return true;
      }
    });
    return filterClinics.map((clinicData, index) => {
      return (
        <article className="ClinicCardList">
          <Link to={`/singleclinic/${clinicData.id}`}>
            {ClinicCard.length > 0 && <ClinicCard clinicData={clinicData} />}
          </Link>
        </article>
      );
    });
  }
  return (
    <div className="Listlayout">
      <div className="SmallButtons">
        <div className="Searchbar">
          <SmallButton text="Suche" onClick={handleToggleForm} />
          {showForm ? <Searchbar onNameChange={handleOnNameFilter} /> : null}
        </div>
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
