import SmallButton from "./SmallButton";
import "./List.css";
import ClinicCard from "./ClinicCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItemsFromLocalStorage } from "../components/services/ClinicStorage";
import Searchbar from "./Searchbar";

export default function Favourites() {
  const [clinicData, setClinicData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage("clinicData");
    setClinicData(clinic);
  }, []);

  function handleFilterChange(filterNameValue) {
    setNameFilter(filterNameValue);
  }

  function handleToggleForm() {
    setShowSearch((prevState) => !prevState);
  }

  function renderFavourites() {
    const savedClinic = clinicData.filter((clinicData) => {
      return clinicData.isSaved === true;
    });
    const filteredSavedClinics = savedClinic.filter((clinicData) => {
      if (nameFilter) {
        return `${clinicData.name} ${clinicData.place} ${clinicData.notes}`
          .toLowerCase()
          .includes(nameFilter.toLowerCase());
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
      {showSearch ? <Searchbar onNameChange={handleFilterChange} /> : null}
      {renderFavourites()}
    </div>
  );
}
