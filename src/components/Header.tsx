import logo from './../assets/Logo-2.png';
import Button from './button/Button';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="img__wrap">
                <img src={logo} alt="logo" className='logo' width="80" height="80" />
            </div>
            <input id="mobile-menu-toggle" className="menuToggle" type="checkbox" />
            <label className="burger" htmlFor="mobile-menu-toggle" aria-label="Toggle menu">
                <span />
                <span />
                <span />
            </label>
            <div className="wrap">
                <nav className="links">
                    <a href="#why-cycle" className="links__link">Why Cycle?</a>
                    <a href="#how-it-works" className="links__link">How It Works</a>
                    <a href="#testimonials" className="links__link">Testimonials</a>
                </nav>
                <Button className='btn'/>
            </div>
            <div className="mobileMenu">
                <nav className="mobileMenu__links">
                    <a href="#why-cycle" className="links__link">Why Cycle?</a>
                    <a href="#how-it-works" className="links__link">How It Works</a>
                    <a href="#testimonials" className="links__link">Testimonials</a>
                </nav>
                <Button className="btn mobileMenu__button" />
            </div>
        </header>
    )
}