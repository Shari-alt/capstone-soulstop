import "./ClinicCard.css";
import { Link } from "react-router-dom";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState } from "react";
import { editSingleClinicFromLocalStorage } from "../services/ClinicStorage";
import { Image } from "cloudinary-react";
import Download from "../images/Download.jpeg";

export default function ClinicCard({ clinicData }) {
  const [isSaved, setIsSaved] = useState(clinicData.isSaved);
  const id = clinicData.id.replace(/\s+/g, "-");

  function onfavouriteClinic() {
    editSingleClinicFromLocalStorage(id, {
      isSaved: !isSaved,
    });
    setIsSaved(!isSaved);
  }

  return (
    <article className="ClinicCardList">
      <div className="ClinicCard">
        <div className="LinkSingleView">
          <Link to={`/singleclinic/${clinicData.id}`}>
            {clinicData && clinicData.photos.length > 0 ? (
              <Image
                className="ClinicPicture"
                cloudName="dlm4sfyjm"
                publicId={clinicData.photos[0]}
                secure="true"
              />
            ) : (
              <img
                src={Download}
                alt="Defaultpicture"
                className="ClinicPicture"
              />
            )}
            <h3 className="ClinicName"> {clinicData.name} </h3>
            <p className="ClinicPlace"> {clinicData.place}</p>
          </Link>
        </div>
        <div className="ClinicCardButtons">
          <Link to={`/singleclinic/edit/${id}`}>
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
