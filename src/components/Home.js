import { ReactComponent as Logo } from "../images/Logo.svg";
import "./Home.css";
import BigButton from "./BigButton";

export default function Home() {
  return (
    <div>
      <Logo className="Logo" />
      <div className="ButtonList">
        <BigButton text="Klinik hinzufügen" />
        <BigButton text="Deine Kliniken" NavLink to="/List" />
        <BigButton text="Checklist" />
      </div>
    </div>
  );
}
