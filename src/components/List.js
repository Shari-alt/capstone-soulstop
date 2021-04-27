import KleinerButton from "./KleinerButton";
import "./List.css";

export default function List() {
  return (
    <div>
      <h1 className="Title"> Meine Kliniken </h1>
      <div className="KleineButtons">
        <KleinerButton text="Suche" />
        <KleinerButton text="Hinzufügen" />
        <KleinerButton text="Filter" />
      </div>
    </div>
  );
}
