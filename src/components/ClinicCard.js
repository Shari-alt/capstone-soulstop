import "./ClinicCard.css";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState } from "react";

export default function ClinicCard({ name, place }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleSaveClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="ClinicCard">
      <img className="ClinicPicture" src={Download} alt="Clinicpicture" />
      <h3 className="ClinicName"> {name} </h3>
      <p className="ClinicPlace"> {place}</p>
      <div className="ClinicCardButtons">
        <button className="Button_Edit">
          <Edit className="Edit" />
        </button>
        <button className="Button_Save" onClick={handleSaveClick}>
          {isClicked ? <SavedHeart /> : <Save className="Save" />}
        </button>
      </div>
    </div>
  );
}
