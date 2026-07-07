import Footer from "../Footer";
import Header from "../Header";
import './accessibilityStatement.css';

export default function AccessibilityStatement() {
    return (
        <>
            <Header/>
            <section className="accessibilityStatement">
                <h1>Accessibility Statement</h1>
                <h2>Our Commitment</h2>
                <p>
                    We are committed to making our website accessible and easy to
                    use for everyone, including people with disabilities.
                </p>
                <p>
                    We aim to follow accessibility principles and continuously
                    improve the usability of our website.
                </p>
                <h2>Accessibility Features</h2>
                <ul>
                    <li>Clear and consistent navigation</li>
                    <li>Sufficient color contrast between text and backgrounds</li>
                    <li>Responsive design for different screen sizes</li>
                    <li>Keyboard-friendly navigation where possible</li>
                    <li>Meaningful alternative text for images</li>
                </ul>
                <h2>Known Limitations</h2>
                <p>
                    While we strive to provide an accessible experience, some areas
                    of the website may not yet fully meet all accessibility
                    standards.
                </p>
                <p>
                    We continuously review and improve our website based on
                    accessibility best practices.
                </p>
                <h2>Feedback</h2>
                <p>
                    If you experience any accessibility barriers or have suggestions
                    for improvement, please contact us.
                </p>
                <p>
                    Your feedback helps us make our website more inclusive.
                </p>
            </section>
            <Footer/>
        </>
    );
}