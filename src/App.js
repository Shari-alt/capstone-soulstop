import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Favourites from "./components/Favourites";
import Checklist from "./components/Checklist";
import Home from "./components/Home";
import Header from "./components/Header";
import Add from "./components/Add";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/list">
            <Header text="Meine Kliniken" />
          </Route>
          <Route path="/favourites">
            <Header text="Favoriten" />
          </Route>
          <Route path="/checklist">
            <Header text="Checklist" />
          </Route>

          <Route path="/"></Route>
        </Switch>

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
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Switch>
          <Route exact path="/"></Route>
          <Route path={["/list", "/favourites", "/checklist", "/add"]}>
            <Navigation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
