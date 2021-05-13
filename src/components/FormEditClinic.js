import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleClinicFromLocalStorage,
  editSingleClinicFromLocalStorage,
} from "./Services/ClinicStorage";
import { useHistory } from "react-router-dom";
import SmallButton from "./SmallButton";
import { ReactComponent as Button } from "../images/Button.svg";
import Linkify from "react-linkify";
import "./Form.css";

export default function FormEditClinic() {
  console.log("hello world");
  const history = useHistory();
  const [singleClinic, setSingleClinic] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [place, setPlace] = useState("");
  const [insurance, setInsurance] = useState("");
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
  const { id } = useParams();
  console.log(id);
  function handleOnSubmit(e) {
    e.preventDefault();
    editSingleClinicFromLocalStorage(id, {
      place: place,
      insurance: insurance,
      therapy: therapy,
      visitors: visitors,
      children: children,
      animals: animals,
      room: room,
      link: link,
      notes: notes,
    });
    history.push("/list");
  }

  function handleClickBack() {
    history.goBack();
  }

  useEffect(() => {
    const myClinic = getSingleClinicFromLocalStorage(id);
    setPlace(myClinic.place);
    setInsurance(myClinic.insurance);
    setTherapy(myClinic.therapy);
    setSingleClinic(myClinic);
    setVisitors(myClinic.visitors);
    setChildren(myClinic.children);
    setAnimals(myClinic.animals);
    setRoom(myClinic.room);
    setLink(myClinic.link);
    setNotes(myClinic.notes);
  }, [id]);

  console.log(singleClinic);

  return singleClinic ? (
    <div className="Addfield" key={id}>
      <article className="Formfield">
        <p> Hello World </p>
        <div>
          <input
            type="text"
            name="ClinicName"
            id="ClinicName"
            value={clinicName}
            onChange={(e) => {
              setClinicName(e.target.value);
            }}
            className="InputClinicName"
          />
        </div>

        <div className="PlaceInput">
          <input
            type="text"
            name="Place"
            id="Place"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            className="InputPlace"
          />
        </div>

        <div className="InsuranceSelect">
          <p className="FormTitle"> Versicherungsart</p>
          <label for="Insurance"> </label>
          <div className="SelectMenu">
            <select
              value={insurance}
              onChange={(e) => {
                setInsurance(e.target.value);
              }}
            >
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
                  checked={therapy.Körper}
                  onChange={(e) =>
                    setTherapy({ ...therapy, Körper: e.target.checked })
                  }
                />
                <label for="Körper"> Körper </label>
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
                  onChange={(e) => setTherapy({ Wellness: e.target.value })}
                  placeholder="Sonstiges"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Visitors">
          <input
            type="checkbox"
            checked={visitors}
            onChange={(e) => {
              setVisitors(e.target.value);
            }}
          />
          <label for="Visitors"> Besuch erlaubt </label>
        </div>

        <div className="Children">
          <input
            type="checkbox"
            checked={children}
            onChange={(e) => {
              setVisitors(e.target.value);
            }}
          />
          <label for="Children"> Kinder erlaubt </label>
        </div>

        <div className="Animals">
          <input
            type="checkbox"
            checked={animals}
            onChange={(e) => {
              setAnimals(e.target.value);
            }}
          />
          <label for="Animals"> Haustiere </label>
        </div>

        <div className="Room">
          <input
            type="checkbox"
            checked={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <label for="Room"> Einzelzimmer </label>
        </div>

        <div className="Link">
          <Linkify>
            <input
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
              className="LinkInput"
            />
          </Linkify>
        </div>
        <div className="Notes">
          <textarea
            type="text"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
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
            <Button type="submit" onClick={handleOnSubmit}>
              <Button />
            </Button>
            <SmallButton text="löschen" className="ButtonDelete" />
          </span>
        </div>
      </article>
    </div>
  ) : (
    <p> Hello World </p>
  );
}
