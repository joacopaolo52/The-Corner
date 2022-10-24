import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
    return(
        <nav className="navbar">
          <h1>The Corner</h1>
          <div className="navbar-nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Jersey</a>
            <a className="nav-link" href="#">Jacket</a>
            <a className="nav-link" href="#">Cap</a>
          </div>
          <CartWidget/>
        </nav>
    )}

export default Navbar;