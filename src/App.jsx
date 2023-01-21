import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegistryList from "./wedding-registry/registry-list";
import WeddingRegistry from "./wedding-registry/WeddingRegistry";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <header className="bg-gradient-to-b from-gray to-white">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="img/monograma-clar_300_cropped.png"
                    alt="Monograma O&P"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">Història</Link>
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
                <Link to="/wedding-registry" className="hover:text-gold">
                  Llista de noces
                </Link>
              </li>
              <li>
                <Link to="/">Galeria</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/registry-list" element={<RegistryList />} />
          <Route path="/wedding-registry" element={<WeddingRegistry />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
