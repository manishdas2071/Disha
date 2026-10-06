import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faComments,
  faChartLine,
  faHeadset,
  faBuildingColumns,
  faCheckCircle,
  faLightbulb,
  faShieldHalved,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
  const pillars = [
    {
      icon: faComments,
      title: "Joint Family Conversational AI",
      desc: "Unlike existing tools that focus exclusively on the student, Disha engages the learner and parents together in their regional language, addressing real family objections with verified facts."
    },
    {
      icon: faChartLine,
      title: "Verified Localized Outcome Backend",
      desc: "Replacing generic career descriptions with authentic placement percentages, audited post-training earnings, and accredited training provider data (ITIs, NSTIs, and PMKVY centers)."
    },
    {
      icon: faLightbulb,
      title: "Low-Jargon Contextual Explainer",
      desc: "Tailoring career ladders and financial comparisons to the household's actual income bracket, location, and education level, with voice text-to-speech for low-literacy users."
    },
    {
      icon: faHeadset,
      title: "Seamless Human Counsellor Escalation",
      desc: "Whenever algorithmic guidance cannot fully resolve parental doubts, the platform offers an instant 1-click gateway to certified human career counsellors."
    },
    {
      icon: faBuildingColumns,
      title: "Scheme Administrator Intelligence",
      desc: "Empowering state skill missions and DGT administrators with heatmaps tracking where and why parental resistance is concentrated, along with measured sentiment shifts."
    }
  ];

  return (
    <div className="about-page-container">
      
      {/* Hero Section */}
      <div className="about-hero">
        <span className="about-tag">SIH 2026 Initiative</span>
        <h1>Bridging the Family Perception Gap in Vocational Skilling</h1>
        <p>
          Disha (Direction) was conceptualized to transform vocational training in India from an "alternative of last resort" into an aspirational, data-backed career pathway embraced by both students and parents.
        </p>
      </div>

      {/* The Background Problem Section */}
      <div className="about-story-section">
        <div className="story-content">
          <h2>The Problem: Why Career Guidance Must Involve the Family</h2>
          <p>
            In India, enrolment and retention in vocational training are shaped as much by family perception as by the learner's own ambition. Across rural and semi-urban households, parents frequently view vocational pathways as a lower-status alternative to academic degree routes.
          </p>
          <p>
            This perception—more than access or affordability alone—leads to low enrolment, high mid-course dropouts, and reluctance to pursue NSQF-aligned progression. Existing career-guidance tools in India are almost entirely learner-facing; they guide the student but do nothing to reassure the parents who often hold the veto power over educational choices.
          </p>
          <p>
            <strong>Disha changes this paradigm.</strong> Rather than treating career counselling as a solitary, student-only activity, Disha brings the family unit into the conversation with credible, localized, data-backed facts regarding earning potential, job security, safety, and social dignity.
          </p>
        </div>
      </div>

      {/* The 5 Pillars of Disha */}
      <div className="about-pillars-section">
        <div className="section-intro">
          <h2>How Disha Solves the Challenge</h2>
          <p>Five structural capabilities designed for high impact, low digital barriers, and maximum reassurance.</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={pillar.icon} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* National Framework Alignment */}
      <div className="about-framework-section">
        <h2>Aligned with National Standards & Schemes</h2>
        <div className="framework-grid">
          <div className="framework-card">
            <h4>National Skills Qualifications Framework (NSQF)</h4>
            <p>Full mapping of Levels 3 through 7, providing clear vertical credit mobility from ITI certificates to Polytechnic diplomas and B.Voc degrees.</p>
          </div>
          <div className="framework-card">
            <h4>Skill India Mission & DGT Standards</h4>
            <p>Grounded in verified placement and wage datasets from Directorate General of Training (DGT) and National Skill Development Corporation (NSDC).</p>
          </div>
          <div className="framework-card">
            <h4>National Apprenticeship Promotion Scheme (NAPS)</h4>
            <p>Accurate accounting of paid stipends (₹9,000–₹12,000/mo) that provide immediate household financial relief during on-the-job training.</p>
          </div>
        </div>
      </div>

      {/* Low-Literacy Inclusion Banner */}
      <div className="about-inclusion-banner">
        <div className="inclusion-text">
          <h3>Designed for Low-Literacy & First-Generation Learners</h3>
          <p>
            With voice-based Speech-to-Text input, natural Text-to-Speech audio playback, and regional language availability (Hindi, Assamese, Bengali, Tamil, English), Disha ensures that no parent is excluded by digital or linguistic barriers.
          </p>
        </div>
        <Link to="/family-counselling" className="inclusion-btn">
          Try Joint Counselling Now <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

    </div>
  );
}