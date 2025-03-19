import styles from './MovieCard.module.css'

const MovieCard = () => {
    return (
        <>
          <div className={styles.movie} >
            <div>
              <img src='https://placehold.co/280x366' alt="" />
            </div>
            <div>
              <h4>Title</h4>
              <span className='fw-bold  text-uppercase'>Movie</span>
            </div>
          </div>
        
        </>
      );
    };

export default MovieCard