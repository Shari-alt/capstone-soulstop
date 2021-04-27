import { ReactComponent as Logo } from "../images/Logo.svg";
import "./Home.css";
import GroßerButton from "./GroßerButton";

export default function Home() {
  return (
    <div>
      <Logo className="Logo" />
      <div className="ButtonList">
        <GroßerButton text="Klinik hinzufügen" />
        <GroßerButton text="Deine Kliniken" NavLink to="/List" />
        <GroßerButton text="Checklist" />
      </div>
    </div>
  );
}
