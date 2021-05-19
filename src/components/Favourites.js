import SmallButton from "./SmallButton";
import "./List.css";
import ClinicCard from "./ClinicCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItemsFromLocalStorage } from "./Services/ClinicStorage";
import Searchbar from "./Searchbar";

export default function Favourites() {
  const [clinicData, setClinicData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage("clinicData");
    setClinicData(clinic);
  }, []);

  function handleOnNameFilter(filterNameValue) {
    setNameFilter(filterNameValue);
  }

  function handleToggleForm() {
    setShowForm((prevState) => !prevState);
  }

  function renderFavourites() {
    const savedClinic = clinicData.filter((clinicData) => {
      return clinicData.isSaved === true;
    });
    const filteredSavedClinics = savedClinic.filter((clinicData) => {
      if (nameFilter) {
        return (
          clinicData.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinicData.place.toLowerCase().includes(nameFilter.toLowerCase()) ||
          clinicData.notes.toLowerCase().includes(nameFilter.toLowerCase())
        );
      } else {
        return true;
      }
    });
    return filteredSavedClinics.map((savedClinic) => {
      return (
        <article key={savedClinic.id} className="ClinicCardList">
          <Link to={`/singleclinic/${savedClinic.id}`}>
            <ClinicCard clinicData={savedClinic} />
          </Link>
        </article>
      );
    });
  }

  return (
    <div className="Listlayout">
      <div className="SmallButtons">
        <SmallButton text="Suche" onClick={handleToggleForm} />
        <SmallButton text="Hinzufügen" />
        <SmallButton text="Filter" />
      </div>
      {showForm ? <Searchbar onNameChange={handleOnNameFilter} /> : null}
      {renderFavourites()}
    </div>
  );
}
