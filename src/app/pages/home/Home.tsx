import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="image-container">
      <Link to="/calculadoras">
        <picture>
          <source
            className="logo"
            srcSet="Ink-Branca.png"
            media="(prefers-color-scheme: dark)"
          />
          <img
            className="logo"
            src="Ink-Preta.png"
            alt="Browser with large and small images of a coffee cup and plants"
          />
        </picture>
      </Link>
    </div>
  );
};

export default Home;
