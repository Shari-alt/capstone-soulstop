import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import List from "./components/List";
import Favourites from "./components/Favourites";
import Checklist from "./components/Checklist";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Header />
        </header>
        <main className="Main">
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/checklist">
              <Checklist />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="Footer">
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;
