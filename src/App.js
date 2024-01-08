import Barranav from "./components/Barranav";
import Inicio from "./pages/Inicio";
import "./App.css";
import {BrowserRouter as ruta, Route, Routes, BrowserRouter} from "react-router-dom"
import Hero from "./components/Hero";

function App() {
  return (
  <div className="App">
    {/* Router es lo que permite tener varias direcciónes dentro de la página */}
    <BrowserRouter> 
    {/*Al estar Barranav fuera de los Switches, se importa a todas las direcciónes que ingrese.*/}
      <Barranav/>
      {/*Routes es para diferenciar entre página y página*/}
      <Hero/>
      <Routes>
        <Route path="/" exact element={Inicio}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
