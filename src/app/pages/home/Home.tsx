import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calculadoras");
  };

  return (
    <>
      <motion.div
        onDoubleClick={handleClick}
        className="image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
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
      </motion.div>
      <motion.div
        className="text-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5, delay: 2 } }}
      >
        <p>Arraste o icone, e depois clique duas vezes :)</p>
      </motion.div>
    </>
  );
};

export default Home;
