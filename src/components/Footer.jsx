import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram , FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <FaFacebook />
        <a href="https://www.facebook.com/isabella.sales.79" target="_blank" rel="noopener noreferrer">Facebook</a>
        <FaInstagram />
        <a href="https://www.instagram.com/drabellasalesnutri/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <FaLinkedin />
        <a href="https://www.linkedin.com/in/isabella-sales-98939b24b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>&copy; 2024 Dtra Isabella Sales. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
