import TestimonialCard from "./TestimonialCard";
import "./ProofSection.css";

const testimonials = [
  {
    name: "Sarah",
    age: 24,
    quote:
      "I wanted to cycle more often, but I didn't feel comfortable riding alone. Finding people to ride with made me much more confident.",
  },
  {
    name: "Daniel",
    age: 29,
    quote:
      "My biggest challenge was motivation. Having others to ride with turned cycling into something I actually looked forward to.",
  },
  {
    name: "Emma",
    age: 21,
    quote:
      "I moved to a new city and didn't know anyone who cycled. Through shared rides, I discovered new routes and met great people.",
  },
];

const ProofSection = () => {
  return (
    <div className="proof-section">
      <h2>What Cyclists Say</h2>
      <div className="proof-content">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            text={testimonial.quote}
            age={testimonial.age}
          />
        ))}
      </div>
    </div>
  );
};

export default ProofSection;
