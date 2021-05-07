import "./Header.css";

export default function Header({ text }) {
  return (
    <header className="Header">
      <h1 className="Title"> {text}</h1>
    </header>
  );
}
