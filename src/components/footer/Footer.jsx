import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer
      className={
        "d-flex text-center p-5 text-white bg-black d-flex flex-column flex-md-row justify-content-between align-items-center"
      }
    >
      <div className="mb-3 mb-md-0">
        <img src={props.logo} alt="" />
      </div>
<div>
  <p className="fst-normal text-white fs-6">Todos os direitos reservados
© [2025] [Bruno, mazzi e Ryan]. Todos os direitos reservados.</p>
</div>

      <div className="fw-bold">
        <h6>
          <a
            href="https://www.instagram.com/raattini/"
            className="text-white text-decoration-none"
          >
            @raattini
          </a>
        </h6>
        <h6>
          <a
            href="https://www.instagram.com/thiago.mazzi/"
            className="text-white text-decoration-none"
          >
            @thiago.mazzi
          </a>
        </h6>
        <h6>
          <a
            href="https://www.instagram.com/fk.brun0/"
            className="text-white text-decoration-none"
          >
            @fk.brun0
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
