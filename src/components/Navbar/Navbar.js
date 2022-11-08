import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar">
          <h1>The Corner</h1>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/detalle">Detalle</Link>
          </div>
          <CartWidget/>
        </nav>
    )}

export default Navbar;