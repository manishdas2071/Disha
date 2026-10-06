import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faBuildingColumns,
  faIndianRupeeSign,
  faGraduationCap,
  faShieldHalved,
  faMagnifyingGlass,
  faArrowTrendUp,
  faComments,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { verifiedTrades } from '../data/vocationalData';

export default function VerifiedOutcomes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedTrade, setSelectedTrade] = useState(null);

  const sectors = ['All', 'Renewable & Green Energy', 'Power & Infrastructure', 'Capital Goods & Aerospace Manufacturing', 'Healthcare & Paramedical', 'Aerospace & Agriculture Tech', 'Automotive & Clean Mobility'];

  const filteredTrades = verifiedTrades.filter((trade) => {
    const matchesSearch = trade.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trade.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trade.nsqfLevel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || trade.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="outcomes-page-container">
      {/* Hero Section */}
      <div className="outcomes-hero">
        <div className="header-badge">
          <FontAwesomeIcon icon={faCircleCheck} /> Verified Central & State Data
        </div>
        <h1>Verified Vocational Outcome Registry</h1>
        <p>
          Credible, localized outcome data for specific trades and training providers. Transparent post-training earnings, verified placement rates, and real NSQF career progression pathways.
        </p>

        {/* Search & Sector Filters */}
        <div className="outcomes-search-box">
          <div className="search-input-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder="Search trade (e.g. Solar, Electrician, CNC, Healthcare, Drone)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="sector-chips">
            {sectors.map((sec) => (
              <button
                key={sec}
                className={`sector-chip ${selectedSector === sec ? 'active' : ''}`}
                onClick={() => setSelectedSector(sec)}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trades Grid */}
      <div className="trades-grid">
        {filteredTrades.map((trade) => (
          <div key={trade.id} className="trade-card">
            <div className="trade-card-header">
              <span className="nsqf-badge">{trade.nsqfLevel}</span>
              <span className="placement-badge">
                <FontAwesomeIcon icon={faChartLine} /> {trade.placementRate} Placement
              </span>
            </div>

            <h2 className="trade-title">{trade.title}</h2>
            <p className="trade-sector">{trade.sector}</p>

            <div className="trade-stats-row">
              <div className="stat-box">
                <span className="stat-label">Avg. Post-Training Salary</span>
                <span className="stat-value salary">
                  <FontAwesomeIcon icon={faIndianRupeeSign} /> {trade.avgStartingSalary}
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Course Duration</span>
                <span className="stat-value">{trade.duration}</span>
              </div>
            </div>

            <div className="training-centers-section">
              <h4>Verified Training Providers:</h4>
              <ul className="centers-list">
                {trade.certifiedProviders.map((provider, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <span><strong>{provider.name}</strong> ({provider.location}) — <em>{provider.type}</em></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NSQF Progression Ladder Preview */}
            <div className="progression-preview">
              <h4>NSQF Career Progression Route:</h4>
              <div className="progression-steps">
                {trade.nsqfPathways.map((step, idx) => (
                  <div key={idx} className="prog-step-pill">
                    <span className="step-level">{step.level}</span>
                    <span className="step-role">{step.role}</span>
                    <span className="step-pay">{step.salary}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parent Reassurance Highlight */}
            <div className="parent-reassurance-box">
              <strong>
                <FontAwesomeIcon icon={faShieldHalved} /> Parental Reassurance:
              </strong>
              <p>{trade.parentReassurance.jobSecurity}</p>
            </div>

            <div className="trade-card-actions">
              <Link to="/family-counselling" className="consult-ai-btn">
                <FontAwesomeIcon icon={faComments} /> Discuss with Family in AI
              </Link>
              <button
                className="view-path-btn"
                onClick={() => setSelectedTrade(trade)}
              >
                Full Progression Details →
              </button>
            </div>
          </div>
        ))}

        {filteredTrades.length === 0 && (
          <div className="no-trades-found">
            <p>No verified vocational trades matched your search criteria.</p>
          </div>
        )}
      </div>

      {/* Detailed Modal */}
      {selectedTrade && (
        <div className="custom-popup-overlay">
          <div className="trade-detail-modal">
            <div className="modal-header">
              <h2>{selectedTrade.title}</h2>
              <button
                className="close-modal-icon"
                onClick={() => setSelectedTrade(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-content-body">
              <div className="detail-meta-row">
                <div><strong>Sector:</strong> {selectedTrade.sector}</div>
                <div><strong>Standard:</strong> {selectedTrade.nsqfLevel}</div>
                <div><strong>Verified Placement:</strong> {selectedTrade.placementRate}</div>
                <div><strong>Duration:</strong> {selectedTrade.duration}</div>
              </div>

              <h3>Vertical Career Progression & Higher Education Ladder</h3>
              <div className="ladder-detail-grid">
                {selectedTrade.nsqfPathways.map((p, idx) => (
                  <div key={idx} className="ladder-step-card">
                    <span className="ladder-stage">{p.step} ({p.level})</span>
                    <h4>{p.role}</h4>
                    <p className="ladder-earning">Typical Earnings: <strong>{p.salary}</strong></p>
                  </div>
                ))}
              </div>

              <div className="reassurance-detail-grid">
                <div className="reassurance-detail-box">
                  <h4><FontAwesomeIcon icon={faShieldHalved} /> Job Security & Market Demand</h4>
                  <p>{selectedTrade.parentReassurance.jobSecurity}</p>
                </div>
                <div className="reassurance-detail-box">
                  <h4><FontAwesomeIcon icon={faGraduationCap} /> Higher Education & Degree Eligibility</h4>
                  <p>{selectedTrade.parentReassurance.furtherStudies}</p>
                </div>
                <div className="reassurance-detail-box">
                  <h4><FontAwesomeIcon icon={faArrowTrendUp} /> Social Standing & Dignity of Trade</h4>
                  <p>{selectedTrade.parentReassurance.socialStanding}</p>
                </div>
              </div>

              <div className="modal-actions-footer">
                <Link
                  to="/family-counselling"
                  className="modal-start-btn"
                  onClick={() => setSelectedTrade(null)}
                >
                  <FontAwesomeIcon icon={faComments} /> Launch Family Dialogue on this Trade
                </Link>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedTrade(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
