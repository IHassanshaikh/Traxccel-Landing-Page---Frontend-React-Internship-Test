import logo from "../../assets/logo.png"; // Ensure the correct path and file extension

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='traxccel-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">What we do?</a></li>
          <li><a href="#">How we do?</a></li>
          <li><a href="#">Impacts</a></li>
          <li><a href="#">axlACADEMY</a></li>
          <li><a href="#">axlINSIGHTS</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
      <button className="contact-btn">Contact</button>
    </div>
  );
};

export default Navbar;
