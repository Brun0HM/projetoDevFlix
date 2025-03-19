import styles from "./MovieCard.module.css";
import { useState } from "react";
const MovieCard = (prop) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <img src="https://placehold.co/210x300" alt="" />
        </div>
        <div>
          <h5>Title</h5>
          <span className="fw-bold  text-uppercase">Movie</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
