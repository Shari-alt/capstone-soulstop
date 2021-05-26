import Klinikbewertungen from "../images/Klinikbewertungen.png";
import Klinikradar from "../images/Klinikradar.png";
import WeisseListe from "../images/WeisseListe.png";
import Privatklinik from "../images/Privatklinik.png";
import "./ClinicInspiration.css";

export default function ClinicInspiration() {
  return (
    <div className="Linkpage">
      <div className="LinkCard">
        <a
          href="https://www.klinikbewertungen.de/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="LinkImg"
            src={Klinikbewertungen}
            alt="Klinikbewertungen"
          />
        </a>
      </div>
      <div className="LinkCard">
        <a
          href="https://klinikradar.de/depression/kliniken/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="LinkImg" src={Klinikradar} alt="Klinikradar" />
        </a>
      </div>
      <div className="LinkCard">
        <a
          href="https://www.weisse-liste.de/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="LinkImg" src={WeisseListe} alt="Weiße Liste" />
        </a>
      </div>
      <div className="LinkCard">
        <a
          href="https://www.privatklinik-portal.de/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="LinkImg" src={Privatklinik} alt="Privatklinik" />
        </a>
      </div>
    </div>
  );
}
