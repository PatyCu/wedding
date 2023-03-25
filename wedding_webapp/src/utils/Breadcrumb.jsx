import { Link } from "react-router-dom";
const Breadcrumb = ({ backPath, prevPath, nextPath }) => {
  return (
    <div id="breadcrumb" className="flex basis-5/6 flex-row px-6">
      <Link
        to={backPath}
        className="group flex gap-2 font-bold hover:text-gold"
      >
        <span>
          <img
            src="/img/icon-arrow-left.svg"
            alt="left arrow to navigate to the previous gift"
            className="rounded-full border border-solid border-gray group-hover:border-gold"
          />
        </span>
        <span className="mt-0.5">Llista de noces</span>
      </Link>
      <div className="ml-auto flex gap-2">
        <span>
          <Link to={"/gift/".concat(prevPath)} className="group">
            <img
              src="/img/icon-arrow-left.svg"
              alt="left arrow to navigate to the previous gift"
              className="rounded-full border border-solid border-gray group-hover:border-gold"
            />
          </Link>
        </span>
        <span>
          <Link to={"/gift/".concat(nextPath)} className="group">
            <img
              src="/img/icon-arrow-right.svg"
              alt="right arrow to navigate to the next gift"
              className="rounded-full border border-solid border-gray group-hover:border-gold"
            />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
