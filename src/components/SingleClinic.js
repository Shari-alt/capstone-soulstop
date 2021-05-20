import "./SingleClinic.css";
import { getSingleClinicFromLocalStorage } from "../services/ClinicStorage";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ReactComponent as LocationIcon } from "../images/LocationIcon.svg";
import SmallButton from "./SmallButton";
import { ReactComponent as Checkmarked } from "../images/Checkmarked.svg";
import { Image } from "cloudinary-react";
import PhotoCarousel from "./PhotoCarousel";

export default function SingleClinic() {
  const [singleClinic, setSingleClinic] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const myClinic = getSingleClinicFromLocalStorage(id);
    setSingleClinic(myClinic);
  }, [id]);

  function showClickedTherapy() {
    const therapyObject = singleClinic.therapy;
    const therapyArr = Object.entries(therapyObject);
    const activeTherapies = therapyArr
      .filter(([key, value]) => value)
      .map(([key]) => key);
    return activeTherapies.join(", ");
  }

  function showSonstigeTherapy() {
    const therapyObject = singleClinic.therapy;
    const therapyArr = Object.entries(therapyObject);
    const Sonstiges = therapyArr[0][1];
    return Sonstiges;
  }

  function handleClickBack() {
    history.goBack();
  }
  return singleClinic ? (
    <div className="Addfield" key={id}>
      <div className="SingleClinicView">
        <h2 className="InputName">{singleClinic.name}</h2>
        {singleClinic.place && (
          <p className="InputPlace">
            <LocationIcon />
            <span className="PlaceText">{singleClinic.place}</span>
          </p>
        )}
        {singleClinic.insurance && (
          <p className="InsuranceSelect">
            {" "}
            Versicherung: {singleClinic.insurance}
          </p>
        )}
        <div className="Therapy">
          {singleClinic.therapy && (
            <p className="Therapytext"> Therapie: {showClickedTherapy()} </p>
          )}
          {singleClinic.therapy.Sonstiges && (
            <p className="Sonstiges"> Sonstiges: {showSonstigeTherapy()} </p>
          )}
        </div>
        {singleClinic.visitors && (
          <p className="Visitors">
            Besucher erlaubt: <Checkmarked />
          </p>
        )}
        {singleClinic.children && (
          <p className="Children">
            Kinder erlaubt: <Checkmarked />
          </p>
        )}
        {singleClinic.animals && (
          <p className="Animals">
            Haustiere erlaubt: <Checkmarked />
          </p>
        )}
        {singleClinic.room && (
          <p className="Room">
            Einzelzimmer: <Checkmarked />
          </p>
        )}
        {singleClinic.link && <p className="Link"> {singleClinic.link}</p>}
        {singleClinic.notes && (
          <p className="Notes"> Notizen: {singleClinic.notes}</p>
        )}
        {singleClinic.photos && (
          <PhotoCarousel imagesArray={singleClinic.images} />
        )}
        <SmallButton
          text="zurück"
          className="ButtonBack"
          onClick={handleClickBack}
        />
      </div>
    </div>
  ) : (
    ""
  );
}
