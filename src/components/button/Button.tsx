import './button.css';

export default function Button({className=""}) {
    const handleClick = () => {
        window.location.href = "https://fh-uni-wheels.projects.ct.fh-salzburg.ac.at";
    };

    return (
        <>
            <button className={className} onClick={handleClick}> Start Now </button>
        </>
    );
}