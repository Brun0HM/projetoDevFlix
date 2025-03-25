import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black p-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img src={props.logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  data-bs-toggle="button"
                  aria-pressed="false"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  data-bs-toggle="button"
                  aria-pressed="false"
                >
                  Categorias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  data-bs-toggle="button"
                  aria-pressed="false"
                >
                  Séries
                </a>
              </li>
            </ul>
          </div>
          {/* Barra de pesquisa fora do menu toggle */}
          <div className={`d-flex align-items-center ${styles.back}`}>
            <span className="text-light">
              <ion-icon name="search-sharp"></ion-icon>
            </span>
            <input
              className={`${styles.searchInput} ms-2 text-light rounded bg-dark border-0 form`}
              placeholder="Nome do filme"
              type="text"
            />
            <img
              src="https://placehold.co/50x50"
              alt="profile"
              className="rounded-2 ms-3"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
