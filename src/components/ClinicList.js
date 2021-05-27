import SmallButton from "./SmallButton";
import "./List.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../services/ClinicStorage";
import ClinicCard from "./ClinicCard";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import { filterTherapy } from "./filterTherapy";

function ClinicList() {
  const [clinicData, setClinicData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [insuranceFilter, setInsuranceFilter] = useState("beide");
  const [kunstFilter, setKunstFilter] = useState(false);
  const [sportFilter, setSportFilter] = useState(false);
  const [gruppenFilter, setGruppenFilter] = useState(false);
  const [bewegungFilter, setBewegungFilter] = useState(false);
  const [körperFilter, setKörperFilter] = useState(false);
  const [tanzFilter, setTanzFilter] = useState(false);
  const [wellnessFilter, setWellnessFilter] = useState(false);
  const [musikFilter, setMusikFilter] = useState(false);

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

  function handleSearchFilterTherapy(
    kunstFilterValue,
    sportFilterValue,
    gruppenFilterValue,
    bewegungFilterValue,
    körperFilterValue,
    tanzFilterValue,
    wellnessFilterValue,
    musikFilterValue
  ) {
    setKunstFilter(kunstFilterValue);
    setSportFilter(sportFilterValue);
    setGruppenFilter(gruppenFilterValue);
    setBewegungFilter(bewegungFilterValue);
    setKörperFilter(körperFilterValue);
    setTanzFilter(tanzFilterValue);
    setWellnessFilter(wellnessFilterValue);
    setMusikFilter(musikFilterValue);
  }

  const therapyFilter = filterTherapy(
    clinicData,
    kunstFilter,
    sportFilter,
    gruppenFilter,
    bewegungFilter,
    körperFilter,
    tanzFilter,
    wellnessFilter,
    musikFilter
  );

  function filterByName(clinic) {
    if (nameFilter) {
      return (
        clinic.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        clinic.place.toLowerCase().includes(nameFilter.toLowerCase()) ||
        clinic.notes.toLowerCase().includes(nameFilter.toLowerCase())
      );
    } else {
      return true;
    }
  }

  function filterByInsurance(clinic) {
    if (insuranceFilter) {
      return (
        clinic.insurance === insuranceFilter || insuranceFilter === "beide"
      );
    } else {
      return true;
    }
  }

  const filteredClinics = clinicData
    .filter(filterByName)
    .filter(filterByInsurance);

  console.log(filteredClinics);

  function renderClinics() {
    console.log(filteredClinics);

    return filteredClinics.map((clinicData) => {
      const { id } = clinicData;
      return (
        <article key={id} className="ClinicCardList">
          <ClinicCard clinicData={clinicData} />
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
          {showFilter ? (
            <Filter
              therapy={clinicData.therapy}
              onInsuranceFilter={onInsuranceFilter}
              onTherapyFilter={handleSearchFilterTherapy}
            />
          ) : null}
        </div>
      </div>
      {renderClinics()}
    </div>
  );
}
export default ClinicList;
