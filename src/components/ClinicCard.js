import "./ClinicCard.css";
import { Link } from "react-router-dom";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState, useEffect } from "react";
import { editSingleClinicFromLocalStorage } from "./services/ClinicStorage";

export default function ClinicCard({ clinicData }) {
  const [isSaved, setIsSaved] = useState(clinicData.isSaved);
  const id = clinicData.id.replace(/\s+/g, "-");

  // useEffect(() => {
  //   const clinicCard = editSingleClinicFromLocalStorage(id);
  //   setIsSaved(clinicCard.isSaved);
  // }, [id]);

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
          <button
            className="Button_Save"
            onClick={onfavouriteClinic}
            // {(e) => setIsSaved(e.target.value)}
          >
            {isSaved ? <SavedHeart /> : <Save className="Save" />}
          </button>
        </div>
      </div>
    </article>
  );
}
