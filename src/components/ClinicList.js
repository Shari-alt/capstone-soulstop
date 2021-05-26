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
  const [showFilter, setShowFilter] = useState(false);
  const [insuranceFilter, setInsuranceFilter] = useState("beide");
  const [therapyFilter, setTherapyFilter] = useState("false");

  useEffect(() => {
    const clinic = getItemsFromLocalStorage();
    setClinicData(clinic);
  }, []);

  function handleToggleForm() {
    setShowForm((prevState) => !prevState);
  }

  function handleToggleFilter() {
    setShowFilter((prevState) => !prevState);
  }

  function handleOnNameFilter(filterNameValue) {
    setNameFilter(filterNameValue);
  }

  function onInsuranceFilter(FilterValue) {
    if (FilterValue === "privat") {
      setInsuranceFilter("privat");
    } else if (FilterValue === "public") {
      setInsuranceFilter("public");
    } else if (FilterValue === "both") {
      setInsuranceFilter("both");
    }
  }

  // function onTherapyFilter(FilterTherapy) {
  //   if (FilterTherapy.Kunst === true) {
  //     setTherapyFilter({ Kunst: checked });
  //   }
  //   if (FilterTherapy.Sport === true) {
  //     setTherapyFilter({ Sport: target.checked });
  //   }
  //   if (FilterTherapy.Gruppen === true) {
  //     setTherapyFilter({ Gruppen: target.checked });
  //   }
  // }

  function renderClinics() {
    const filterClinics = clinicData.filter((clinic) => {
      if (nameFilter) {
        return (
          clinic.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinic.place.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinic.notes.toLowerCase().includes(nameFilter.toLowerCase())
        );
      } else if (insuranceFilter) {
        return (
          clinic.insurance === insuranceFilter || insuranceFilter === "beide"
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
          <SmallButton text="Filter" onClick={handleToggleFilter} />
          {showFilter ? <Filter onInsuranceFilter={onInsuranceFilter} /> : null}
        </div>
      </div>
      {renderClinics()}
    </div>
  );
}
export default ClinicList;
