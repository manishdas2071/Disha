import { Link } from 'react-router-dom';
import image1 from '../assets/Home.png';
import engineer from '../assets/enginee logo.png';
import doctor from '../assets/doctor logo.png';
import scientist from '../assets/scientist logo.png';
import law from '../assets/law logo.png';
import UPSC from '../assets/satyamev-jayate logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faChartLine,
  faLightbulb,
  faArrowRight,
  faShieldHalved,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="home-hero-text">
          <div className="brand-title-badge">Disha (Direction)</div>
          <h1 className="quote">Discover your true trajectory with AI-precision guidance</h1>
          <p className="desc">
            Empowering students and reassuring families together. Backed by verified Indian vocational outcome data, NSQF progression ladders, and multilingual conversational AI designed for both parents and learners.
          </p>

          <div className="home-cta-actions">
            <Link to="/family-counselling" className="primary-action-btn">
              <FontAwesomeIcon icon={faComments} /> Start Joint Family Counselling
            </Link>
            <Link to="/outcomes" className="secondary-action-btn">
              <FontAwesomeIcon icon={faChartLine} /> Verified Outcome Data
            </Link>
          </div>
        </div>
        <div className="home-hero-image-wrap">
          <img className="image1" src={image1} alt="Disha Career Guidance" />
        </div>
      </div>

      {/* 3 Core Highlights for Easy Exploration */}
      <div className="home-features-section">
        <div className="home-feature-card">
          <div className="feature-icon-badge">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <h3>Joint Family AI Dialogue</h3>
          <p>
            Engages learner and parents jointly in regional languages. Answers doubts on income, dignity, and job security with verified data.
          </p>
          <Link to="/family-counselling" className="card-inline-link">
            Open AI Dialogue →
          </Link>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon-badge">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h3>Verified Trade Outcomes</h3>
          <p>
            Real placement rates, certified starting wages, and accredited training centers (ITIs, NSTIs, PMKVYs) across Indian districts.
          </p>
          <Link to="/outcomes" className="card-inline-link">
            Explore Outcomes →
          </Link>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon-badge">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <h3>Low-Jargon Family Explainer</h3>
          <p>
            Side-by-side comparison of vocational training vs general degrees, tailored to family income, location, and education level.
          </p>
          <Link to="/explainer" className="card-inline-link">
            Calculate Family ROI →
          </Link>
        </div>
      </div>
      
      {/* Popular Careers & High-Growth Vocational Trades */}
      <div className="popular">
        <p>Popular Careers & High-Growth Pathways</p>
        <div className="options">
          <Link to="/career/engineer" className="popular-option-card">
            <img src={engineer} alt="Engineer" />
            <span>Engineer</span>
          </Link>
          <Link to="/outcomes" className="popular-option-card">
            <img src={engineer} alt="Solar PV Tech" />
            <span>Solar Tech</span>
          </Link>
          <Link to="/outcomes" className="popular-option-card">
            <img src={engineer} alt="Electrician" />
            <span>Electrician</span>
          </Link>
          <Link to="/career/medical-professional" className="popular-option-card">
            <img src={doctor} alt="Doctor" />
            <span>Doctor</span>
          </Link>
          <Link to="/career/research-scientist" className="popular-option-card">
            <img src={scientist} alt="Scientist" />
            <span>Scientist</span>
          </Link>
          <Link to="/career/civil-services" className="popular-option-card">
            <img src={UPSC} alt="Civil Services" />
            <span>Civil Ser.</span>
          </Link>
          <Link to="/career/corporate-lawyer" className="popular-option-card">
            <img src={law} alt="Law" />
            <span>Law</span>
          </Link>
        </div>
      </div>
    </>
  );
}