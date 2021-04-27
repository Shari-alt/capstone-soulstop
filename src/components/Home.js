import { ReactComponent as Logo } from "../images/Logo.svg";
import "./Home.css";
import ButtonKlinikHinzufügen from "./ButtonKlinikHinzufügen";

export default function Home() {
  return (
    <div>
      <Logo className="Logo" />
      <div className="ButtonList">
        <ButtonKlinikHinzufügen text="Klinik hinzufügen" />
        <ButtonKlinikHinzufügen text="Deine Kliniken" />
        <ButtonKlinikHinzufügen text="Checklist" />
      </div>
    </div>
  );
}
