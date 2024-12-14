import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {

    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        footer?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="logoo.png" alt="Logo" className="logo"/>
      </div>      
      
      <ul>
      
        <li>
         
          <Link to="/" className='scroll-link'>
          <img src="domicile.svg" alt="Home" className="menu-icon-img" />
            Home Page
          </Link>
        </li>
        <li>
          <Link to="/about" className='scroll-link'>About</Link>
        </li>
        <li>
            <a src='#' onClick={scrollToFooter} className='scroll-link'>Contact</a>
        </li>
        <li>
          <Link to="/portfolio" className='scroll-link'>Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
