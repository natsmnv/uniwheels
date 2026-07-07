import { useNavigate } from "react-router-dom";
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
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/impressum">Impressum</a>
        <a href="/accessibility">Accessibility Statement</a>
      </nav>
    </footer>
  );
}
