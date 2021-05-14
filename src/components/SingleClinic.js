import "./Form.css";
import { getSingleClinicFromLocalStorage } from "../components/Services/ClinicStorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleClinic() {
  const [singleClinic, setSingleClinic] = useState();
  const { id } = useParams();

  useEffect(() => {
    const myClinic = getSingleClinicFromLocalStorage(id);
    setSingleClinic(myClinic);
  }, [id]);

  function showClickedTherapy(field) {
    const therapyObject = {
      Kunst: true,
      Sport: false,
      Gruppen: true,
      Bewegung: false,
      Körper: true,
      Musik: false,
      Tanz: true,
      Wellness: false,
      Sonstiges: "value",
    };

    const therapyArr = Object.entries(therapyObject);

    const activeTherapies = therapyArr
      .filter(([key, value]) => value)
      .map(([key]) => key);
    return activeTherapies;
  }

  return singleClinic ? (
    <div className="Addfield" key={id}>
      <div>
        <h2>{singleClinic.name}</h2>
        <p> {singleClinic.place} </p>
        <p> Versicherung: {singleClinic.insurance}</p>
        <p> Therapie: {showClickedTherapy()} </p>

        <p> Besucher erlaubt: {singleClinic.visitors}</p>
        <p> Kinder erlaubt: {singleClinic.children}</p>
        <p> Haustiere erlaubt: {singleClinic.animals}</p>
        <p> Einzelzimmer: {singleClinic.room}</p>
        <p> Link zur Klinik {singleClinic.link}</p>
        <p> Notizen: {singleClinic.notes}</p>
      </div>
    </div>
  ) : (
    ""
  );
}
