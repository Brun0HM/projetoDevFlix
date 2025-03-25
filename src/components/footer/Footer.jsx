import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <footer className="text-center p-5 fw-bold text-white bg-black d-flex justify-content-between">
      <div className="text-start">
        <h6>ryan rattini</h6>
        <h6>mazzi</h6>
        <h6>bruno martins</h6>
      </div>
      <div>
        <img src={props.logo} alt="" />
      </div>
      <div className="text-end">
        <h6><a href="https://www.instagram.com/raattini/" className="text-white">@raattini</a></h6>
        <h6><a href="https://www.instagram.com/thiago.mazzi/" className="text-white">@thiago.mazzi</a></h6>
        <h6><a href="https://www.instagram.com/fk.brun0/" className="text-white">@fk.brun0</a></h6>
      </div>
    </footer>
  )
}

export default Footer