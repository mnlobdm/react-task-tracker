import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Hoe werkt dit?</h4>
      <p>
        Eigenlijk heel simpel: om een taak toe te voegen klik je rechtsbovenin
        op 'Toevoegen', vul je de gevraagde gegevens in en klik je op 'Taak
        toevoegen'. Om een taak te verwijderen klik je op het rode kruisje.
        Taken met een herinnering hebben aan de linkerkant een groene rand.
        Vergeten een herinnering in te stellen of wil je die weer weghalen?
        Dubbelklik dan op de desbetreffende taak.
      </p>
      <h4 className="version-number">
        <br></br>Versie: 1.0
      </h4>
      <Link to="/" className="btn-back">
        Terug
      </Link>
    </div>
  );
};

export default About;
