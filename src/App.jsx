import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegistryList from "./wedding-registry/RegistryList";
import Event from "./HomePage/Event";
import ComArribar from "./HomePage/ComArribar";
import imgMonograma from "./img/monograma-clar_300_cropped.png";
import Autocars from "./HomePage/Autocars";
import Wedshoots from "./HomePage/Wedshoots";
//import Historia from "./HomePage/Historia";
//import Assistencia from "./HomePage/Assistencia";
//import Gift from "./wedding-registry/Gift";
//import Galeria from "./HomePage/Galeria";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-cobalt bg-party-lights-background">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={imgMonograma} alt="Monograma O&P" />
                </Link>
              </li>
              <li>
                <Link to="/event">L&apos;event</Link>
              </li>
              <li>
                <Link to="/comarribar">Com arribar</Link>
              </li>
              <li>
                <Link to="/autocars">Autocars</Link>
              </li>
              <li>
                <Link to="/wedshoots">Wedshoots</Link>
              </li>

              {/* 
              <li>
                <Link to="/historia">Història</Link>
              </li>
              <li>
                <Link to="/assistencia">Assistència</Link>
              </li>              
              <li>
                <Link to="/galeria">Galeria</Link>
              </li> 
              <li>
                <Link to="/registry-list">Llista de noces</Link>
              </li>*/}
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/registry-list" element={<RegistryList />} />
        <Route path="/event" element={<Event />} />
        <Route path="/autocars" element={<Autocars />} />
        <Route path="/comarribar" element={<ComArribar />} />
        <Route path="/wedshoots" element={<Wedshoots />} />
        {/* <Route path="/gift/:id" element={<Gift />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/assistencia" element={<Assistencia />} />
        <Route path="/galeria" element={<Galeria />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
