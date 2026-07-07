import Footer from '../Footer';
import Header from '../Header';
import './impressum.css';

export default function Impressum() {
    return (
        <>
            <Header/>
            <section className="impressum">
                <h1>Impressum</h1>
                <h2>Information according to legal requirements</h2>
                <p>
                    <strong>Website owner:</strong>
                    <br />
                    UniWheels Team
                </p>
                <p>
                    <strong>Address:</strong>
                    <br />
                    Urstein S1
                    <br />
                    5412 Salzburg
                    <br />
                    Austria
                </p>
                <p>
                    <strong>Contact:</strong>
                    <br />
                    Email: example@gmail.com
                </p>
                <h2>Responsible for content</h2>
                <p>
                    UniWheels Team is responsible for the content
                    of this website according to applicable laws.
                </p>
                <h2>Disclaimer</h2>
                <p>
                    The information provided on this website is created with care
                    and is intended for general informational purposes. However,
                    we cannot guarantee that all information is complete, accurate,
                    or up to date.
                </p>
                <p>
                    We reserve the right to change, update, or remove content at
                    any time without prior notice.
                </p>
                <h2>Copyright</h2>
                <p>
                    All content, designs, images, and materials on this website are
                    protected by copyright unless stated otherwise. Any use,
                    reproduction, or distribution requires prior permission.
                </p>
            </section>
            <Footer/>
        </>
    );
}