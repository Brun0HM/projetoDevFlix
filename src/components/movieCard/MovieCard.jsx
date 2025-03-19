import styles from './MovieCard.module.css'

const MovieCard = () => {
    return (
        <>
          <div className={styles.movie} >
            <div>
              <img src='https://placehold.co/280x400' alt="" />
            </div>
            <div>
              <h3>Title</h3>
              <span className='fw-bold fs-6 text-uppercase'>Movie</span>
            </div>
          </div>
        
        </>
      );
    };

export default MovieCard