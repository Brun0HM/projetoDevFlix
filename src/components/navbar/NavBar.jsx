import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header className="bg-dark text-white p-3 d-flex">
<img src="https://placehold.co/180x60" alt="logo" className="ms-5" />
      <a className="ms-5 text-decoration-none text-light">Inicio</a>
      <a className="ms-5 text-decoration-none text-light">Categorias</a>
      <a className="ms-5 text-decoration-none text-light">Séries</a>
    </header>
  );
};

export default NavBar;
