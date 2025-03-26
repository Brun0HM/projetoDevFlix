import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black p-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img src={props.logo} alt="logo" />
          </a>
         
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light">Inicio</a>
              </li>
            </ul>
       

          <div className={`d-flex align-items-center ${styles.back}`}>
            <span className="text-light">
              <ion-icon name="search-sharp"></ion-icon>
            </span>
            <input
              className={`${styles.searchInput} ms-2 text-light rounded bg-dark border-0 form`}
              placeholder="Nome do filme"
              onChange={props.Change}
              onKeyDown={props.KeyDown}
              type="text"
            />
            <img src={props.perfil} alt="profile" className="rounded-2 ms-3" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
