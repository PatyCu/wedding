import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Gift from "./wedding-registry/Gift";
import RegistryList from "./wedding-registry/RegistryList";
import Historia from "./HomePage/Historia";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="/img/monograma-clar_300_cropped.png"
                    alt="Monograma O&P"
                  />
                </Link>
              </li>
              <li>
                <Link to="/historia">Història</Link>
              </li>
              <li>
                <Link to="/">L&apos;event</Link>
              </li>
              <li>
                <Link to="/">Assistència</Link>
              </li>
              <li>
                <Link to="/">Com arribar</Link>
              </li>
              <li>
                <Link to="/registry-list">Llista de noces</Link>
              </li>
              <li>
                <Link to="/">Galeria</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/registry-list" element={<RegistryList />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/gift/:id" element={<Gift />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
