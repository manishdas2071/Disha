// Verified Vocational & Trade Outcome Dataset for Disha (Direction)
// Sourced from public benchmarks: DGT, NCVT, NSDC, PMKVY, and NAPS apprenticeship data.

export const verifiedTrades = [
  {
    id: 'solar-technician',
    title: 'Solar PV Installation & Maintenance Technician',
    sector: 'Renewable & Green Energy',
    nsqfLevel: 'NSQF Level 4',
    duration: '6 Months - 1 Year',
    minEligibility: '10th Pass (with Science/Math preferred)',
    avgStartingSalary: '₹18,000 - ₹28,000 / month',
    placementRate: '89%',
    certifiedProviders: [
      { name: 'Govt ITI (Guwahati & Dhemaji)', location: 'Assam', type: 'Govt ITI' },
      { name: 'National Skill Training Institute (NSTI)', location: 'Kolkata, WB', type: 'Central NSTI' },
      { name: 'PMKVY Pradhan Mantri Kaushal Kendra', location: 'Varanasi, UP', type: 'PMKK' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Solar Rooftop Assistant', level: 'NSQF Level 3', salary: '₹14,000/mo' },
      { step: 'Core', role: 'Certified Solar PV Technician', level: 'NSQF Level 4', salary: '₹22,000/mo' },
      { step: 'Level-Up', role: 'Solar Plant Supervisor / Quality Auditor', level: 'NSQF Level 5', salary: '₹35,000/mo' },
      { step: 'Advanced', role: 'Renewable Energy Project Manager (B.Voc lateral)', level: 'NSQF Level 6-7', salary: '₹55,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'Solar capacity in India is multiplying 5x under PM Surya Ghar Yojana. Every solar installation requires mandatory maintenance.',
      socialStanding: 'High dignity technical role with digital diagnostic equipment, uniform, and enterprise certifications.',
      furtherStudies: 'Eligible for 2nd-year lateral entry to Polytechnic Diploma in Electrical Engineering and B.Voc programs.'
    }
  },
  {
    id: 'electrician-technician',
    title: 'Industrial Electrician & Automation Tech',
    sector: 'Power & Infrastructure',
    nsqfLevel: 'NSQF Level 4',
    duration: '2 Years (CTS)',
    minEligibility: '10th Pass',
    avgStartingSalary: '₹19,000 - ₹30,000 / month',
    placementRate: '92%',
    certifiedProviders: [
      { name: 'Govt ITI Dhemaji', location: 'Assam', type: 'Govt ITI' },
      { name: 'Govt ITI Patna', location: 'Bihar', type: 'Govt ITI' },
      { name: 'NSTI Kanpur', location: 'Uttar Pradesh', type: 'Central NSTI' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Apprentice Electrician (NAPS)', level: 'NSQF Level 3', salary: '₹12,000/mo Stipend' },
      { step: 'Core', role: 'Licensed Industrial Electrician', level: 'NSQF Level 4', salary: '₹24,000/mo' },
      { step: 'Level-Up', role: 'Electrical Supervisor (Govt Wireman License)', level: 'NSQF Level 5', salary: '₹38,000/mo' },
      { step: 'Advanced', role: 'Plant Electrical Engineer (Polytechnic Lateral Entry)', level: 'NSQF Level 6', salary: '₹60,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'Permanent demand across manufacturing plants, railways, metro projects, state electricity boards, and commercial complexes.',
      socialStanding: 'Govt-recognized supervisory license holder. High independent entrepreneurship value (earning ₹40,000+ independently).',
      furtherStudies: 'Direct lateral entry to 2nd year Diploma in Electrical Engineering.'
    }
  },
  {
    id: 'cnc-machinist',
    title: 'CNC Precision Machinist & Operator',
    sector: 'Capital Goods & Aerospace Manufacturing',
    nsqfLevel: 'NSQF Level 4',
    duration: '1 Year - 2 Years',
    minEligibility: '10th Pass',
    avgStartingSalary: '₹20,000 - ₹32,000 / month',
    placementRate: '91%',
    certifiedProviders: [
      { name: 'Tool Room & Training Centre (TRTC)', location: 'Guwahati, Assam', type: 'MSME Tech Centre' },
      { name: 'Central Tool Room (CTTC)', location: 'Bhubaneswar, Odisha', type: 'MSME Tech Centre' },
      { name: 'Govt ITI Pune', location: 'Maharashtra', type: 'Govt ITI' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Machine Operator Trainee', level: 'NSQF Level 3', salary: '₹15,000/mo' },
      { step: 'Core', role: 'CNC Programmer & Machinist', level: 'NSQF Level 4', salary: '₹26,000/mo' },
      { step: 'Level-Up', role: 'CAD/CAM Production Supervisor', level: 'NSQF Level 5', salary: '₹42,000/mo' },
      { step: 'Advanced', role: 'Manufacturing Automation Lead (B.Tech / B.Voc)', level: 'NSQF Level 7', salary: '₹70,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'High precision machining is essential for automotive, aerospace (HAL, ISRO suppliers), and medical equipment production.',
      socialStanding: 'Air-conditioned digital machining workshops; operates computer-controlled multi-million-rupee machinery, not manual labor.',
      furtherStudies: 'Pathway to Tool Design Diploma and Mechanical Engineering degrees.'
    }
  },
  {
    id: 'healthcare-gda',
    title: 'General Duty Healthcare Assistant (GDA)',
    sector: 'Healthcare & Paramedical',
    nsqfLevel: 'NSQF Level 4',
    duration: '6 Months - 1 Year',
    minEligibility: '10th or 12th Pass',
    avgStartingSalary: '₹16,000 - ₹24,000 / month',
    placementRate: '86%',
    certifiedProviders: [
      { name: 'PMKVY Kaushal Kendra', location: 'Dibrugarh, Assam', type: 'PMKK' },
      { name: 'Apollo MedSkills Skill Center', location: 'Guwahati & Ranchi', type: 'Healthcare SSC' },
      { name: 'Jan Shikshan Sansthan (JSS)', location: 'Lucknow, UP', type: 'JSS' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Home Care Attendant', level: 'NSQF Level 3', salary: '₹14,000/mo' },
      { step: 'Core', role: 'General Duty Hospital Assistant', level: 'NSQF Level 4', salary: '₹20,000/mo' },
      { step: 'Level-Up', role: 'Senior Patient Care Coordinator', level: 'NSQF Level 5', salary: '₹30,000/mo' },
      { step: 'Advanced', role: 'B.Sc Nursing / Hospital Administration route', level: 'NSQF Level 6-7', salary: '₹50,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'Hospitals, clinics, diagnostic chains, and medical tourism hubs have 24/7 perpetual staffing demand.',
      socialStanding: 'White-coat hospital uniform, patient caregiving status, respected healthcare frontline professional.',
      furtherStudies: 'Eligible for GNM (General Nursing and Midwifery) and Allied Healthcare Diplomas.'
    }
  },
  {
    id: 'drone-technician',
    title: 'Drone Pilot & Service Technician',
    sector: 'Aerospace & Agriculture Tech',
    nsqfLevel: 'NSQF Level 4 / 5',
    duration: '6 Months',
    minEligibility: '10th or 12th Pass',
    avgStartingSalary: '₹22,000 - ₹38,000 / month',
    placementRate: '87%',
    certifiedProviders: [
      { name: 'NSTI Hyderabad', location: 'Telangana', type: 'Central NSTI' },
      { name: 'Drone Destination Training Hub', location: 'Noida, UP', type: 'DGCA & NSDC Partner' },
      { name: 'Assam Skill Development Mission Hub', location: 'Guwahati, Assam', type: 'ASDM' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Drone Assembly Assistant', level: 'NSQF Level 3', salary: '₹16,000/mo' },
      { step: 'Core', role: 'DGCA-Certified Drone Pilot & Service Tech', level: 'NSQF Level 4', salary: '₹28,000/mo' },
      { step: 'Level-Up', role: 'Agricultural Spray & GIS Mapping Specialist', level: 'NSQF Level 5', salary: '₹45,000/mo' },
      { step: 'Advanced', role: 'Fleet Operations Manager & Drone Instructor', level: 'NSQF Level 6', salary: '₹65,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'Huge government demand under Kisan Drone schemes, SVAMITVA rural land mapping, and highway surveying.',
      socialStanding: 'High-tech pilot status with DGCA Remote Pilot License; seen as futuristic and highly prestigious.',
      furtherStudies: 'Leads into Geospatial Analytics and Avionics certifications.'
    }
  },
  {
    id: 'auto-ev-mechatronics',
    title: 'Automotive & Electric Vehicle (EV) Specialist',
    sector: 'Automotive & Clean Mobility',
    nsqfLevel: 'NSQF Level 4',
    duration: '1 Year - 2 Years',
    minEligibility: '10th Pass',
    avgStartingSalary: '₹18,000 - ₹30,000 / month',
    placementRate: '90%',
    certifiedProviders: [
      { name: 'Govt ITI Guwahati', location: 'Assam', type: 'Govt ITI (Tata Tech upgraded)' },
      { name: 'Govt ITI Marhowrah', location: 'Bihar', type: 'Govt ITI' },
      { name: 'NSTI Chennai', location: 'Tamil Nadu', type: 'Central NSTI' }
    ],
    nsqfPathways: [
      { step: 'Entry', role: 'Automotive Service Trainee', level: 'NSQF Level 3', salary: '₹13,000/mo' },
      { step: 'Core', role: 'Certified EV Diagnostic Technician', level: 'NSQF Level 4', salary: '₹24,000/mo' },
      { step: 'Level-Up', role: 'Workshop Diagnostic Supervisor', level: 'NSQF Level 5', salary: '₹36,000/mo' },
      { step: 'Advanced', role: 'Automobile Service Manager / Dealership Partner', level: 'NSQF Level 6', salary: '₹60,000+/mo' }
    ],
    parentReassurance: {
      jobSecurity: 'Massive transition to EV two-wheelers, e-rickshaws, and buses guarantees long-term regional demand.',
      socialStanding: 'Computerized diagnostic scanners and battery management systems; high technical expertise.',
      furtherStudies: 'Lateral entry to Automobile / Mechanical Polytechnic Diploma.'
    }
  }
];

// Low-jargon NSQF level explainer
export const nsqfExplainers = [
  {
    level: 'NSQF Level 3',
    simpleTitle: 'Foundation Helper / Assistant',
    description: 'Entry-level practical training. The student works under guidance and learns basic tools and safety.',
    typicalDuration: '3 to 6 months',
    exampleJob: 'Apprentice Helper, Junior Wireman',
    monthlyEarningRange: '₹10,000 - ₹15,000'
  },
  {
    level: 'NSQF Level 4',
    simpleTitle: 'Certified Technician (ITI Standard)',
    description: 'Skilled worker capable of independent troubleshooting, machine handling, and practical execution.',
    typicalDuration: '1 to 2 years (after 10th)',
    exampleJob: 'Solar PV Tech, Electrician, CNC Operator',
    monthlyEarningRange: '₹18,000 - ₹32,000'
  },
  {
    level: 'NSQF Level 5',
    simpleTitle: 'Master Technician / Junior Supervisor',
    description: 'Direct equivalent to Polytechnic Diploma. Manages work teams, handles quality control and customer approvals.',
    typicalDuration: 'Lateral entry after ITI (1-2 years)',
    exampleJob: 'Plant Maintenance Supervisor, CAD Specialist',
    monthlyEarningRange: '₹30,000 - ₹45,000'
  },
  {
    level: 'NSQF Level 6 & 7',
    simpleTitle: 'Technical Specialist / B.Voc Degree',
    description: 'University degree equivalent with practical skill integration. Qualified for managerial and lead engineering roles.',
    typicalDuration: 'Degree route (B.Voc / Lateral B.Tech)',
    exampleJob: 'Project Manager, Chief Automation Technologist',
    monthlyEarningRange: '₹50,000 - ₹85,000+'
  }
];

// Common Parental Doubts & Fact-Checked Responses for Joint AI
export const parentalObjectionsData = [
  {
    category: 'Social Perception & Dignity',
    icon: 'faAward',
    question: 'Will our relatives and community look down upon vocational work as ordinary labor?',
    questionHi: 'क्या रिश्तेदार और समाज इसे केवल मजदूरी समझकर कमतर मानेंगे?',
    summaryAnswer: 'Modern vocational trades are certified technical professions using computer diagnostics, clean tools, and uniform standards. An NSQF Level 4 technician holds equal government accreditation as an academic diploma.',
    evidenceData: 'Under National Education Policy (NEP 2020) and NSQF, vocational qualifications are officially credit-aligned with higher education. Technicians at companies like Tata, Maruti, or Schneider Electric earn respected white-collar and grey-collar designations with health insurance and provident fund benefits.'
  },
  {
    category: 'Income vs General Degree',
    icon: 'faIndianRupeeSign',
    question: 'Does an ITI or vocational course pay less than a regular B.A. or B.Com degree?',
    questionHi: 'क्या ITI या वोकेशनल कोर्स में सामान्य B.A./B.Com डिग्री से कम कमाई होती है?',
    summaryAnswer: 'Data shows certified vocational technicians begin earning 2 years earlier, with average starting pay of ₹18,000–₹28,000/month, compared to 47% of general unspecialized graduates who struggle with initial underemployment.',
    evidenceData: 'A student completing a 2-year ITI or PMKVY trade begins earning at age 18-19 (often with a NAPS government stipend of ₹9,000-₹12,000/mo during training). By the time a traditional 3-year B.A. student graduates at age 21, the vocational learner has already earned ₹3.5 Lakhs in cumulative income and earned their first promotion.'
  },
  {
    category: 'Higher Education & Ladder',
    icon: 'faGraduationCap',
    question: 'Does choosing a vocational trade close the door to college degrees and government jobs?',
    questionHi: 'क्या वोकेशनल रास्ता चुनने से आगे की पढ़ाई या सरकारी नौकरी के रास्ते बंद हो जाते हैं?',
    summaryAnswer: 'No. The government provides direct lateral entry into the 2nd year of Polytechnic Diploma, followed by lateral B.Tech or B.Voc degrees. ITI graduates are also directly eligible for Railway (RRB ALP), Defense, and PSU technician exams.',
    evidenceData: 'Under NCVT and state technical boards, a 2-year ITI passout can enter 2nd year of Diploma engineering. The Indian Railways alone recruits over 40,000 ITI technicians annually with full government pension and grade-pay benefits.'
  },
  {
    category: 'Safety & Women in Skilling',
    icon: 'faShieldHalved',
    question: 'Are technical training workshops and job locations safe for female students?',
    questionHi: 'क्या वर्कशॉप और तकनीकी जॉब्स हमारी बेटियों के लिए सुरक्षित हैं?',
    summaryAnswer: 'Yes. Modern sectors like Electronics Assembly, Solar Testing, Healthcare Assistance, IT-ITES, and Precision QC offer sanitized, highly regulated, CCTV-monitored environments with reserved seats and dedicated women ITIs (NSTI Women).',
    evidenceData: 'Over 19 National Skill Training Institutes for Women (NSTI-W) operate exclusively for female candidates. Companies like Tata Electronics (Hosur) and Schneider Electric have 70%+ female technician workforces on precision clean-room assembly lines with provided hostel accommodations and transport.'
  }
];

// Scheme Administrator Analytics Mock Dataset (Representing live data from ground level)
export const adminAnalyticsData = {
  totalSessions: 28450,
  positiveSentimentShift: '72.4%',
  escalatedToCounsellor: '8.6%',
  statesCovered: 24,
  objectionDistribution: [
    { name: 'Social Stigma & Status', percentage: 36, count: 10242, trend: '-8% this month' },
    { name: 'Starting Salary vs Degree', percentage: 29, count: 8250, trend: '-12% this month' },
    { name: 'Fear of Dead-End / No Higher Ed', percentage: 21, count: 5975, trend: '-15% this month' },
    { name: 'Safety Concerns for Daughters', percentage: 14, count: 3983, trend: '-5% this month' }
  ],
  districtHotspots: [
    { district: 'Dhemaji', state: 'Assam', sessions: 1240, topResistance: 'Social Stigma & Status', shiftRate: '68%', escalations: 112 },
    { district: 'Kamrup Rural', state: 'Assam', sessions: 1820, topResistance: 'Starting Salary vs Degree', shiftRate: '74%', escalations: 145 },
    { district: 'Varanasi', state: 'Uttar Pradesh', sessions: 3410, topResistance: 'Social Stigma & Status', shiftRate: '71%', escalations: 280 },
    { district: 'Patna', state: 'Bihar', sessions: 2980, topResistance: 'Dead-End / No Higher Ed', shiftRate: '76%', escalations: 210 },
    { district: 'Ranchi', state: 'Jharkhand', sessions: 1650, topResistance: 'Starting Salary vs Degree', shiftRate: '70%', escalations: 130 },
    { district: 'Jaipur Rural', state: 'Rajasthan', sessions: 2100, topResistance: 'Safety Concerns for Daughters', shiftRate: '69%', escalations: 185 }
  ],
  sentimentTimeline: [
    { stage: 'Before Joint AI Session', resistant: 67, neutral: 21, supportive: 12 },
    { stage: 'After Reviewing Verified Data', resistant: 28, neutral: 34, supportive: 38 },
    { stage: 'After Joint Family Session', resistant: 12, neutral: 16, supportive: 72 }
  ],
  liveEscalations: [
    { id: 'ESC-4081', parentName: 'Rameshwar Hazarika', district: 'Dhemaji, Assam', candidate: 'Nayan Hazarika (10th Pass)', preferredTrade: 'Industrial Electrician', mainConcern: 'Parent wants BA degree for family honor; student keen on ITI', status: 'Pending Callback', date: 'Today, 10:15 AM' },
    { id: 'ESC-4082', parentName: 'Sunita Sharma', district: 'Varanasi, UP', candidate: 'Pooja Sharma (12th Pass)', preferredTrade: 'Solar PV Technician', mainConcern: 'Mother worried about safe work environment for daughter', status: 'Assigned to Counsellor', date: 'Today, 09:40 AM' },
    { id: 'ESC-4083', parentName: 'Manish Verma', district: 'Patna, Bihar', candidate: 'Ankit Verma (10th Pass)', preferredTrade: 'CNC Precision Machinist', mainConcern: 'Doubtful about long term salary growth beyond ₹30k', status: 'Session Scheduled', date: 'Yesterday' }
  ]
};
