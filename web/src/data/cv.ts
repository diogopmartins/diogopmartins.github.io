export const profile = {
  name: 'Diogo Martins',
  title: 'Clinical Cardiac Scientist',
  credentials: 'MSc · HCPC · EACVI TTE and TOE Certification',
  tagline:
    'Scientist-led TOE with sedation · multimodality imaging · service development · echo education and imaging software',
  eyebrow: 'Clinical Cardiac Scientist · NHS & digital health',
  seoDescription:
    'Diogo Martins — Clinical Cardiac Scientist (MSc, HCPC, EACVI TTE and TOE Certification). Scientist-led TOE with sedation, structural heart imaging, Cardiac CT & CMR, and creator of Echo Wizard, free echocardiography simulators for cardiology staff.',
  links: {
    github: 'https://github.com/diogopmartins',
    echowizard: 'https://echo-wizard.com',
    echompr: 'https://diogopmartins.github.io/EchoMPR/',
    flightping: 'https://flightping.app',
  },
  registration: 'HCPC CS023232',
}

export const summary = [
  'Clinical Cardiac Scientist with 20+ years in echocardiography and cardiac physiology — spanning NHS hospitals, private clinics and CDCs. I combine advanced imaging, service development and digital innovation to improve how cardiology teams work.',
  'At Northampton General Hospital I established and deliver a rare scientist-led TOE service with sedation. At Royal Papworth I supported structural heart procedures including TAVI, ASD/PFO closure, PVL closure and M-TEER. Across eleven clinical sites I also lead stress echo, ACHD imaging, pathway redesign and trainee education.',
  'Alongside clinical work I build software for echocardiography, including Echo Wizard, an echo simulation and assessment platform, and EchoMPR, a browser-based 4D echo viewer.',
]

export const strengths = [
  { title: 'Scientist-led TOE with sedation', detail: 'Rare UK service model at NGH' },
  { title: 'Structural heart imaging', detail: 'TAVI · ASD/PFO · PVL · M-TEER' },
  { title: 'Multimodality credentials', detail: 'Full TTE and TOE accreditation · Level 1 CMR and Cardiac CT' },
  { title: 'Echo education software', detail: 'Creator, Echo Wizard' },
]

export const stats = [
  { label: 'Years of experience', value: 20, suffix: '' },
  { label: 'Clinical sites', value: 11, suffix: '' },
  { label: 'EACVI accreditations', value: 2, suffix: '' },
  { label: 'Imaging modalities', value: 4, suffix: '' },
]

export const clinicalProfile = [
  'Scientist-led TOE with sedation (NGH)',
  'Structural heart imaging — TAVI, ASD/PFO, PVL, M-TEER (Papworth)',
  'Full TTE and TOE accreditation (EACVI)',
  'Level 1 CMR and Cardiac CT',
  'Physiology-led stress echo & valve clinic pathways',
  'Ultrasound IV cannulation',
  'STP Equivalence · HCPC registered',
  'GCP certified — research echo (UK TAVI, CASPA)',
  'Creator — Echo Wizard echocardiography simulators',
]

export const workplaces = [
  'Northampton General Hospital',
  'Bedfordshire Hospitals',
  'University Hospitals Coventry & Warwickshire',
  'Milton Keynes University Hospital',
  'Royal Papworth Hospital',
  'Kettering General Hospital',
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
    id: 'echowizard',
    role: 'Creator & Developer',
    org: 'Echo Wizard — Echocardiography simulation and assessment (echo-wizard.com)',
    period: 'Launched Oct 2026',
    start: 2026.8,
    end: null,
    tags: ['Product', 'Education'],
    highlights: [
      'Created a web-based education platform using synthetic 3D heart models with known physiological values to generate echo cases, structured assessments and feedback.',
      'Built practice and assessment modules, user accounts and progress tracking; early launch generated 112 accounts and approximately 2,370 case openings in its first four calendar days.',
    ],
  },
  {
    id: 'mycardiac',
    role: 'Founder & Clinical Product Lead',
    org: 'MyCardiac — Clinical workflow application',
    period: 'Mar 2025 – 2026',
    start: 2025.2,
    end: 2026.5,
    tags: ['Product'],
    highlights: [
      'Built a hospital workflow application that attracted interest from several departments.',
      'Evaluated NHS IT governance and deployment costs, then discontinued implementation when investment requirements proved unviable.',
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
      'Established and deliver a rare scientist-led TOE service with sedation — designing pathways, policy, and governance for safe independent practice.',
      '2D and 3D transthoracic echocardiograms, including ACHD.',
      'Pharmacological stress echo; scientist-led contrast, bubble studies, and ultrasound IV cannulation.',
      'Leading echo QA.',
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
      'Pharmacological stress echo; physiologist-led contrast, bubble studies, and ultrasound IV cannulation.',
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
  { id: 'work', label: 'Projects' },
]

export const projects = [
  {
    id: 'echowizard',
    label: 'Echocardiography simulation and assessment · Launched Oct 2026',
    title: 'Echo Wizard',
    desc: 'Created a web-based education platform using synthetic 3D heart models with known physiological values to generate echo cases, structured assessments and feedback. Built practice and assessment modules, user accounts and progress tracking; early launch generated 112 accounts and approximately 2,370 case openings in its first four calendar days.',
    href: 'https://echo-wizard.com',
    linkText: 'echo-wizard.com',
    status: 'Live',
  },
  {
    id: 'echompr',
    label: '4D echocardiography imaging viewer',
    title: 'EchoMPR',
    desc: 'Developed a browser-based DICOM imaging application with multiplanar reconstruction, cine navigation and interactive 3D volume visualisation. Designed local file processing to avoid uploading patient images to a server.',
    href: 'https://diogopmartins.github.io/EchoMPR/',
    linkText: 'diogopmartins.github.io/EchoMPR',
    status: 'Live',
  },
  {
    id: 'flightping',
    label: 'Independent web application · Jul 2026 – Present',
    title: 'FlightPing',
    desc: 'Developed and launched an aviation-focused software product, demonstrating independent prototyping, delivery and iteration outside healthcare.',
    href: 'https://flightping.app',
    linkText: 'flightping.app',
    status: 'Live',
  },
  {
    id: 'mycardiac',
    label: 'Clinical workflow application · Mar 2025 – 2026',
    title: 'MyCardiac',
    desc: 'Built a hospital workflow application that attracted interest from several departments; evaluated NHS IT governance and deployment costs, then discontinued implementation when investment requirements proved unviable.',
    href: null,
    linkText: null,
    status: 'Frozen',
  },
  {
    id: 'github',
    label: 'Open work',
    title: 'GitHub',
    desc: 'Clinical workflow utilities and small-scale prototypes, including a Carto3D mesh to STL/WRL converter for 3D printing.',
    href: 'https://github.com/diogopmartins',
    linkText: 'github.com/diogopmartins',
    status: null,
  },
]
