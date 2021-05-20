import "./ClinicCard.css";
import { Link } from "react-router-dom";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Save } from "../images/Save.svg";
import { ReactComponent as SavedHeart } from "../images/SavedHeart.svg";
import { useState } from "react";
import { editSingleClinicFromLocalStorage } from "../services/ClinicStorage";
import { Image } from "cloudinary-react";

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
        {clinicData.photos &&
          clinicData.photos.map((image) => {
            return (
              <Image
                className="ClinicPicture"
                cloudName="dlm4sfyjm"
                publicId={image}
                secure="true"
              />
            );
          })}

        <h3 className="ClinicName"> {clinicData.name} </h3>
        <p className="ClinicPlace"> {clinicData.place}</p>
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
