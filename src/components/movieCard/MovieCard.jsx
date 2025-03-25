
import Modal from "../modal/Modal";
import styles from "./MovieCard.module.css";
import { useState } from "react";
const MovieCard = (prop) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <img src={prop.Poster} alt="" />
        </div>
        <div>
          <h5>{truncateString(prop.title, 15)}</h5>
          <span className="fw-bold  text-uppercase">{prop.genre}</span>
        </div>
      </div>
     {isModalOpen && <Modal {...prop} click={toggleModal} />}
    </>
  );
};

export default MovieCard;
