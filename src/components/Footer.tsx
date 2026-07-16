import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/Logo-2.png";
import "./Footer.css";


export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Uni Wheels logo" width={40} height={40} />
      </div>
      <nav className="footer__nav" aria-label="Footer navigation">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/accessibility">Accessibility Statement</Link>
      </nav>
    </footer>
  );
}
