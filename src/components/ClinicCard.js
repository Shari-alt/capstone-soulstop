import "./ClinicCard.css";
import { Link } from "react-router-dom";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ClinicCard({ clinicData }) {
  const [isSaved, setIsSaved] = useState(false);
  let { ide } = useParams();
  ide = clinicData.id.replace(/\s+/g, "-");

  function onfavouriteClinic() {
    setIsSaved(!isSaved);
  }

  return (
    <article className="ClinicCardList">
      <div className="ClinicCard">
        <img className="ClinicPicture" src={Download} alt="Clinicpicture" />
        <h3 className="ClinicName"> {clinicData.id} </h3>
        <p className="ClinicPlace"> {clinicData.place}</p>
        <div className="ClinicCardButtons">
          <Link to={`/singleclinic/edit/${ide}`}>
            <button className="Button_Edit">
              <Edit className="Edit" />
            </button>
          </Link>
          <button className="Button_Save" onClick={onfavouriteClinic}>
            {isSaved ? <SavedHeart /> : <Save className="Save" />}
          </button>
        </div>
      </div>
    </article>
  );
}
