import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    linkClass?: string;
}
function Button({ children, to, linkClass }: ButtonProps) {
    if (to) {
        return (
            <>
                <Link to={to} className={linkClass}>
                    <button className="button">{children}</button>
                </Link>
            </>
        );
    } else {
        return (
            <>
                <button className="button">{children}</button>
            </>
        );
    }
}

export default Button;
