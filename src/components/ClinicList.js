import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../services/ClinicStorage";
import ClinicCard from "./ClinicCard";
import Searchbar from "./Searchbar";
import Filter from "./Filter";

function ClinicList() {
  const [clinicData, setClinicData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");

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

  function onInsuranceFilter(FilterValue) {
    if (FilterValue === "privat") {
      setStatusFilter("privat");
    } else if (FilterValue === "public") {
      setStatusFilter("public");
    } else if (FilterValue === "both") {
      setStatusFilter("both");
    }
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
          {ClinicCard.length > 0 && <ClinicCard clinicData={clinicData} />}
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
        <div className="Filter">
          <SmallButton text="Filter" />
          <Filter onInsuranceFilter={onInsuranceFilter} />
        </div>
      </div>
      {renderClinics()}
    </div>
  );
}
export default ClinicList;
