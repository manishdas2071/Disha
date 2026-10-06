import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faHeadset,
  faLocationDot,
  faArrowTrendUp,
  faCheckCircle,
  faCircleExclamation,
  faFilter,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { adminAnalyticsData } from '../data/vocationalData';

export default function AdminDashboard() {
  const [selectedState, setSelectedState] = useState('All');
  const [escalations, setEscalations] = useState(adminAnalyticsData.liveEscalations);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'districts' | 'escalations'

  const filteredDistricts = selectedState === 'All'
    ? adminAnalyticsData.districtHotspots
    : adminAnalyticsData.districtHotspots.filter(d => d.state === selectedState);

  const handleUpdateStatus = (id, newStatus) => {
    setEscalations(prev =>
      prev.map(item => item.id === id ? { ...item, status: newStatus } : item)
    );
  };

  return (
    <div className="admin-page-container">
      {/* Header */}
      <div className="admin-header">
        <div className="header-badge admin-badge">
          <FontAwesomeIcon icon={faChartLine} /> Scheme Administration & Intelligence
        </div>
        <h1>Vocational Enrolment & Family Resistance Intelligence</h1>
        <p>
          Real-time analytics for National & State Skill Development Missions. Tracking where parental resistance is concentrated, underlying causes, and sentiment shifts achieved through AI joint counselling.
        </p>

        {/* Tab Switcher */}
        <div className="admin-tabs-bar">
          <button
            className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Objections
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'districts' ? 'active' : ''}`}
            onClick={() => setActiveTab('districts')}
          >
            District Resistance Hotspots
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'escalations' ? 'active' : ''}`}
            onClick={() => setActiveTab('escalations')}
          >
            Live Human Escalations ({escalations.filter(e => e.status !== 'Enrolled in ITI').length})
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="admin-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-wrap primary">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="kpi-content">
            <span className="kpi-title">Total Joint Sessions</span>
            <span className="kpi-number">{adminAnalyticsData.totalSessions.toLocaleString()}</span>
            <span className="kpi-trend positive">+18% this month</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap success">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
          <div className="kpi-content">
            <span className="kpi-title">Parental Sentiment Shift</span>
            <span className="kpi-number">{adminAnalyticsData.positiveSentimentShift}</span>
            <span className="kpi-trend positive">Moved from Resistant to Reassured</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap warning">
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <div className="kpi-content">
            <span className="kpi-title">Human Escalation Rate</span>
            <span className="kpi-number">{adminAnalyticsData.escalatedToCounsellor}</span>
            <span className="kpi-trend neutral">Requiring human counsellor intervention</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap info">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="kpi-content">
            <span className="kpi-title">Geographic Coverage</span>
            <span className="kpi-number">{adminAnalyticsData.statesCovered} States</span>
            <span className="kpi-trend neutral">64 Target Rural & Semi-urban Districts</span>
          </div>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="admin-overview-section">
          {/* Objections Breakdown */}
          <div className="admin-analytics-row">
            <div className="analytics-card objection-card">
              <h3>Primary Drivers of Family Resistance</h3>
              <p className="card-subtext">
                What causes parents to veto vocational training over general academic streams?
              </p>

              <div className="objection-bars-list">
                {adminAnalyticsData.objectionDistribution.map((item, idx) => (
                  <div key={idx} className="objection-bar-item">
                    <div className="bar-labels">
                      <span className="objection-name">{item.name}</span>
                      <span className="objection-stats">
                        <strong>{item.percentage}%</strong> ({item.count.toLocaleString()} families)
                      </span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="objection-trend">{item.trend} through verified data rebuttals</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Shift Funnel */}
            <div className="analytics-card funnel-card">
              <h3>Family Sentiment Transformation Funnel</h3>
              <p className="card-subtext">
                Tracking how parental skepticism diminishes across the counselling stages.
              </p>

              <div className="funnel-stages-list">
                {adminAnalyticsData.sentimentTimeline.map((stage, idx) => (
                  <div key={idx} className="funnel-stage-box">
                    <div className="stage-title">{stage.stage}</div>
                    <div className="sentiment-distribution-bar">
                      <div
                        className="segment resistant"
                        style={{ width: `${stage.resistant}%` }}
                        title={`Resistant: ${stage.resistant}%`}
                      >
                        {stage.resistant}% Resistant
                      </div>
                      <div
                        className="segment neutral"
                        style={{ width: `${stage.neutral}%` }}
                        title={`Neutral: ${stage.neutral}%`}
                      >
                        {stage.neutral}% Neutral
                      </div>
                      <div
                        className="segment supportive"
                        style={{ width: `${stage.supportive}%` }}
                        title={`Supportive: ${stage.supportive}%`}
                      >
                        {stage.supportive}% Supportive
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="funnel-insight-note">
                <FontAwesomeIcon icon={faCheckCircle} /> Over <strong>72%</strong> of initially skeptical parents express support for vocational enrolment once exposed to localized placement rates and lateral B.Tech entry data.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'districts' && (
        <div className="districts-table-container">
          <div className="table-controls-bar">
            <h3>District Resistance Hotspots</h3>
            <div className="filter-wrapper">
              <FontAwesomeIcon icon={faFilter} />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="state-filter-select"
              >
                <option value="All">All States</option>
                <option value="Assam">Assam</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
            </div>
          </div>

          <table className="admin-data-table">
            <thead>
              <tr>
                <th>District & State</th>
                <th>Joint Sessions</th>
                <th>Dominant Parental Concern</th>
                <th>Sentiment Shift Rate</th>
                <th>Human Escalations</th>
              </tr>
            </thead>
            <tbody>
              {filteredDistricts.map((d, index) => (
                <tr key={index}>
                  <td>
                    <strong>{d.district}</strong>, <span className="state-tag">{d.state}</span>
                  </td>
                  <td>{d.sessions.toLocaleString()}</td>
                  <td>
                    <span className="concern-pill">{d.topResistance}</span>
                  </td>
                  <td>
                    <span className="shift-pill">{d.shiftRate} Reassured</span>
                  </td>
                  <td>
                    <span className="esc-count">{d.escalations} Cases</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'escalations' && (
        <div className="escalations-queue-container">
          <div className="table-controls-bar">
            <h3>Live Human Escalation Cases</h3>
            <p className="queue-desc">Cases where automated AI counselling requested personal human intervention.</p>
          </div>

          <div className="escalations-grid">
            {escalations.map((esc) => (
              <div key={esc.id} className="escalation-ticket-card">
                <div className="ticket-top">
                  <span className="ticket-id">{esc.id}</span>
                  <span className={`status-tag ${esc.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {esc.status}
                  </span>
                </div>

                <div className="ticket-body">
                  <h4>Parent: {esc.parentName}</h4>
                  <div className="ticket-meta">
                    <div><strong>Learner:</strong> {esc.candidate}</div>
                    <div><strong>District:</strong> {esc.district}</div>
                    <div><strong>Target Trade:</strong> {esc.preferredTrade}</div>
                  </div>

                  <div className="ticket-concern">
                    <strong>Primary Objection:</strong>
                    <p>"{esc.mainConcern}"</p>
                  </div>
                </div>

                <div className="ticket-actions">
                  <button
                    className="action-btn call"
                    onClick={() => handleUpdateStatus(esc.id, 'Assigned to Counsellor')}
                  >
                    Assign Counsellor
                  </button>
                  <button
                    className="action-btn resolve"
                    onClick={() => handleUpdateStatus(esc.id, 'Enrolled in ITI')}
                  >
                    Mark Enrolled
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
