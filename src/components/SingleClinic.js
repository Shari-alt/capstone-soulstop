import "./SingleClinic.css";
import { getSingleClinicFromLocalStorage } from "../components/Services/ClinicStorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as LocationIcon } from "../images/LocationIcon.svg";

export default function SingleClinic() {
  const [singleClinic, setSingleClinic] = useState();
  const { id } = useParams();

  useEffect(() => {
    const myClinic = getSingleClinicFromLocalStorage(id);
    setSingleClinic(myClinic);
  }, [id]);

  function showClickedTherapy() {
    const therapyObject = singleClinic.therapy;

    // Kunst: true,
    // Sport: false,
    // Gruppen: true,
    // Bewegung: false,
    // Körper: true,
    // Musik: false,
    // Tanz: true,
    // Wellness: false,
    // Sonstiges: "value",
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

  return singleClinic ? (
    <div className="Addfield" key={id}>
      <div className="SingleClinicView">
        <h2>{singleClinic.name}</h2>
        {singleClinic.place && (
          <p className="InputPlace">
            {" "}
            <LocationIcon /> {singleClinic.place}
          </p>
        )}
        {singleClinic.insurance && (
          <p className="InsuranceSelect">
            {" "}
            Versicherung: {singleClinic.insurance}
          </p>
        )}
        <div className="Therapy">
          {singleClinic.therapy && <p> Therapie: {showClickedTherapy()} </p>}
          {singleClinic.therapy.Sonstiges && (
            <p className="Sonstiges"> Sonstiges: {showSonstigeTherapy()} </p>
          )}
        </div>
        {singleClinic.visitors && (
          <p className="Visitors"> Besucher erlaubt: {singleClinic.visitors}</p>
        )}
        {singleClinic.children && (
          <p className="Children"> Kinder erlaubt: {singleClinic.children}</p>
        )}
        {singleClinic.animals && (
          <p className="Animals"> Haustiere erlaubt: {singleClinic.animals}</p>
        )}
        {singleClinic.room && (
          <p className="Room"> Einzelzimmer: {singleClinic.room}</p>
        )}
        {singleClinic.link && (
          <p className="Link"> Link zur Klinik {singleClinic.link}</p>
        )}
        {singleClinic.notes && (
          <p className="Notes"> Notizen: {singleClinic.notes}</p>
        )}
      </div>
    </div>
  ) : (
    ""
  );
}
