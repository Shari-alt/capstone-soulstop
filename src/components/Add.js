import Navigation from "./Navigation";
import { useState } from "react";
import Linkify from "react-linkify";
import { ReactComponent as Button } from "../images/Button.svg";
import SmallButton from "./SmallButton";

export default function Add() {
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

  return (
    <div>
      <article>
        <div>
          <label> </label>
          <input
            type="text"
            name="ClinicName"
            id="ClinicName"
            value={clinicName}
            onChange={handleClinicName}
            className="InputClinicName"
            placeholder="Wie heißt die Klinik?"
            required
          />
        </div>

        <div>
          <label> </label>
          <input
            type="text"
            name="Place"
            id="Place"
            value={place}
            onChange={handlePlace}
            className="InputPlace"
            placeholder="Land, Bundesland oder Stadt eingeben"
            required
          />
        </div>

        <div className="Radio-buttons">
          <p className="Form_Title"> Versicherungsart</p>
          <label for="Insurance"> Wähle die Versicherungsart:</label>
          <select value={insurance} onChange={handleInsurance}>
            <option default> Versicherungsart</option>
            <option value="privat"> Privatversicherung</option>
            <option value="public"> Gesetzliche Versicherung</option>
            <option value="both"> beide</option>
          </select>
        </div>

        <div className="Therapy">
          <p className="Form_Title"> Therapie</p>
          <span>
            <input
              type="checkbox"
              value={therapy.Kunst}
              onChange={(e) => setTherapy({ Kunst: e.target.value })}
            />
            <label for="Kunst"> Kunst </label>
          </span>

          <span>
            <input
              type="checkbox"
              value={therapy.Sport}
              onChange={(e) => setTherapy({ Sport: e.target.value })}
            />
            <label for="Sport"> Sport </label>
          </span>

          <span>
            <input
              type="checkbox"
              value={therapy.Gruppen}
              onChange={(e) => setTherapy({ Gruppen: e.target.value })}
            />
            <label for="Gruppen"> Gruppen </label>
          </span>

          <div>
            <span>
              <input
                type="checkbox"
                value={therapy.Bewegung}
                onChange={(e) => setTherapy({ Bewegung: e.target.value })}
              />
              <label for="Bewegung"> Bewegung </label>
            </span>

            <span>
              <input
                type="checkbox"
                value={therapy.Körper}
                onChange={(e) => setTherapy({ Körper: e.target.value })}
              />
              <label for="Körper"> Körper </label>
            </span>

            <span>
              <input
                type="checkbox"
                value={therapy.Tanz}
                onChange={(e) => setTherapy({ Tanz: e.target.value })}
              />
              <label for="Tanz"> Tanz </label>
            </span>
          </div>

          <div>
            <span>
              <input
                type="checkbox"
                value={therapy.Wellness}
                onChange={(e) => setTherapy({ Wellness: e.target.value })}
              />

              <label for="Wellness"> Wellness </label>
            </span>

            <span>
              <input
                type="checkbox"
                value={therapy.Musik}
                onChange={(e) => setTherapy({ Musik: e.target.value })}
              />

              <label for="Musik"> Musik </label>
            </span>

            <span>
              <input
                type="text"
                value={therapy.Sonstiges}
                onChange={(e) => setTherapy({ Welleness: e.target.value })}
                placeholder="Sonstiges"
              />
            </span>
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

        <div className="Picture">
          <p> Bilderupload</p>
        </div>
        <Button />
        <SmallButton text="löschen" />
      </article>
      <Navigation />
    </div>
  );
}
