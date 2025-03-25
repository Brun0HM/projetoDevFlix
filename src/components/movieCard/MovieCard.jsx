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
  const poster = `https://image.tmdb.org/t/p/w300/${prop.poster_path}`;
  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
        <div>
          <img src={poster} alt="" />
        </div>
        <div>
          <h5>{truncateString(prop.title, 15)}</h5>
          <span className="fw-bold  text-uppercase">{prop.genre_ids}</span>
        </div>
      </div>
      {isModalOpen && <Modal {...prop} click={toggleModal} />}
    </>
  );
};

export default MovieCard;
