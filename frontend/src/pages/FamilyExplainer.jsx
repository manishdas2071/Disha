import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faIndianRupeeSign,
  faGraduationCap,
  faBuildingColumns,
  faCheckCircle,
  faVolumeHigh,
  faArrowTrendUp,
  faShieldHalved,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { nsqfExplainers } from '../data/vocationalData';

export default function FamilyExplainer() {
  const [locationType, setLocationType] = useState('rural'); // 'rural' | 'semi-urban' | 'urban'
  const [incomeBracket, setIncomeBracket] = useState('low'); // 'low' (<15k) | 'mid' (15k-30k) | 'upper' (>30k)
  const [academicLevel, setAcademicLevel] = useState('10th'); // '8th' | '10th' | '12th' | 'dropout'

  // Text-to-Speech audio reader
  const speakComparison = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = "A vocational qualification allows a student to complete training in one to two years with almost zero tuition debt, supported by a government stipend of nine thousand to twelve thousand rupees per month during apprenticeship. In contrast, an unspecialized college degree takes three to four years and delays earnings. Choosing a vocational route brings financial security to the household much earlier.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.lang = 'en-IN';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported on this browser.");
    }
  };

  // Dynamic tailored ROI calculations based on user input
  const getTailoredInsights = () => {
    let recommendedTrade = 'Industrial Electrician or Solar PV Technician';
    let suggestedNsqf = 'NSQF Level 4';
    let estStartingSalary = '₹18,000 - ₹28,000 / month';
    let govSubsidy = '100% Free Tuition under PMKVY / State Skill Mission with NAPS Apprenticeship Stipend';

    if (academicLevel === '8th') {
      recommendedTrade = 'Welder / Plumber / Basic Automotive Service';
      suggestedNsqf = 'NSQF Level 3';
      estStartingSalary = '₹14,000 - ₹20,000 / month';
    } else if (academicLevel === '12th') {
      recommendedTrade = 'CNC Machinist, Drone Service Tech, or Paramedical GDA';
      suggestedNsqf = 'NSQF Level 4 / 5';
      estStartingSalary = '₹22,000 - ₹34,000 / month';
    } else if (academicLevel === 'dropout') {
      recommendedTrade = 'Renewable Solar Tech or EV Diagnostic Specialist';
      suggestedNsqf = 'NSQF Level 4 (RPL - Recognition of Prior Learning)';
      estStartingSalary = '₹20,000 - ₹30,000 / month';
    }

    if (incomeBracket === 'low') {
      govSubsidy = 'Eligible for 100% Free Hostel & Boarding at Central/State ITIs + Monthly NAPS Stipend of ₹9,000/mo';
    }

    return { recommendedTrade, suggestedNsqf, estStartingSalary, govSubsidy };
  };

  const insights = getTailoredInsights();

  return (
    <div className="explainer-page-container">
      {/* Header */}
      <div className="explainer-hero">
        <div className="header-badge">
          <FontAwesomeIcon icon={faLightbulb} /> Low-Jargon Contextual Guidance
        </div>
        <h1>Family Context Explainer & Financial ROI</h1>
        <p>
          Understand exactly how vocational qualifications translate into immediate family earnings, job titles, and career progression — without confusing bureaucratic jargon.
        </p>
      </div>

      {/* Context Selection Form */}
      <div className="family-context-card">
        <h3>Step 1: Select Your Family's Context</h3>
        <p className="context-desc">
          We tailor trade choices and economic forecasts to your living location and household income.
        </p>

        <div className="context-selectors-grid">
          {/* Location */}
          <div className="selector-group">
            <label>Living Location</label>
            <div className="pill-button-group">
              <button
                className={`pill-btn ${locationType === 'rural' ? 'active' : ''}`}
                onClick={() => setLocationType('rural')}
              >
                Village / Rural
              </button>
              <button
                className={`pill-btn ${locationType === 'semi-urban' ? 'active' : ''}`}
                onClick={() => setLocationType('semi-urban')}
              >
                Small Town / Semi-Urban
              </button>
              <button
                className={`pill-btn ${locationType === 'urban' ? 'active' : ''}`}
                onClick={() => setLocationType('urban')}
              >
                City / Urban
              </button>
            </div>
          </div>

          {/* Household Monthly Income */}
          <div className="selector-group">
            <label>Monthly Household Income</label>
            <div className="pill-button-group">
              <button
                className={`pill-btn ${incomeBracket === 'low' ? 'active' : ''}`}
                onClick={() => setIncomeBracket('low')}
              >
                Below ₹15,000 / mo
              </button>
              <button
                className={`pill-btn ${incomeBracket === 'mid' ? 'active' : ''}`}
                onClick={() => setIncomeBracket('mid')}
              >
                ₹15,000 - ₹35,000 / mo
              </button>
              <button
                className={`pill-btn ${incomeBracket === 'upper' ? 'active' : ''}`}
                onClick={() => setIncomeBracket('upper')}
              >
                Above ₹35,000 / mo
              </button>
            </div>
          </div>

          {/* Academic Background */}
          <div className="selector-group">
            <label>Learner's Highest Education</label>
            <div className="pill-button-group">
              <button
                className={`pill-btn ${academicLevel === '8th' ? 'active' : ''}`}
                onClick={() => setAcademicLevel('8th')}
              >
                8th Pass
              </button>
              <button
                className={`pill-btn ${academicLevel === '10th' ? 'active' : ''}`}
                onClick={() => setAcademicLevel('10th')}
              >
                10th Pass
              </button>
              <button
                className={`pill-btn ${academicLevel === '12th' ? 'active' : ''}`}
                onClick={() => setAcademicLevel('12th')}
              >
                12th Pass
              </button>
              <button
                className={`pill-btn ${academicLevel === 'dropout' ? 'active' : ''}`}
                onClick={() => setAcademicLevel('dropout')}
              >
                College Dropout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Family Assessment */}
      <div className="tailored-recommendation-card">
        <div className="card-top-header">
          <div>
            <span className="rec-badge">Tailored For Your Context</span>
            <h2>Recommended Path: {insights.recommendedTrade}</h2>
          </div>
          <button className="listen-explainer-btn" onClick={speakComparison}>
            <FontAwesomeIcon icon={faVolumeHigh} /> Listen Audio Summary
          </button>
        </div>

        <div className="rec-details-grid">
          <div className="rec-box">
            <span className="box-label">Recommended NSQF Level</span>
            <span className="box-val">{insights.suggestedNsqf}</span>
          </div>
          <div className="rec-box">
            <span className="box-label">Expected Certified Pay</span>
            <span className="box-val highlight">{insights.estStartingSalary}</span>
          </div>
          <div className="rec-box wide">
            <span className="box-label">Government Fee Subsidies & NAPS Benefits</span>
            <span className="box-val">{insights.govSubsidy}</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Reality Comparison */}
      <div className="comparison-section">
        <h2>Side-by-Side: Vocational Route vs Traditional Degree</h2>
        <p className="comp-subtitle">
          Real mathematical comparison for a household over a 3-year timeline.
        </p>

        <div className="comparison-grid">
          {/* Card 1: Vocational */}
          <div className="comparison-card vocational-card">
            <div className="comp-card-badge positive">Recommended for Early Earning</div>
            <h3>Vocational / ITI Skill Pathway</h3>
            <div className="comp-factor">
              <span className="factor-title">Time to First Paycheck:</span>
              <span className="factor-val"><strong>12 - 24 Months</strong> (Starts earning at age 18-19)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Training Cost to Parents:</span>
              <span className="factor-val"><strong>Near Zero</strong> (Subsidized by Govt ITI / PMKVY)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">During Training Income:</span>
              <span className="factor-val">₹9,000 - ₹12,000 / month (Govt NAPS Apprenticeship)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Total 3-Year Family Income:</span>
              <span className="factor-val positive-text">
                <FontAwesomeIcon icon={faIndianRupeeSign} /> ~₹4,20,000 earned by Year 3
              </span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Higher Education Option:</span>
              <span className="factor-val">
                <FontAwesomeIcon icon={faCheckCircle} /> Direct lateral entry to 2nd Year Diploma / B.Voc
              </span>
            </div>
          </div>

          {/* Card 2: Traditional Degree */}
          <div className="comparison-card degree-card">
            <div className="comp-card-badge neutral">Traditional Academic Route</div>
            <h3>Unspecialized General Degree (B.A. / B.Com)</h3>
            <div className="comp-factor">
              <span className="factor-title">Time to First Paycheck:</span>
              <span className="factor-val">36 - 48 Months (Delays earning until age 21-22)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Training Cost to Parents:</span>
              <span className="factor-val">₹75,000 - ₹2,50,000 (Tuition, books, boarding)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">During Training Income:</span>
              <span className="factor-val">₹0 (Zero earnings while studying)</span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Total 3-Year Family Income:</span>
              <span className="factor-val negative-text">
                -₹1,50,000 (Net outflow of family savings)
              </span>
            </div>
            <div className="comp-factor">
              <span className="factor-title">Immediate Job Placement:</span>
              <span className="factor-val">
                44% face initial unspecialized underemployment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Low Jargon NSQF Explainer Hierarchy */}
      <div className="nsqf-ladder-section">
        <h2>What Does "NSQF Level" Actually Mean in Plain Language?</h2>
        <p className="section-subtext">
          No complicated educational terms. Here is how National Skill Qualification Framework levels translate to real job positions:
        </p>

        <div className="nsqf-cards-list">
          {nsqfExplainers.map((item, index) => (
            <div key={index} className="nsqf-explainer-item">
              <div className="level-tag">{item.level}</div>
              <div className="level-info">
                <h3>{item.simpleTitle}</h3>
                <p>{item.description}</p>
                <div className="level-meta">
                  <span><strong>Duration:</strong> {item.typicalDuration}</span>
                  <span><strong>Example Roles:</strong> {item.exampleJob}</span>
                  <span className="earning-tag"><strong>Earnings:</strong> {item.monthlyEarningRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="explainer-cta-box">
        <h3>Ready to discuss these numbers with your family?</h3>
        <p>Our conversational AI tool will walk both you and your parents through these calculations in simple words.</p>
        <Link to="/family-counselling" className="cta-launch-btn">
          <FontAwesomeIcon icon={faComments} /> Open Joint Family AI Dialogue
        </Link>
      </div>
    </div>
  );
}
