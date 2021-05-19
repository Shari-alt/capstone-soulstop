import { useState } from "react";
import { useHistory } from "react-router-dom";
import Linkify from "react-linkify";
import { ReactComponent as Button } from "../images/Button.svg";
import SmallButton from "./SmallButton";
import "./Form.css";
import { addItemToLocalStorage } from "./services/ClinicStorage";

export default function FormAddClinic() {
  const history = useHistory();
  const [clinicName, setClinicName] = useState("");
  const [place, setPlace] = useState("");
  const [insurance, setInsurance] = useState("");
  const [therapy, setTherapy] = useState({
    Kunst: false,
    Sport: false,
    Gruppen: false,
    Bewegung: false,
    Koerper: false,
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

  function handleSubmit(event) {
    event.preventDefault();

    addItemToLocalStorage({
      id: clinicName.split(" ").join("-"),
      name: clinicName,
      place: place,
      insurance: insurance,
      therapy: therapy,
      visitors: visitors,
      children: children,
      animals: animals,
      room: room,
      link: link,
      notes: notes,
      isSaved: false,
    });
    resetForm();
    history.push("/list");
  }

  return (
    <div className="Addfield">
      <article className="Formfield">
        <div>
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
                  checked={therapy.Kunst}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Kunst: e.target.checked })
                  }
                />
                <label for="Kunst"> Kunst </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Sport}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Sport: e.target.checked })
                  }
                />
                <label for="Sport"> Sport </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Gruppen}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Gruppen: e.target.checked })
                  }
                />
                <label for="Gruppen"> Gruppen </label>
              </div>
            </div>
            <div className="CenterCol">
              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Bewegung}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Bewegung: e.target.checked })
                  }
                />
                <label for="Bewegung"> Bewegung </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Koerper}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Koerper: e.target.checked })
                  }
                />
                <label for="Koerper"> Körper </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Tanz}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Tanz: e.target.checked })
                  }
                />
                <label for="Tanz"> Tanz </label>
              </div>
            </div>

            <div className="RightCol">
              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Wellness}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Wellness: e.target.checked })
                  }
                />
                <label for="Wellness"> Wellness </label>
              </div>

              <div className="Checkbox">
                <input
                  type="checkbox"
                  checked={therapy.Musik}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Musik: e.target.checked })
                  }
                />

                <label for="Musik"> Musik </label>
              </div>

              <div>
                <input
                  className="TextSonstiges"
                  type="text"
                  checked={therapy.Sonstiges}
                  onChange={(e) => setTherapy({ Sonstiges: e.target.value })}
                  placeholder="Sonstiges"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Visitors">
          <input type="checkbox" checked={visitors} onChange={handleVisitors} />
          <label for="Visitors"> Besuch erlaubt </label>
        </div>

        <div className="Children">
          <input type="checkbox" checked={children} onChange={handleChildren} />
          <label for="Children"> Kinder erlaubt </label>
        </div>

        <div className="Animals">
          <input type="checkbox" checked={animals} onChange={handleAnimals} />
          <label for="Animals"> Haustiere </label>
        </div>

        <div className="Room">
          <input type="checkbox" checked={room} onChange={handleRoom} />
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
            <Button type="submit" onClick={handleSubmit}>
              <Button />
            </Button>
            <SmallButton
              text="löschen"
              className="ButtonDelete"
              onClick={handleClickBack}
            />
          </span>
        </div>
      </article>
    </div>
  );

  //reset Form
  function resetForm() {
    setClinicName("");
    setPlace("");
    setInsurance("");
    setTherapy({
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
    setVisitors(false);
    setChildren(false);
    setAnimals(false);
    setRoom(false);
    setLink("");
    setNotes("");
  }
}
