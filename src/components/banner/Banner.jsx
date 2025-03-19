import styles from './Banner.module.css'

const Banner = () => {
  return (
    <header className={styles.bannerdiv}>
           <h1 className="text-light">Nome do Filme/Série</h1>
              <p className="text-light">Descrição curta e impactante</p>
            <button className="btn btn-danger btn-sm fw-bold px-4 py-2 me-3 mb-3">Assistir Agora</button>
            <button className="btn btn-light btn-sm fw-bold px-4 py-2 text-danger me-3 mb-3">+ Lista</button>
  </header>

  )
}

export default Banner