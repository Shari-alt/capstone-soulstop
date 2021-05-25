import ChecklistItem from "./ChecklistItem";
import Navigation from "./Navigation";
import ClinicInspiration from "./ClinicInspiration";
import "./ListforOrganizing.css";

export default function OrganizingList() {
  return (
    <div className="SectionTipps">
      <div className="TippsField">
        <div className="TippsSection">
          <details>
            <summary className="TippsTitle">Tipps für die Entscheidung</summary>
            <ChecklistItem name="Wie sieht ein typischer Behandlungsplan aus?" />
            <ChecklistItem name="Ist die Klinik auf meine Erkrakung spezialisiert?" />
            <ChecklistItem name="Welche Therapien werden angeboten?" />
            <ChecklistItem name="Wie oft habe ich Psychotherapie in der Woche?" />
            <ChecklistItem name="Darf ich Besuch empfangen?" />
            <ChecklistItem name="Wie sind die Besuchszeiten?" />
            <ChecklistItem name="Wie viel übernimmt die Krankenkasse?" />
            <ChecklistItem name="Werden Angehörige miteinbezogen?" />
            <ChecklistItem name="Was muss ich alles mitnehmen, z.B. Waschmittel?" />
            <ChecklistItem name="Werden extra Therapien von der Krankenkasse gezahlt?" />
            <ChecklistItem name="Hilft die Klinik bei der Kostenübernahme?" />
            <ChecklistItem name="Einzelzimmer oder Doppelzimmer?" />
            <ChecklistItem name="Wie viele Patienten betreut ein Arzt?" />
            <ChecklistItem name="Kann ich bei meinen Therapien mitentscheiden?" />
            <ChecklistItem name="Austattung der Zimmer?" />
            <ChecklistItem name="Wie sind die Wartezeiten?" />
          </details>
        </div>
        <div className="TippsSection">
          <details>
            <summary className="TippsTitle"> Packliste </summary>
            <ChecklistItem name="Schlafanzug" />
            <ChecklistItem name="Wäsche" />
            <ChecklistItem name="Hausschuhe" />
            <ChecklistItem name="Badelatschen" />
            <ChecklistItem name="Bademantel" />
            <ChecklistItem name="Sportkleidung" />
            <ChecklistItem name="Kosmetik" />
            <ChecklistItem name="Fön (oder vorhanden?)" />
            <ChecklistItem name="Zahnbürste und Pasta" />
            <ChecklistItem name="Notizbuch" />
            <ChecklistItem name="Dinge zum Zeitvertreib, wie Bücher" />
            <ChecklistItem name="Wecker" />
            <ChecklistItem name="Brille" />
            <ChecklistItem name="Versicherungskarte" />
            <ChecklistItem name="Kostenzusage" />
            <ChecklistItem name="gemütliche Klamotten" />
            <ChecklistItem name="Wetterfeste Klamotten" />
          </details>
        </div>
        <div className="TippsSection">
          <details>
            <summary className="TippsTitle"> Wo finde ich Kliniken? </summary>
            <ClinicInspiration />
          </details>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
