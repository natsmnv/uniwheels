import Footer from "../Footer";
import Header from "../Header";
import './privacyPolicy.css';

export default function PrivacyPolicy() {
    return (
        <>
            <Header/>
            <section className="privacy-policy">
                <h1>Privacy Policy</h1>
                <h2>1. General Information</h2>
                <p>
                    The protection of your personal data is important to us.
                    This Privacy Policy explains how we collect, use, and protect
                    your personal information when you visit and use our website.
                </p>
                <h2>2. Data Collection</h2>
                <p>
                    We only collect personal data that is necessary for providing
                    our services and improving your experience on our website.
                </p>
                <p>This may include:</p>
                <ul>
                    <li>Information you provide voluntarily (for example, when contacting us)</li>
                    <li>Technical information such as browser type, device information, and usage data</li>
                </ul>
                <h2>3. Use of Data</h2>
                <p>We use collected data to:</p>
                <ul>
                    <li>Provide and maintain our website</li>
                    <li>Improve functionality and user experience</li>
                    <li>Respond to inquiries and requests</li>
                    <li>Ensure website security</li>
                </ul>
                <p>
                    We do not sell, trade, or share your personal information with
                    third parties unless required by law or necessary for providing
                    our services.
                </p>
                <h2>4. Cookies</h2>
                <p>
                    Our website may use cookies or similar technologies to improve
                    functionality and user experience. You can control or disable
                    cookies through your browser settings.
                </p>
                <h2>5. Data Security</h2>
                <p>
                    We take appropriate technical and organizational measures to
                    protect your personal data against unauthorized access, loss,
                    or misuse.
                </p>
                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to your personal data</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Restrict or object to data processing</li>
                </ul>
                <h2>7. Contact</h2>
                <p>
                    For questions regarding this Privacy Policy, please contact the
                    responsible person listed in the Impressum.
                </p>
            </section>
            <Footer/>
        </>
    );
}