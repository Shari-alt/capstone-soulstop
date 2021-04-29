import "./ClinicCard.css";
import Download from "../images/Download.jpeg";
import { ReactComponent as Edit } from "../images/Edit.svg";
import { ReactComponent as Safe } from "../images/Safe.svg";

export default function ClinicCard({ name, place }) {
  return (
    <div className="ClinicCard">
      <img className="ClinicPicture" src={Download} alt="Clinicpicture" />
      <h3 className="ClinicName"> Alibiname{name} </h3>
      <p className="ClinicPlace"> Wonderland{place}</p>
      <div className="ClinicCardButtons">
        <Edit className="Edit" />
        <Safe className="Safe" />
      </div>
    </div>
  );
}
