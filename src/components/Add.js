import Navigation from "./Navigation";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Linkify from "react-linkify";
import { ReactComponent as Button } from "../images/Button.svg";
import SmallButton from "./SmallButton";
import "./Add.css";

export default function Add() {
  const history = useHistory();
  const [clinicName, setClinicName] = useState("");
  const [place, setPlace] = useState("");
  const [insurance, setInsurance] = useState();
  const [therapy, setTherapy] = useState({
    Kunst: false,
    Sport: false,
    Gruppen: false,
    Bewegung: false,
    Körper: false,
    Musik: false,
    Tanz: false,
    Wellness: false,
    Sonstiges: "",
  });

  const [visitors, setVisitors] = useState(false);
  const [children, setChildren] = useState(false);
  const [animals, setAnimals] = useState(false);
  const [room, setRoom] = useState(false);
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");

  function handleClinicName(event) {
    const { value } = event.target;
    setClinicName(value);
  }

  function handlePlace(event) {
    const { value } = event.target;
    setPlace(value);
  }

  function handleInsurance(event) {
    const { value } = event.target;
    setInsurance(value);
  }

  function handleVisitors(event) {
    const { value } = event.target;
    setVisitors(value);
  }

  function handleChildren(event) {
    const { value } = event.target;
    setChildren(value);
  }

  function handleAnimals(event) {
    const { value } = event.target;
    setAnimals(value);
  }

  function handleRoom(event) {
    const { value } = event.target;
    setRoom(value);
  }

  function handleLink(event) {
    const { value } = event.target;
    setLink(value);
  }

  function handleNotes(event) {
    const { value } = event.target;
    setNotes(value);
  }

  function handleClickBack() {
    history.goBack();
  }

  return (
    <div className="Addfield">
      <article className="Formfield">
        <div>
          <label> </label>
          <input
            type="text"
            name="ClinicName"
            id="ClinicName"
            value={clinicName}
            onChange={handleClinicName}
            className="InputClinicName"
            placeholder="Name der Klinik"
            required
          />
        </div>

        <div className="PlaceInput">
          <label> </label>
          <input
            type="text"
            name="Place"
            id="Place"
            value={place}
            onChange={handlePlace}
            className="InputPlace"
            placeholder="Land, Bundesland oder Stadt "
            required
          />
        </div>

        <div className="InsuranceSelect">
          <p className="FormTitle"> Versicherungsart</p>
          <label for="Insurance"> </label>
          <div className="SelectMenu">
            <select value={insurance} onChange={handleInsurance}>
              <option default> Bitte wählen</option>
              <option value="privat"> Privatversicherung</option>
              <option value="public"> Gesetzliche Versicherung</option>
              <option value="both"> beide</option>
            </select>
          </div>
        </div>

        <div className="Therapy">
          <p className="FormTitle"> Therapie</p>
          <div className="TherapyCheckbox">
            <div className="LeftCol">
              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Kunst}
                  onChange={(e) => setTherapy({ Kunst: e.target.value })}
                />
                <label for="Kunst"> Kunst </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Sport}
                  onChange={(e) => setTherapy({ Sport: e.target.value })}
                />
                <label for="Sport"> Sport </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Gruppen}
                  onChange={(e) => setTherapy({ Gruppen: e.target.value })}
                />
                <label for="Gruppen"> Gruppen </label>
              </div>
            </div>
            <div className="CenterCol">
              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Bewegung}
                  onChange={(e) => setTherapy({ Bewegung: e.target.value })}
                />
                <label for="Bewegung"> Bewegung </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Körper}
                  onChange={(e) => setTherapy({ Körper: e.target.value })}
                />
                <label for="Körper"> Körper </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Tanz}
                  onChange={(e) => setTherapy({ Tanz: e.target.value })}
                />
                <label for="Tanz"> Tanz </label>
              </div>
            </div>

            <div className="RightCol">
              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Wellness}
                  onChange={(e) => setTherapy({ Wellness: e.target.value })}
                />

                <label for="Wellness"> Wellness </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  value={therapy.Musik}
                  onChange={(e) => setTherapy({ Musik: e.target.value })}
                />

                <label for="Musik"> Musik </label>
              </div>

              <div>
                <input
                  className="TextSonstiges"
                  type="text"
                  value={therapy.Sonstiges}
                  onChange={(e) => setTherapy({ Welleness: e.target.value })}
                  placeholder="Sonstiges"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Visitors">
          <input type="checkbox" value={visitors} onChange={handleVisitors} />
          <label for="Visitors"> Besuch erlaubt </label>
        </div>

        <div className="Children">
          <input type="checkbox" value={children} onChange={handleChildren} />
          <label for="Children"> Kinder erlaubt </label>
        </div>

        <div className="Animals">
          <input type="checkbox" value={animals} onChange={handleAnimals} />
          <label for="Animals"> Haustiere </label>
        </div>

        <div className="Room">
          <input type="checkbox" value={room} onChange={handleRoom} />
          <label for="Room"> Einzelzimmer </label>
        </div>

        <div className="Link">
          <Linkify>
            <input
              type="text"
              value={link}
              onChange={handleLink}
              placeholder="Link zur Website"
              className="LinkInput"
            />
          </Linkify>
        </div>
        <div className="Notes">
          <textarea
            type="text"
            value={notes}
            onChange={handleNotes}
            placeholder="Platz für Notizen..."
            className="NotesInput"
          />
        </div>

        <div className="Picture">
          <p className="PctureUpload"> Bilderupload</p>
        </div>
        <div className="Buttonliste">
          <span className="FormButton">
            <SmallButton
              text="zurück"
              className="ButtonBack"
              onClick={handleClickBack}
            />
            <Button />
            <SmallButton text="löschen" className="ButtonDelete" />
          </span>
        </div>
      </article>
      <Navigation />
    </div>
  );
}
