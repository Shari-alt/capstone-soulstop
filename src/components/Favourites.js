import SmallButton from "./SmallButton";
import "./List.css";
import ClinicCard from "./ClinicCard";

export default function Favourites() {
  return (
    <div className="Listlayout">
      <div className="SmallButtons">
        <SmallButton text="Suche" />
        <SmallButton text="Hinzufügen" />
        <SmallButton text="Filter" />
      </div>
      <div className="ClinicCardList">
        <ClinicCard />
      </div>
    </div>
  );
}
