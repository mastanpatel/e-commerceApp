import Cart from './Cart';
import './Navbar.css';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <div class="navbarmenu">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Searchbar/></li>
            <li class="loginbtn" style={{float:"right"}}><a class="active" href="#about">Login</a></li>
            <li style={{float:"right"}}><Cart/></li>
        </ul>
      
    </div>
  );
}

export default Navbar;


