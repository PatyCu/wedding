import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import RegistryList from "./registry-list";

const App = () => {
  return (
    <div id="container" className="m-10 w-11/12 bg-white/85 p-10">
      <BrowserRouter>
        <h2 className="m-10 p-0 text-xl font-bold">Llista de noces</h2>
        <div className="flex">
          <div className="mr-10 w-2/5">
            <img
              src="../img/parella.jpg"
              className="shadow-slate-500 rounded-full shadow-2xl"
              alt="selfie de l'Oriol i la Paty junts"
            />
          </div>
          <div className="mt-5 w-3/5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempora earum, iusto voluptas delectus vitae at veritatis, maxime
              quod architecto nam cupiditate numquam voluptatem, necessitatibus
              nesciunt! Minima modi ipsum repudiandae?
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempora earum, iusto voluptas delectus vitae at veritatis, maxime
              quod architecto nam cupiditate numquam voluptatem, necessitatibus
              nesciunt! Minima modi ipsum repudiandae?
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempora earum, iusto voluptas delectus vitae at veritatis, maxime
              quod architecto nam cupiditate numquam voluptatem, necessitatibus
              nesciunt! Minima modi ipsum repudiandae?
            </p>
          </div>
        </div>
        <Link
          to="/registry-list"
          className="rounded-lg border-none bg-gold px-6 py-2 text-white hover:text-black"
        >
          Participar
        </Link>
        <Routes>
          <Route path="/registry-list" element={<RegistryList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
