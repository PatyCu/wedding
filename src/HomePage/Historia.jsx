import { Link } from "react-router-dom";

const Historia = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2 className="pb-5 text-center text-2xl md:my-0 md:mx-auto">
        Llista de noces
      </h2>
      <div className="flex">
        <div className="my-0 mr-10 w-2/5 lg:w-1/5">
          <img
            src="../img/parella.jpg"
            className="rounded-full shadow-2xl shadow-slate-500"
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
          <div className="mx-auto mt-4 text-center">
            <Link
              to="/registry-list"
              className="rounded border-none bg-gold px-6 py-2 text-white hover:bg-gray"
            >
              Participa!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
