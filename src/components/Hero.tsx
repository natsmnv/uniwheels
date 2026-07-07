import "./hero.css";
import heroLogo from "./../assets/hero_biking.webp";
import Button from "./button/Button";

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="heroTitle">SHARE THE MOMENT</h1>

            <p className="heroDesc">
                Join bike trips with people who share your route or interests.
                Discover the joy of cycling in a safe and welcoming community.
            </p>

            <div className="heroButton">
                <Button />
            </div>

            <img
                className="heroImg"
                src={heroLogo}
                alt="People cycling together"
                width="386px"
                height="281px"
            />
        </section>
    );
}