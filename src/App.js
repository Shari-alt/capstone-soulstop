import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClinicList from "./components/ClinicList";
import Favourites from "./components/Favourites";
import Checklist from "./components/Checklist";
import Home from "./components/Home";
import Header from "./components/Header";
import FormAddClinic from "./components/FormAddClinic";
import Navigation from "./components/Navigation";
import SingleClinic from "./components/SingleClinic";
import FormEditClinic from "./components/FormEditClinic";

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
              <ClinicList />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/checklist">
              <Checklist />
            </Route>
            <Route path="/add">
              <FormAddClinic />
            </Route>
            <Route path="/singleclinic/edit/:id">
              <FormEditClinic />
            </Route>
            <Route path="/singleclinic/:id">
              <SingleClinic />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Switch>
          <Route exact path="/"></Route>
          <Route
            path={[
              "/list",
              "/favourites",
              "/checklist",
              "/add",
              "/singleclinic/:id",
            ]}
          >
            <Navigation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
