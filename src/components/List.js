import SmallButton from "./SmallButton";
import "./List.css";
import Navigation from "./Navigation";

export default function List() {
  return (
    <div>
      <h1 className="Title"> Meine Kliniken </h1>
      <div className="SmallButtons">
        <SmallButton text="Suche" />
        <SmallButton text="Hinzufügen" />
        <SmallButton text="Filter" />
      </div>
      <Navigation />
    </div>
  );
}
