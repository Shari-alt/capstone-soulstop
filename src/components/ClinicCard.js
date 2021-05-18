import "./ClinicCard.css";
import { Link } from "react-router-dom";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { editSingleClinicFromLocalStorage } from "./Services/ClinicStorage";

export default function ClinicCard({ clinicData }) {
  const [isSaved, setIsSaved] = useState(false);
  const id = clinicData.id.replace(/\s+/g, "-");

  function onfavouriteClinic(e) {
    e.preventDefault();
    editSingleClinicFromLocalStorage(id, {
      isSaved: !isSaved,
    });
    setIsSaved(!isSaved);
  }

  return (
    <article className="ClinicCardList">
      <div className="ClinicCard">
        <img className="ClinicPicture" src={Download} alt="ClinicPicture" />
        <h3 className="ClinicName"> {clinicData.name} </h3>
        <p className="ClinicPlace"> {clinicData.place}</p>
        <div className="ClinicCardButtons">
          <Link to={`/singleclinic/edit/${id}`}>
            <button className="Button_Edit">
              <Edit className="Edit" />
            </button>
          </Link>
          <button className="Button_Save" onClick={onfavouriteClinic}>
            {clinicData.isSaved === true ? (
              <SavedHeart />
            ) : (
              <Save className="Save" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
