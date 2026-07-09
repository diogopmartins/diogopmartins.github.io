export const profile = {
  name: 'Diogo Martins',
  title: 'Clinical Cardiac Scientist',
  credentials: 'MSc · HCPC · STP Equivalence · ESC EACVI (TTE/TOE)',
  tagline:
    'Scientist-led TOE & sedation · multimodality imaging · service development · digital health innovation',
  eyebrow: 'Clinical Cardiac Scientist · NHS & digital health',
  seoDescription:
    'Diogo Martins — Clinical Cardiac Scientist (MSc, HCPC, STP Equivalence, EACVI TTE/TOE). Scientist-led TOE & sedation, structural heart imaging, Cardiac CT & CMR, and founder of MyCardiac.',
  links: {
    github: 'https://github.com/diogopmartins',
    mycardiac: 'https://mycardiac.co.uk',
  },
  registration: 'HCPC CS023232',
}

export const summary = [
  'Clinical Cardiac Scientist with 20+ years in echocardiography and cardiac physiology — spanning NHS hospitals, private clinics and CDCs. I combine advanced imaging, service development and digital innovation to improve how cardiology teams work.',
  'At Northampton General Hospital I established and deliver a rare scientist-led TOE service with scientist-led sedation. At Royal Papworth I supported structural heart procedures including TAVI, ASD/PFO closure, PVL closure and M-TEER. Across eleven clinical sites I also lead stress echo, ACHD imaging, pathway redesign and trainee education — and build MyCardiac to bring AI-assisted planning into NHS cardiology operations.',
]

export const strengths = [
  { title: 'Scientist-led TOE & sedation', detail: 'Rare UK service model at NGH' },
  { title: 'Structural heart imaging', detail: 'TAVI · ASD/PFO · PVL · M-TEER' },
  { title: 'Multimodality credentials', detail: 'EACVI TTE/TOE · CT · CMR' },
  { title: 'Digital product', detail: 'Founder, MyCardiac' },
]

export const stats = [
  { label: 'Years of experience', value: 20, suffix: '+' },
  { label: 'Clinical sites', value: 11, suffix: '' },
  { label: 'EACVI accreditations', value: 2, suffix: '' },
  { label: 'Imaging modalities', value: 4, suffix: '+' },
]

export const clinicalProfile = [
  'Scientist-led TOE with scientist-led sedation (NGH)',
  'Structural heart imaging — TAVI, ASD/PFO, PVL, M-TEER (Papworth)',
  'EACVI TTE & TOE accredited',
  'ESC Level 1 Cardiac CT & CMR',
  'Physiology-led stress echo & valve clinic pathways',
  'STP Equivalence · HCPC registered',
  'GCP certified — research echo (UK TAVI, CASPA)',
  'Founder — MyCardiac cardiology operations SaaS',
]

export const workplaces = [
  'Northampton General Hospital',
  'Bedfordshire Hospitals',
  'University Hospitals Coventry & Warwickshire',
  'Milton Keynes University Hospital',
  'Royal Papworth Hospital',
  'Kettering General Hospital',
  'MyCardiac.co.uk',
]

export type Experience = {
  id: string
  role: string
  org: string
  period: string
  start: number
  end: number | null
  tags: string[]
  highlights: string[]
}

export const experience: Experience[] = [
  {
    id: 'consulting',
    role: 'Clinical Cardiac Scientist',
    org: 'Consulting Services — Policy, SOPs & Cardiac Consultancy',
    period: 'Feb 2025 – Present',
    start: 2025.1,
    end: null,
    tags: ['Leadership', 'Clinical'],
    highlights: [
      'Policy, SOP and pathway consultancy for cardiac physiology and echocardiography services.',
      'Supporting departments with governance, clinical safety documentation and service design.',
      'Translating frontline imaging practice into practical operational standards.',
    ],
  },
  {
    id: 'mycardiac',
    role: 'Founder & Clinical Product Lead',
    org: 'mycardiac.co.uk — Cardiology Operations SaaS',
    period: 'Dec 2024 – Present',
    start: 2024.9,
    end: null,
    tags: ['Product', 'AI', 'SaaS'],
    highlights: [
      'Designing a SaaS platform for cardiology workflow optimisation: staff rotas, equipment tracking, clinical governance, and contract compliance.',
      'Integrating AI-assisted planning and task automation to reduce administrative load in high-pressure NHS environments.',
      'User requirement discovery across multiple NHS hospitals; translating frontline challenges into scalable digital solutions.',
      'Leading regulatory, security, and clinical safety documentation for NHS implementation and early Trust pilots.',
    ],
  },
  {
    id: 'northampton',
    role: 'Clinical Cardiac Scientist',
    org: 'Northampton General Hospital',
    period: 'Feb 2026 – Present',
    start: 2026.1,
    end: null,
    tags: ['Clinical', 'TOE', 'Leadership'],
    highlights: [
      'Established and deliver a rare scientist-led TOE service with scientist-led sedation — designing pathways, policy, and governance for safe independent practice.',
      '2D and 3D transthoracic echocardiograms, including ACHD.',
      'Pharmacological stress echo; scientist-led contrast, bubble studies, and IV cannulation.',
      'Mentoring doctors in training, STP and ETP students; weekly echo meeting presentations.',
    ],
  },
  {
    id: 'northampton-locum',
    role: 'Locum Clinical Cardiac Scientist',
    org: 'Northampton General Hospital',
    period: 'Mar 2022 – Feb 2026',
    start: 2022.2,
    end: 2026.1,
    tags: ['Clinical', 'TOE', 'Education'],
    highlights: [
      '2D and 3D transthoracic echocardiograms, including ACHD.',
      'Pharmacological stress echo; physiologist-led contrast, bubble studies, and IV cannulation.',
      'Transoesophageal echocardiography; policy writing and groundwork for a scientist-led TOE and sedation service.',
      'Mentoring doctors in training, STP and ETP students; weekly echo meeting presentations.',
    ],
  },
  {
    id: 'papworth-lead',
    role: 'Lead Cardiac Physiologist',
    org: 'Royal Papworth Hospital',
    period: 'Aug 2019 – Jun 2022',
    start: 2019.6,
    end: 2022.5,
    tags: ['Leadership', 'Structural', 'Research'],
    highlights: [
      'Departmental and budget manager for echocardiography; recruited and supported physiologists, registrars and STP trainees.',
      '2D/3D TTE, complex echo clinic, pharmacological and exercise stress echo, contrast, ACHD and TOE.',
      'TTE and TOE-guided structural heart procedures: ASD/PFO, TAVI, BAV, PVL closure, alcohol septal ablation, M-TEER.',
      'Led COVID surge redeployment and established a formal seven-day echo service; research TTE for UK TAVI and CASPA trials (GCP certified).',
      'Published in BSEcho Journal (June 2021): The revolution in left atrial imaging and clinical implications.',
    ],
  },
  {
    id: 'papworth-locum',
    role: 'Locum Cardiac Physiologist',
    org: 'Royal Papworth Hospital',
    period: 'Apr 2018 – Aug 2019',
    start: 2018.3,
    end: 2019.6,
    tags: ['Clinical', 'Structural', 'Research'],
    highlights: [
      '2D/3D TTE, stress echo, contrast studies and TOE across inpatient and outpatient pathways.',
      'TOE-guided procedures: ASD/PFO closures, TAVI, PVL closure and BAV.',
      'Supervised STP scanning and reporting; research TTE for UKTAVI and CASPA trials.',
    ],
  },
  {
    id: 'mkuh',
    role: 'Senior Chief Cardiac Physiologist',
    org: 'Milton Keynes University Hospital',
    period: 'Oct 2015 – Apr 2018',
    start: 2015.8,
    end: 2018.3,
    tags: ['Leadership', 'Education'],
    highlights: [
      'Cardiology department manager; modernised imaging equipment and multi-vendor PACS workflows.',
      '2D/3D TTE, physiologist-led valve clinic pilot, stress echo, contrast and TOE.',
      'Opened seven-day echo cover; continuous audit and quality improvement.',
      'Organised in-house stress echo interpretation course (2017); mentored PTP and medical students.',
    ],
  },
  {
    id: 'kettering-locum',
    role: 'Locum Echocardiographer',
    org: 'Kettering General Hospital',
    period: 'Nov 2017 – Dec 2022',
    start: 2017.9,
    end: 2022.9,
    tags: ['Clinical'],
    highlights: ['Weekend 2D/3D transthoracic echocardiograms.'],
  },
  {
    id: 'lecturer',
    role: 'Post-graduate Guest Lecturer',
    org: 'Escola Superior de Saúde do Vale do Ave — Stress Echo Module',
    period: 'May 2015',
    start: 2015.4,
    end: 2015.4,
    tags: ['Education'],
    highlights: ['Advanced echocardiography — stress echo module.'],
  },
  {
    id: 'kettering-chief',
    role: 'Chief Cardiac Physiologist',
    org: 'Kettering General Hospital',
    period: 'Jun 2013 – Oct 2015',
    start: 2013.5,
    end: 2015.8,
    tags: ['Clinical', 'Leadership'],
    highlights: [
      'Helped achieve BSE departmental accreditation; developed physiologist-led stress echo and complex contrast echo pathways.',
      'TOE first-operator training alongside Safe Sedation and ALS; paediatric echo in cardiology clinics.',
      'Trained echo physiologists and Portuguese trainees; team received the Hospital Smiley Award for education and patient care.',
      'Completed MSc research on left atrial strain and LV filling pressures in hypertrophic cardiomyopathy.',
    ],
  },
  {
    id: 'trainee',
    role: 'Trainee Cardiac Physiologist',
    org: 'Centro Hospitalar Vila Nova de Gaia e Espinho',
    period: 'Jul 2011 – May 2013',
    start: 2011.5,
    end: 2013.4,
    tags: ['Clinical', 'Training'],
    highlights: [
      'Inpatient and outpatient echocardiography across specialties including cardiothoracic surgery.',
      'TTE, TOE and stress echo; 3D skills and speckle tracking on Philips and Siemens systems.',
    ],
  },
]

export const education = [
  {
    title: 'Level 1 certification — CMR',
    org: 'European Society of Cardiology',
    period: 'May 2026',
  },
  {
    title: 'Level 1 certification — Cardiac CT',
    org: 'European Society of Cardiology',
    period: 'Apr 2025',
  },
  {
    title: 'Oxford ACHD Echo',
    org: 'BSE-accredited CPD',
    period: 'Nov 2023',
  },
  {
    title: 'EMCHN Physiology Study Day — Beyond the Basics',
    org: 'BSE-accredited CPD',
    period: 'Apr 2026',
  },
  {
    title: 'Myocardial Velocity & Deformation Imaging',
    org: 'Leuven University, Belgium',
    period: 'Feb 2016',
  },
  {
    title: 'Safe Sedation for the Non-Anaesthetists',
    org: 'Royal College of Physicians, London',
    period: 'Jun 2015',
  },
  {
    title: 'Advanced Life Support',
    org: 'Resuscitation Council (UK), London',
    period: 'Mar 2015',
  },
  {
    title: 'European Certification — Adult TOE',
    org: 'EACVI / ESC, France',
    period: 'Dec 2014',
  },
  {
    title: 'MSc Cardiovascular Diagnosis & Intervention — Ultrasound',
    org: 'Escola Superior de Tecnologia da Saúde de Lisboa',
    period: '2012 – 2014',
  },
  {
    title: 'European Certification — Adult TTE',
    org: 'EACVI / ESC, France',
    period: 'Aug 2012',
  },
  {
    title: 'BSc Cardiac and Respiratory Physiology',
    org: 'Escola Superior de Saúde do Vale do Ave',
    period: '2007 – 2011',
  },
]

export const publication = {
  title: 'The revolution in left atrial imaging and clinical implications',
  venue: 'BSEcho Journal',
  date: 'June 2021',
}

export const conferences = [
  'ESC Congress 2025',
  'PCR London Valves 2023',
  'EACVI — Best of Imaging 2022',
  'EACVI — Best of Imaging 2020',
  'ESC Congress 2020 — The Digital Experience',
  'EuroEcho 2018 — Milan',
  'EuroEcho 2017 — Lisbon',
  'EuroEcho 2016 — Leipzig',
  'European Congress of Cardiology 2015 — London',
  'EuroEcho 2014 — Vienna',
  'European Congress of Cardiology 2013 — Amsterdam',
  'Heart Failure Congress 2013 — Lisbon',
]

export const skills = {
  clinical: [
    'EchoPac (GE)',
    'TomTec 4D LV/RV/MV',
    'Philips Xcelera / Intellispace / QLAB',
    'Philips EchoNav',
    'Siemens Syngo Dynamics',
    'McKesson Cardiology',
    '3D Slicer reconstructions',
    'DICOM & PACS workflows',
  ],
  digital: [
    'Python',
    'Flask',
    'JavaScript',
    'SQL fundamentals',
    'API workflows',
    'LLM-assisted prototyping',
    'Clinical workflow automation',
    'NHS digital compliance',
  ],
  soft: [
    'Cross-functional collaboration',
    'Clinical & digital leadership',
    'Service transformation',
    'Clear clinical–technical translation',
    'Rapid learning in ambiguous environments',
    'Ownership and follow-through',
  ],
}

export const languages = ['Portuguese', 'English']

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
]
