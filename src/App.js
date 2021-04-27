import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>
      <main className="Main"></main>
      <footer className="Footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
