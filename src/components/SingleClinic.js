import "./Form.css";
import { getSingleClinicFromLocalStorage } from "../components/Services/ClinicStorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleClinic() {
  const [singleClinic, setSingleClinic] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myClinics = getSingleClinicFromLocalStorage(id);
    setSingleClinic(myClinics);
    console.log(myClinics);
  }, [id]);

  return (
    <div className="Addfield" key={id}>
      <div>
        <p>{singleClinic.id}</p>
      </div>
    </div>
  );
}
