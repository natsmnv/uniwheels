import logo from './../assets/Logo-2.png';
import Button from './button/Button';
import './header.css';

export default function Header() {
    return(
        <div className='header'>
            <div className="img__wrap">
                <img width="80" height="80" alt='logo' className='logo' src={logo}/>
            </div>
            <nav className="nav">
                <a href="">Why Cycle?</a>
                <a href="">How It Works</a>
                <a href="">Testimonials</a>
            </nav>
            <Button/>
        </div>
    )
}