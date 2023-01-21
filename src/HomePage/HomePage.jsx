import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mx-auto w-11/12 justify-center bg-white">
      <h1>HomePage</h1>
      <div>
        <ul>
          <li>
            <Link to="/registry-list">Viatge</Link>
          </li>
          <li>
            <Link to="/wedding-registry">Llista de noces</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
