import "./ClinicCard.css";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState, useEffect } from "react";
import { getItemsFromLocalStorage } from "./Services/ClinicStorage";

export default function ClinicCard({ name, place }) {
  const [isClicked, setIsClicked] = useState(false);
  const [clinicData, setClinicData] = useState([]);

  function handleSaveClick() {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    const clinic = getItemsFromLocalStorage("clinicData");
    setClinicData(clinic);
  }, []);

  function renderClinicCard() {
    return clinicData.map((clinic, index) => {
      return (
        <article className="ClinicCardList">
          <div className="ClinicCard">
            <img className="ClinicPicture" src={Download} alt="Clinicpicture" />
            <h3 className="ClinicName"> {clinic.id} </h3>
            <p className="ClinicPlace"> {clinic.place}</p>
            <div className="ClinicCardButtons">
              <button className="Button_Edit">
                <Edit className="Edit" />
              </button>
              <button className="Button_Save" onClick={handleSaveClick}>
                {isClicked ? <SavedHeart /> : <Save className="Save" />}
              </button>
            </div>
          </div>
        </article>
      );
    });
  }
  return <div> {renderClinicCard()} </div>;
}
