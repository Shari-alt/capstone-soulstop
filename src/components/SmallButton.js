import "./SmallButton.css";

export default function SmallButton({ text, onClick }) {
  return (
    <div>
      <button className="SmallButton" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
