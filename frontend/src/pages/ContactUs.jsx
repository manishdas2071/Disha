import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faHeadset,
  faCheckCircle,
  faShieldHalved,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  const [activeFormTab, setActiveFormTab] = useState('counsellor'); // 'counsellor' | 'general'

  // Counsellor Escalation Form State
  const [counsellorData, setCounsellorData] = useState({
    parentName: '',
    learnerName: '',
    phone: '',
    district: '',
    state: 'Assam',
    language: 'Hindi',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    primaryConcern: ''
  });
  const [counsellorSuccess, setCounsellorSuccess] = useState(false);

  // General Inquiry Form State
  const [generalData, setGeneralData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [generalSuccess, setGeneralSuccess] = useState(false);

  const handleCounsellorSubmit = (e) => {
    e.preventDefault();
    setCounsellorSuccess(true);
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setGeneralSuccess(true);
    setGeneralData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      
      <div className="contact-header">
        <div className="header-badge">
          <FontAwesomeIcon icon={faHeadset} /> Certified Human Escalation Path
        </div>
        <h1>Speak with a Certified Human Counsellor</h1>
        <p>
          When automated AI guidance needs personal human reassurance, connect directly with our accredited vocational counsellors in your regional language.
        </p>
      </div>

      {/* Tabs */}
      <div className="contact-tab-selector">
        <button
          className={`tab-btn ${activeFormTab === 'counsellor' ? 'active' : ''}`}
          onClick={() => setActiveFormTab('counsellor')}
        >
          <FontAwesomeIcon icon={faHeadset} /> Request Human Counsellor Callback (Escalation)
        </button>
        <button
          className={`tab-btn ${activeFormTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveFormTab('general')}
        >
          <FontAwesomeIcon icon={faEnvelope} /> General Inquiries & Feedback
        </button>
      </div>

      <div className="contact-content-grid">
        
        {/* Info Column */}
        <div className="contact-info-section">
          <h2>Official Support Desk</h2>
          <p>Assisting families, ITI instructors, and district scheme coordinators across India.</p>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h3>Skill India National Helpline</h3>
              <p><strong>1800-123-9626</strong> (Toll Free)</p>
              <small>Mon - Sat (9:00 AM - 6:00 PM IST)</small>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h3>Email Support</h3>
              <p>disha.guidance@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faBuildingColumns} className="contact-icon" />
            <div>
              <h3>Project Regional Hub</h3>
              <p>Dhemaji Engineering College, Assam, India</p>
            </div>
          </div>

          <div className="reassurance-side-card">
            <h4><FontAwesomeIcon icon={faShieldHalved} /> Human Counsellor Guarantee</h4>
            <p>
              Every family request is routed to a trained counsellor proficient in your local language (Assamese, Hindi, Bengali, etc.). We address parent concerns with empathy, verified district ITI statistics, and guaranteed follow-up.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-section">
          {activeFormTab === 'counsellor' ? (
            counsellorSuccess ? (
              <div className="form-success-box">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h2>Callback Request Scheduled!</h2>
                <p>
                  Reference ID: <strong>#ESC-{Math.floor(1000 + Math.random() * 9000)}</strong>
                </p>
                <p>
                  A certified regional career counsellor has been assigned to your request for <strong>{counsellorData.parentName}</strong> and <strong>{counsellorData.learnerName}</strong>. You will receive a phone call during <strong>{counsellorData.preferredTime}</strong>.
                </p>
                <button
                  className="reset-form-btn"
                  onClick={() => setCounsellorSuccess(false)}
                >
                  Book Another Callback
                </button>
              </div>
            ) : (
              <form onSubmit={handleCounsellorSubmit} className="contact-form">
                <h3>Request Free Joint Family Counselling Session</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Parent / Guardian Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rameshwar Hazarika"
                      value={counsellorData.parentName}
                      onChange={(e) => setCounsellorData({ ...counsellorData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Learner / Student Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Nayan Hazarika"
                      value={counsellorData.learnerName}
                      onChange={(e) => setCounsellorData({ ...counsellorData, learnerName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number (Mobile) *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={counsellorData.phone}
                      onChange={(e) => setCounsellorData({ ...counsellorData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Preferred Language *</label>
                    <select
                      value={counsellorData.language}
                      onChange={(e) => setCounsellorData({ ...counsellorData, language: e.target.value })}
                    >
                      <option value="Hindi">हिंदी (Hindi)</option>
                      <option value="Assamese">অসমীয়া (Assamese)</option>
                      <option value="Bengali">বাংলা (Bengali)</option>
                      <option value="English">English</option>
                      <option value="Bodo">Bodo</option>
                      <option value="Tamil">தமிழ் (Tamil)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>District & State *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Dhemaji, Assam"
                      value={counsellorData.district}
                      onChange={(e) => setCounsellorData({ ...counsellorData, district: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Preferred Callback Window *</label>
                    <select
                      value={counsellorData.preferredTime}
                      onChange={(e) => setCounsellorData({ ...counsellorData, preferredTime: e.target.value })}
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                      <option value="Evening (05:00 PM - 07:00 PM)">Evening (05:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Primary Concern or Objection *</label>
                  <textarea 
                    rows="3" 
                    required 
                    placeholder="Briefly describe parental doubts (e.g. relatives opposing ITI, confusion regarding B.A. vs electrician, hostel safety for daughter)..."
                    value={counsellorData.primaryConcern}
                    onChange={(e) => setCounsellorData({ ...counsellorData, primaryConcern: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Escalation & Schedule Call
                </button>
              </form>
            )
          ) : (
            generalSuccess ? (
              <div className="form-success-box">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button
                  className="reset-form-btn"
                  onClick={() => setGeneralSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="contact-form">
                <h3>Send Us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={generalData.name} 
                    onChange={(e) => setGeneralData({ ...generalData, name: e.target.value })} 
                    required 
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={generalData.email} 
                    onChange={(e) => setGeneralData({ ...generalData, email: e.target.value })} 
                    required 
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={generalData.subject} 
                    onChange={(e) => setGeneralData({ ...generalData, subject: e.target.value })} 
                    required 
                    placeholder="How can we assist you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={generalData.message} 
                    onChange={(e) => setGeneralData({ ...generalData, message: e.target.value })} 
                    required 
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )
          )}
        </div>

      </div>
    </div>
  );
}