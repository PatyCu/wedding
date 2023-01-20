import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div id="container" className="m-10 w-11/12 bg-white/85 p-10">
      <h2 className="m-10 p-0 text-xl font-bold">Llista de noces</h2>
      <div className="flex">
        <div className="mr-10 w-2/5">
          <img
            src="../img/parella.jpg"
            className="shadow-slate-500 rounded-full shadow-2xl"
          />
        </div>
        <div className="mt-5 w-3/5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempora earum, iusto voluptas delectus vitae at veritatis, maxime
            quod architecto nam cupiditate numquam voluptatem, necessitatibus
            nesciunt! Minima modi ipsum repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempora earum, iusto voluptas delectus vitae at veritatis, maxime
            quod architecto nam cupiditate numquam voluptatem, necessitatibus
            nesciunt! Minima modi ipsum repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempora earum, iusto voluptas delectus vitae at veritatis, maxime
            quod architecto nam cupiditate numquam voluptatem, necessitatibus
            nesciunt! Minima modi ipsum repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            tempora earum, iusto voluptas delectus vitae at veritatis, maxime
            quod architecto nam cupiditate numquam voluptatem, necessitatibus
            nesciunt! Minima modi ipsum repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
