import './button.css';

interface ButtonProps {
    className?: string;
    href?: string;
    label?: string;
}

export default function Button({
    className = "",
    href = "https://fh-uni-wheels.projects.ct.fh-salzburg.ac.at",
    label = "Start Now",
}: ButtonProps) {
    const buttonClassName = ["cta-button", className].filter(Boolean).join(" ");

    return (
        <a className={buttonClassName} href={href}>
            {label}
        </a>
    );
}