import "./SmallButton.css";

export default function SmallButton({ text }) {
  return (
    <div>
      <button className="SmallButton"> {text} </button>
    </div>
  );
}
