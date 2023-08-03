import { Link } from "react-router-dom";
import logotype from "/images/logo.jpeg"

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Link to='/'>
                <img src={logotype} alt="logotype Rutas Salvajes" className="logo" />
            </Link>
            <div>
                <p>&copy;{currentYear} Rutas Salvajes - All rights reserved.</p>
            </div>
        </footer>
    )
}