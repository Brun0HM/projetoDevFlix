import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black p-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={props.logo} alt="logo" style={{ height: "40px" }} />
          </a>

          {/* Central Content */}
          <div className="d-none d-lg-flex align-items-center">
            <div className="d-flex align-items-center">
              <span className="text-light me-2">
                <ion-icon name="search-sharp"></ion-icon>
              </span>
              <input
                className={`${styles.searchInput} text-light rounded bg-dark border-0`}
                placeholder="Nome do filme"
                onChange={props.Change}
                onKeyDown={props.KeyDown}
                type="text"
              />
            </div>
          </div>

          {/* Profile Image */}
          <img
            src={props.perfil}
            alt="profile"
            className="rounded-2"
          />

          {/* Central Content for Mobile */}
          <div className="d-flex d-lg-none flex-column align-items-center mt-3">
            <div className="d-flex align-items-center w-100">
              <span className="text-light me-2">
                <ion-icon name="search-sharp"></ion-icon>
              </span>
              <input
                className={`${styles.searchInput} text-light rounded bg-dark border-0`}
                placeholder="Nome do filme"
                onChange={props.Change}
                onKeyDown={props.KeyDown}
                type="text"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
