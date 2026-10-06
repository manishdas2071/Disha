import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareXTwitter, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section brand-section">
          <h2 className="footer-logo">Disha<span className="dot">.</span> <small style={{ fontSize: '0.9rem', opacity: 0.85 }}>(Direction)</small></h2>
          <p className="footer-tagline">
            Disha (Direction): Discover your true trajectory with AI-precision guidance. Reassuring parents and empowering learners jointly with verified vocational data.
          </p>
          <div className="social-links">
            <a href="#linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#twitter" aria-label="Twitter"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
            <a href="#instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          </div>
        </div>

        
        <div className="footer-section links-section">
          <h3>Platform Modules</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/family-counselling">Family AI Counselling</Link></li>
            <li><Link to="/outcomes">Verified Outcomes</Link></li>
            <li><Link to="/explainer">Family Explainer & ROI</Link></li>
            <li><Link to="/career">Careers & Trades</Link></li>
            <li><Link to="/admin">Admin Intelligence</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>

        
        <div className="footer-section contact-section">
          <h3>Human Escalation & Support</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>Skill India Helpline: <strong>1800-123-9626</strong></span>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeadset} className="contact-icon" />
              <Link to="/contactus">Request Certified Counsellor Call</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:marg.supports@gmail.com">marg.supports@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <span>Dhemaji, Assam, India</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Disha (Direction). All rights reserved.</p>
      </div>
    </footer>
  );
}