import logotype from "/images/logo.jpeg"
import { Link } from "react-router-dom"
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to='/'>
        <p>RutaSalaje | Aventuras motorizadas</p>
      </Link>
      <div>
        <ul className="nav-links">
          <li>
            <button type="button" className="btn btn-outline-warning">Registrarse</button>
          </li>
          <li>
            <button className="btn btn-warning" type="submit">Iniciar sesion</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
