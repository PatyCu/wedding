import { Link } from "react-router-dom";

const SecondaryNavigation = ({ title, link, img }) => {
  return (
    <figure>
      <img src={img} alt={title} />
      <figcaption>
        <Link to={link} className="hover:text-white">
          {" "}
          {title}
        </Link>
      </figcaption>
    </figure>
  );
};

export default SecondaryNavigation;
