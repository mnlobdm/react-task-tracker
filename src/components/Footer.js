import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      {location.pathname === "/" && <Link to="/about">Hoe werkt dit?</Link>}
    </footer>
  );
};

export default Footer;
