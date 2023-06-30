import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Gift from "./wedding-registry/Gift";
import RegistryList from "./wedding-registry/RegistryList";
import Historia from "./HomePage/Historia";
import Event from "./HomePage/Event";
import Assistencia from "./HomePage/Assistencia";
import ComArribar from "./HomePage/ComArribar";
import Galeria from "./HomePage/Galeria";
import imgMonograma from "./img/monograma-clar_300_cropped.png";

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
                <Link to="/historia">Història</Link>
              </li>
              <li>
                <Link to="/event">L&apos;event</Link>
              </li>
              <li>
                <Link to="/assistencia">Assistència</Link>
              </li>
              <li>
                <Link to="/comarribar">Com arribar</Link>
              </li>
              <li>
                <Link to="/registry-list">Llista de noces</Link>
              </li>
              <li>
                <Link to="/galeria">Galeria</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/registry-list" element={<RegistryList />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/event" element={<Event />} />
        <Route path="/assistencia" element={<Assistencia />} />
        <Route path="/comarribar" element={<ComArribar />} />
        <Route path="/gift/:id" element={<Gift />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
