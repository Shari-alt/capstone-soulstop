import SmallButton from "./SmallButton";
import "./List.css";
import ClinicCard from "./ClinicCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItemsFromLocalStorage } from "./Services/ClinicStorage";

export default function Favourites() {
  const [clinicData, setClinicData] = useState([]);

  useEffect(() => {
    const clinic = getItemsFromLocalStorage("clinicData");
    setClinicData(clinic);
  }, []);

  function renderFavourites() {
    const savedClinic = clinicData.filter((clinicData) => {
      return clinicData.isSaved === true;
    });

    return savedClinic.map((savedClinic) => {
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
        <SmallButton text="Suche" />
        <SmallButton text="Hinzufügen" />
        <SmallButton text="Filter" />
        <div className="ClinicCardList">{renderFavourites()}</div>
      </div>
    </div>
  );
}
