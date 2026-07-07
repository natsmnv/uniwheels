import Button from "./button/Button";
import iphoneMockup from "./../assets/iphone-mockup.png";
import "./RepeatCTA.css";

const RepeatCTA = () => {
  return (
    <section className="repeat-cta" aria-labelledby="repeat-cta-heading">
      <img
        src={iphoneMockup}
        alt="Uni Wheels app showing the New Ride screen on an iPhone"
        className="repeat-cta__image"
        width={516}
        height={289}
      />
      <div className="repeat-cta__content">
        <h2 id="repeat-cta-heading">Ready to Ride Together?</h2>
        <p className="repeat-cta__description">
          Whether you&apos;re a beginner or an experienced cyclist, our
          community makes every ride safer and more enjoyable.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default RepeatCTA;
