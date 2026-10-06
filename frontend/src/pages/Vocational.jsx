import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function Vocational() {
  const vocationalCareers = [
    {
      id: 'solar-technician',
      title: 'Solar PV Installation & Maintenance Technician',
      nsqf: 'NSQF Level 4',
      desc: 'Master renewable power systems, solar rooftop arrays, and grid inverters with high industrial demand and PM Surya Ghar subsidies.'
    },
    {
      id: 'electrician-technician',
      title: 'Industrial Electrician & Automation Tech',
      nsqf: 'NSQF Level 4',
      desc: 'Central & State ITI certified wireman and electrical automation specialist, with direct lateral entry to Polytechnic Diploma.'
    },
    {
      id: 'cnc-machinist',
      title: 'CNC Precision Machinist & Operator',
      nsqf: 'NSQF Level 4',
      desc: 'Operate advanced computer-numerical-controlled milling and turning centres for aerospace, automotive, and defense hardware.'
    },
    {
      id: 'healthcare-gda',
      title: 'General Duty Healthcare Assistant (GDA)',
      nsqf: 'NSQF Level 4',
      desc: 'Frontline paramedical support in multi-specialty hospitals, emergency wards, and critical patient care units.'
    },
    {
      id: 'drone-technician',
      title: 'Drone Pilot & Service Technician',
      nsqf: 'NSQF Level 4 / 5',
      desc: 'DGCA-certified drone operations, precision agricultural spraying, infrastructure surveillance, and avionics maintenance.'
    },
    {
      id: 'auto-ev-mechatronics',
      title: 'Automotive & Electric Vehicle (EV) Specialist',
      nsqf: 'NSQF Level 4',
      desc: 'Computerized battery management systems, EV drivetrain troubleshooting, and modern automotive diagnostics.'
    }
  ];

  return (
    <div className="stream-page-container">
      <div className="stream-hero vocational-bg">
        <h1>Vocational & Technical Trades</h1>
        <p>
          High-demand, skill-first professional trajectories. Verified starting wages, government NSQF accreditation, and clear lateral pathways to engineering diplomas and degrees.
        </p>
      </div>

      <div className="vocational-hero-actions">
        <Link to="/family-counselling" className="hero-cta-btn">
          <FontAwesomeIcon icon={faComments} /> Address Family Hesitations in AI
        </Link>
        <Link to="/outcomes" className="hero-secondary-btn">
          <FontAwesomeIcon icon={faChartLine} /> View Verified Outcome Data
        </Link>
      </div>

      <h2 className="section-title">Explore High-Growth Vocational Trajectories</h2>

      <div className="career-options-grid">
        {vocationalCareers.map(trade => (
          <div key={trade.id} className="career-card">
            <span className="nsqf-level-chip">{trade.nsqf}</span>
            <h3>{trade.title}</h3>
            <p>{trade.desc}</p>
            <div className="card-btn-group">
              <Link to="/outcomes" className="explore-btn">
                Outcome & Salary Data →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
