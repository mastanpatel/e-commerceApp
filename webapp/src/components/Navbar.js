import './Navbar.css';

function Navbar() {
  return (
    <div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style={{float:"right"}}><a class="active" href="#about">Login</a></li>
        </ul>
    </div>
  );
}

export default Navbar;


