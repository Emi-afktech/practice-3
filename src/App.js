import Barranav from "./components/Barranav";
import Inicio from "./pages/Inicio";
import "./App.css";
import {BrowserRouter as ruta, Route, Switch, Router} from "react-router-dom"

function App() {
  return (
  <div className="App">
    //Router es lo que permite tener varias direcciónes dentro de la página
    <Router> 
      //Al estar Barranav fuera de los Switches, se importa a todas las direcciónes que ingrese.
      <Barranav/>
      //Switch es para diferenciar entre página y página
      <Switch>
        <Route path="/" exact component={Inicio}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
