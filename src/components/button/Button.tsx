import './button.css';

export default function Button() {
    const handleClick = () => {
        window.location.href = "https://fh-uni-wheels.projects.ct.fh-salzburg.ac.at";
    };

    return (
        <>
            <button onClick={handleClick}>
                Start Now
            </button>
        </>
    );
}