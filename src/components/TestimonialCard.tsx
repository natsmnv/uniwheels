import "./Testimonial.css";

interface TestimonialCardProps {
  name: string;
  text: string;
  age: number;
}

const TestimonialCard = ({ name, text, age }: TestimonialCardProps) => {
  return (
    <div className="testimonial">
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-name">
        {" "}
        {name}, {age}
      </p>
    </div>
  );
};

export default TestimonialCard;
