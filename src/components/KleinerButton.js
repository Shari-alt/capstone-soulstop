import "./KleinerButton.css";

export default function KleinerButton({ text }) {
  return (
    <div>
      <button className="KleinerButton"> {text} </button>
    </div>
  );
}
