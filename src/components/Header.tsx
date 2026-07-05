import { useState } from 'react';
import logo from './../assets/Logo-2.png';
import Button from './button/Button';
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <div className="img__wrap">
                    <img width="80" height="80" alt='logo' className='logo' src={logo} />
                </div>
                <nav className="nav">
                    <a href="">Why Cycle?</a>
                    <a href="">How It Works</a>
                    <a href="">Testimonials</a>
                </nav>
                <Button />
                <button
                    className={`burger ${menuOpen ? 'burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
                <a href="" onClick={() => setMenuOpen(false)}>Why Cycle?</a>
                <a href="" onClick={() => setMenuOpen(false)}>How It Works</a>
                <a href="" onClick={() => setMenuOpen(false)}>Testimonials</a>
                <Button />
            </div>
        </div>
    );
}