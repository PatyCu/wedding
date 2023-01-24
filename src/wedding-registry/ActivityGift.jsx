import { Link } from "react-router-dom";

const ActivityGift = ({ item, link, img }) => {
  //const bgImage = "bg-[url('" + img + "')]";
  return (
    <li className="mb-2">
      <div className="border border-solid border-gray bg-stone-100">
        <div className="w-48 bg-gray text-center font-mono text-black">
          {item.itemTitle}
        </div>
        <div className="relative text-center">
          <img src={img} alt={item.itemTitle} className="mx-auto mt-2" />
          <div className="p-2">{item.itemValue}</div>
        </div>
        <Link
          to={link}
          className="group mb-0 block bg-gray p-0 text-white hover:bg-gold hover:text-stone-500"
        >
          <div className="mb-0 w-full bg-transparent p-0.5 text-center">
            Participa
          </div>
        </Link>
      </div>
    </li>
  );
};

export default ActivityGift;

/*
<figure className="mb-0 max-h-20 p-0">
        <img src={img} alt={title} className="m-0" />
        <figcaption className="mb-0 max-h-9 bg-gold bg-opacity-90 p-0 text-xs">
          <Link to={link} className="hover:text-white">
            {title}
          </Link>
        </figcaption>
      </figure>
*/
//bg-[url('/img/hero-pattern.svg')]
