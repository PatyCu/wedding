import { Link } from "react-router-dom";

const SecondaryNavigation = ({ title, link, img }) => {
  return (
    <li>
      <figure>
        <img src={img} alt={title} />
        <figcaption>
          <Link to={link} className="hover:text-gold">
            {" "}
            {title}
          </Link>
        </figcaption>
      </figure>
    </li>
  );
};

export default SecondaryNavigation;
