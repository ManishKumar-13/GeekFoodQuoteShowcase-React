
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logoipsum-logo">
          <img src="./images/logo.svg" alt="logoipsum" />
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul>
            <li>About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
        </ul>

        <ul className="icons">
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaGithub /></li>
            <li><FaTwitter /></li>
            <li><FaGlobe /></li>
        </ul>

        
      </div>
    </div>
  );
}

export default Footer;
