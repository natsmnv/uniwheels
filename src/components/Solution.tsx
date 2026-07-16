import "./solution.css";
import phone from "./../assets/phone_solution.webp";

export default function Solution() {
    return (
        <section className="solution" id="how-it-works">
            <h2 className="solutionMainTitle">Turn Solo Rides into Shared Experiences</h2>

            <div className="solutionContent">
                <div className="solutionColumn left">
                    <div className="solutionItem">
                        <h2>Find Riders Near You</h2>
                        <p>Browse trips created by cyclists in your area.</p>
                    </div>

                    <div className="solutionItem">
                        <h2>Ride with More Confidence</h2>
                        <p>Cycling with others can help reduce the feeling of riding alone and make exploring new routes more comfortable.</p>
                    </div>
                </div>

                <div className="solutionPhone">
                    <img src={phone} width="327px" height="567px" alt="Phone showing available rides" />
                </div>

                <div className="solutionColumn right">
                    <div className="solutionItem">
                        <h2>Meet Like-Minded People</h2>
                        <p>Connect with cyclists who share your interests, goals, or daily routines and build new friendships.</p>
                    </div>

                    <div className="solutionItem">
                        <h2>Join or Create Bike Trips</h2>
                        <p>Participate in existing rides or organize your own trip in just a few clicks.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}