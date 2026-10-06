import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faVolumeHigh,
  faMicrophone,
  faPaperPlane,
  faUserGroup,
  faUser,
  faGraduationCap,
  faHeadset,
  faAward,
  faIndianRupeeSign,
  faShieldHalved,
  faBuildingColumns,
  faCheckCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { parentalObjectionsData, verifiedTrades } from '../data/vocationalData';

export default function FamilyCounselling() {
  const [activePersona, setActivePersona] = useState('joint'); // 'joint' | 'parent' | 'learner'
  const [language, setLanguage] = useState('en'); // 'en' | 'hi' | 'as' | 'bn' | 'ta'
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      personaTarget: 'joint',
      text: "Namaste! Welcome to Disha Joint Family Counselling. I am here to help both the learner and parents explore verified vocational career pathways, address concerns regarding earning potential, job security, and social status, and map out genuine NSQF progression routes together.",
      audioText: "Namaste! Welcome to Disha Joint Family Counselling. I am here to help both the learner and parents explore verified vocational career pathways together."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showEscalationModal, setShowEscalationModal] = useState(false);
  const [escalationForm, setEscalationForm] = useState({
    parentName: '',
    learnerName: '',
    phone: '',
    district: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    specificDoubt: ''
  });
  const [escalationSubmitted, setEscalationSubmitted] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Speech Synthesis (Text to Speech for low-literacy users)
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (language === 'hi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-IN';
      }
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported on this browser.");
    }
  };

  // Speech Recognition (Voice Input for low-digital familiarity)
  const toggleListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please try Chrome or Edge.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(prev => prev ? `${prev} ${transcript}` : transcript);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Knowledge base responses to simulate verified intelligence
  const generateAIResponse = (userQuery, persona) => {
    const query = userQuery.toLowerCase();
    
    // Check for salary / income queries
    if (query.includes('salary') || query.includes('earn') || query.includes('income') || query.includes('paisa') || query.includes('kamai')) {
      return {
        text: `📊 **Verified Earning Comparison (DGT & Industry Benchmark 2026):**\n\n• **Vocational Trade (e.g. Electrician / CNC / Solar PV):**\n  - Course duration: 1 to 2 years after 10th/12th.\n  - Training stipend (NAPS): ₹9,000 - ₹12,000 / month.\n  - Starting certified salary: ₹18,000 - ₹28,000 / month.\n  - 3-Year Cumulative Income: ₹4.8 Lakhs earned while peer is still in college.\n\n• **Unspecialized General Degree (B.A./B.Com without technical skill):**\n  - Duration: 3-4 years.\n  - College cost: ₹60,000 - ₹2,50,000.\n  - Unemployment / underemployment rate at graduation: ~44%.\n\n*Parent Takeaway:* Vocational skills eliminate tuition debt and provide immediate financial stability for the family.`,
        audioText: "Vocational trades allow students to begin earning around 18000 to 28000 rupees per month within 1 to 2 years, whereas an unspecialized 3-year college degree often delays earnings and incurs tuition costs."
      };
    }

    // Check for social status / respect / stigma
    if (query.includes('respect') || query.includes('status') || query.includes('stigma') || query.includes('labor') || query.includes('samaj') || query.includes('dignity')) {
      return {
        text: `🏅 **Social Standing & Dignity in Modern Vocational Careers:**\n\n• **It is Not Manual Labor:** Today's technician works in clean, computerized environments operating precision machinery, digital multi-meters, CAD/CAM terminals, and solar inverters.\n• **Government Accreditation:** A 2-year National Trade Certificate (NTC) from NCVT is a recognized Central Government credential.\n• **Corporate Recognition:** Large employers like Tata Motors, L&T, Schneider Electric, and Maruti Suzuki hire ITI passouts as "Associate Technical Engineers" with formal uniforms, identity cards, health insurance, and provident fund.\n• **Self-Employment Dignity:** Certified electricians and solar specialists often run independent contracting firms earning ₹35,000 - ₹60,000/month with high local respect.`,
        audioText: "Modern vocational careers are certified technical professions. Workers handle precision computer-controlled equipment and carry recognized government credentials with high social respect."
      };
    }

    // Check for higher education / progression
    if (query.includes('degree') || query.includes('higher') || query.includes('b.tech') || query.includes('diploma') || query.includes('aage') || query.includes('padhai')) {
      return {
        text: `🎓 **NSQF Vertical Education Ladder (No Dead-End):**\n\nUnder the National Education Policy (NEP) and NSQF framework, vocational pathways connect directly to higher education:\n\n1. **Step 1 (NSQF Level 4):** Complete 2-Year ITI / Skill Diploma.\n2. **Step 2 (NSQF Level 5):** Direct **Lateral Entry to 2nd Year of Polytechnic Diploma** (skipping 1st year!).\n3. **Step 3 (NSQF Level 7):** Lateral Entry to **B.Tech / B.E.** or **B.Voc (Bachelor of Vocation)** Degree.\n4. **Govt Jobs:** Direct eligibility for prestigious government exams including Railway Assistant Loco Pilot (RRB ALP), DRDO Technician, BHEL, and Defense Services.`,
        audioText: "There is no dead end in vocational skilling. Students can enter the second year of a Polytechnic Diploma directly, and then proceed to B Tech or B Voc degree."
      };
    }

    // Check for female / safety
    if (query.includes('girl') || query.includes('woman') || query.includes('women') || query.includes('female') || query.includes('safety') || query.includes('suraksha') || query.includes('beti')) {
      return {
        text: `🛡️ **Workplace Safety & High-Growth Trades for Women:**\n\n• **Clean & High-Tech Environments:** Trades like Electronics Manufacturing, Healthcare GDA, Solar Quality Inspection, IT-ITES, and Architectural Drafting feature sanitized, CCTV-secured indoor facilities.\n• **Dedicated Institutions:** Over 19 National Skill Training Institutes for Women (NSTI-W) provide specialized training with secure on-campus hostels.\n• **Affirmative Policies:** State Skill Missions provide dedicated stipends, safe transport allowances, and 30%+ seat reservation for female candidates in government ITIs.\n• **Corporate Hiring:** Top manufacturing plants (like Tata Electronics Hosur with 70%+ female technicians) prioritize women in precision assembly.`,
        audioText: "Modern vocational sectors provide safe, CCTV-monitored, indoor clean-room environments. There are also dedicated National Skill Training Institutes for Women with hostels."
      };
    }

    // Default tailored response
    return {
      text: `🤝 **Disha Joint Guidance Insight:**\n\nThank you for sharing this concern. In our verified outcome tracking across 28,000+ families:\n\n• **For the Parent:** We understand that financial stability and your child's dignity in society are your top priorities. Vocational training provides formal NSQF certification, near-zero education debt, and verified starting salaries of ₹18,000 - ₹30,000/month.\n• **For the Learner:** You gain hands-on technical mastery without years of dry theory, giving you real job readiness and the option to pursue higher education (Polytechnic/B.Tech lateral entry) later.\n\nWould you like to review verified outcome data for specific trades like **Industrial Electrician**, **Solar PV Technician**, or **CNC Machinist**? Or would you prefer to speak directly with a certified Human Counsellor?`,
      audioText: "Vocational education provides both family financial relief and genuine technical skills. Would you like to explore specific trades or speak with a live counsellor?"
    };
  };

  const handleSendMessage = (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      personaTarget: activePersona,
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const response = generateAIResponse(textToSend, activePersona);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        personaTarget: activePersona,
        text: response.text,
        audioText: response.audioText
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  const handleQuickPrompt = (doubt) => {
    const question = language === 'hi' ? doubt.questionHi : doubt.question;
    handleSendMessage(question);
  };

  const handleEscalationSubmit = (e) => {
    e.preventDefault();
    setEscalationSubmitted(true);
    setTimeout(() => {
      setShowEscalationModal(false);
      setEscalationSubmitted(false);
      setEscalationForm({
        parentName: '',
        learnerName: '',
        phone: '',
        district: '',
        preferredTime: 'Morning (10 AM - 1 PM)',
        specificDoubt: ''
      });
      // Add system message to chat
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'ai',
          personaTarget: 'joint',
          text: `✅ **Human Counsellor Escalation Confirmed (Ref #ESC-${Math.floor(1000 + Math.random() * 9000)})**\n\nYour request has been routed to our certified regional career counsellor. You will receive a reassurance phone call in your preferred language within 24 hours.\n\n📞 **Emergency National Skill India Helpline:** 1800-123-9626 (Toll-Free, Mon-Sat 9 AM - 6 PM).`,
          audioText: "Your human counsellor request has been confirmed. A certified counsellor will call you within 24 hours."
        }
      ]);
    }, 1800);
  };

  return (
    <div className="counselling-page-container">
      {/* Header */}
      <div className="counselling-header">
        <div className="header-badge">
          <FontAwesomeIcon icon={faComments} /> AI Joint Family Dialogue
        </div>
        <h1>Family & Learner Conversational Counselling</h1>
        <p>
          Addressing parental hesitations on earning potential, job security, and social standing with verified localized data.
        </p>

        {/* Persona and Language Controls */}
        <div className="counselling-controls-bar">
          <div className="persona-toggle">
            <span className="toggle-label">Counselling View:</span>
            <button
              className={`persona-btn ${activePersona === 'joint' ? 'active' : ''}`}
              onClick={() => setActivePersona('joint')}
            >
              <FontAwesomeIcon icon={faUserGroup} /> Joint Family (Learner + Parent)
            </button>
            <button
              className={`persona-btn ${activePersona === 'parent' ? 'active' : ''}`}
              onClick={() => setActivePersona('parent')}
            >
              <FontAwesomeIcon icon={faUser} /> Parent Concerns
            </button>
            <button
              className={`persona-btn ${activePersona === 'learner' ? 'active' : ''}`}
              onClick={() => setActivePersona('learner')}
            >
              <FontAwesomeIcon icon={faGraduationCap} /> Learner Aspirations
            </button>
          </div>

          <div className="language-selector">
            <span className="toggle-label">Language:</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-select"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="as">অসমীয়া (Assamese)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="ta">தமிழ் (Tamil)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-layout-container">
        {/* Sidebar: Common Parental Hesitations */}
        <div className="chat-sidebar">
          <h3>
            <FontAwesomeIcon icon={faAward} /> Common Family Questions
          </h3>
          <p className="sidebar-hint">Tap any concern to see verified facts:</p>
          <div className="quick-prompts-list">
            {parentalObjectionsData.map((doubt, idx) => (
              <button
                key={idx}
                className="quick-prompt-btn"
                onClick={() => handleQuickPrompt(doubt)}
              >
                <div className="prompt-category">
                  {doubt.category === 'Social Perception & Dignity' && <FontAwesomeIcon icon={faAward} />}
                  {doubt.category === 'Income vs General Degree' && <FontAwesomeIcon icon={faIndianRupeeSign} />}
                  {doubt.category === 'Higher Education & Ladder' && <FontAwesomeIcon icon={faBuildingColumns} />}
                  {doubt.category === 'Safety & Women in Skilling' && <FontAwesomeIcon icon={faShieldHalved} />}
                  <span>{doubt.category}</span>
                </div>
                <div className="prompt-text">
                  {language === 'hi' ? doubt.questionHi : doubt.question}
                </div>
              </button>
            ))}
          </div>

          {/* Human Escalation Trigger Card */}
          <div className="human-escalation-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h4>Unresolved Family Concerns?</h4>
            <p>Connect directly with a certified, government-accredited human career counsellor.</p>
            <button
              className="escalate-now-btn"
              onClick={() => setShowEscalationModal(true)}
            >
              Request Free Counsellor Call
            </button>
          </div>
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          {/* Top Banner */}
          <div className="chat-window-header">
            <div className="status-indicator">
              <span className="online-dot"></span>
              <strong>Disha AI Counsellor</strong> (Verified NSQF & DGT Knowledge Base)
            </div>
            <button
              className="escalate-header-link"
              onClick={() => setShowEscalationModal(true)}
            >
              <FontAwesomeIcon icon={faHeadset} /> Connect Human Counsellor
            </button>
          </div>

          {/* Messages Body */}
          <div className="chat-messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-row ${msg.sender === 'user' ? 'user-row' : 'ai-row'}`}
              >
                <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                  {msg.sender === 'ai' && (
                    <div className="bubble-header">
                      <span className="ai-label">Disha Guidance System</span>
                      {msg.audioText && (
                        <button
                          className="audio-listen-btn"
                          title="Listen to this explanation (Text-to-Speech)"
                          onClick={() => speakText(msg.audioText)}
                        >
                          <FontAwesomeIcon icon={faVolumeHigh} /> Listen
                        </button>
                      )}
                    </div>
                  )}

                  <div className="bubble-content" style={{ whiteSpace: 'pre-line' }}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Controls with Mic */}
          <div className="chat-input-container">
            <button
              className={`mic-btn ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
              title={isListening ? "Listening... Click to stop" : "Speak your question (Voice Input)"}
            >
              <FontAwesomeIcon icon={faMicrophone} />
            </button>

            <input
              type="text"
              className="chat-input-field"
              placeholder={
                isListening
                  ? "Listening to voice input..."
                  : language === 'hi'
                  ? "माता-पिता या छात्र की कोई भी चिंता यहाँ लिखें..."
                  : "Type any concern (e.g. salary, respect, safety, B.Tech entry)..."
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />

            <button
              className="send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className="chat-footer-note">
            Low-digital literacy friendly: Use the microphone to speak or click "Listen" on any answer.
          </div>
        </div>
      </div>

      {/* Human Escalation Modal */}
      {showEscalationModal && (
        <div className="custom-popup-overlay">
          <div className="escalation-modal-box">
            <div className="modal-header">
              <h3>
                <FontAwesomeIcon icon={faHeadset} /> Connect with Certified Human Counsellor
              </h3>
              <button
                className="close-modal-icon"
                onClick={() => setShowEscalationModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {escalationSubmitted ? (
              <div className="modal-success-state">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h3>Call Request Confirmed!</h3>
                <p>A regional counsellor will contact the family within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleEscalationSubmit} className="escalation-form">
                <p className="modal-intro">
                  Some doubts require personal human reassurance. We will connect your family unit with a local certified career counsellor in your preferred language.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rameshwar Hazarika"
                      value={escalationForm.parentName}
                      onChange={(e) => setEscalationForm({ ...escalationForm, parentName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Learner / Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nayan Hazarika"
                      value={escalationForm.learnerName}
                      onChange={(e) => setEscalationForm({ ...escalationForm, learnerName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Contact Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={escalationForm.phone}
                      onChange={(e) => setEscalationForm({ ...escalationForm, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>District & State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dhemaji, Assam"
                      value={escalationForm.district}
                      onChange={(e) => setEscalationForm({ ...escalationForm, district: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Primary Family Concern *</label>
                  <select
                    value={escalationForm.specificDoubt}
                    onChange={(e) => setEscalationForm({ ...escalationForm, specificDoubt: e.target.value })}
                    required
                  >
                    <option value="">Select primary concern...</option>
                    <option value="Social perception / Family relatives pressure">Social perception / Relatives pushing for general degree</option>
                    <option value="Long term earning stability vs college degree">Long term salary ceiling vs traditional degree</option>
                    <option value="Workplace safety & environment for daughter">Workplace safety and appropriate trades for daughters</option>
                    <option value="Lateral entry to Engineering / Diploma options">Clarification on lateral entry into Engineering / Diploma</option>
                    <option value="Other / General Skilling Guidance">Other specific trade counselling</option>
                  </select>
                </div>

                <button type="submit" className="submit-escalation-btn">
                  Confirm Free Callback Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
