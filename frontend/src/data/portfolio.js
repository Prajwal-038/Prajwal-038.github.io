// Central source of truth for the portfolio.
// The API layer (services/api.js) tries the Django backend first
// and falls back to these objects when offline.

export const profile = {
  name: 'Prajwal S',
  role: 'Software Engineer — Computer Vision & Data',
  tagline: 'Building production-grade vision systems & data platforms.',
  location: 'Bengaluru, India',
  email: 'sprajwal0208@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prajwal-s-5288b5224/',
  linkedinLabel: 'linkedin.com/in/prajwal-s',
  summary:
    'Software Engineer with 2+ years building production-grade computer vision systems and data analytics platforms. Expertise in object detection, instance segmentation, deep learning integration, and performance optimization.',
  typingLines: [
    'Computer Vision Engineer',
    'Object Detection · YOLO26 · Detectron2',
    'Data Analytics · Apache Superset',
    'Deep Learning · PyTorch · TensorFlow',
  ],
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '+30%', label: 'Processing Speedup' },
    { value: '+35%', label: 'Analytical Insights' },
    { value: '3', label: 'Publications' },
  ],
};

export const about = {
  heading: 'Engineering vision systems that ship.',
  paragraphs: [
    'I am a Software Engineer at Compviz Technologies, where I build and deploy AI inspection (AIMS) and analytics (KFEANS) platforms used in production. My work spans the full CV lifecycle — dataset design and CVAT auto-annotation pipelines, YOLO26 / Detectron2 model training, inference optimization, and deployment.',
    'Previously a Research Intern at NIT Karnataka, I worked on multi-emotional speaker recognition with ResNet-18 on Mel-spectrograms. I hold a B.E. in AI & Data Science and have co-authored three peer-reviewed papers across deep learning and applied ML.',
  ],
  highlights: [
    { icon: '🎯', title: 'Detection and Segmentation', text: 'YOLO26, Detectron2, instance segmentation at production scale.' },
    { icon: '⚡', title: 'Performance', text: '+30% inference speed, −15% turnaround on AIMS pipelines.' },
    { icon: '📊', title: 'Data and Dashboards', text: 'Apache Superset dashboards driving +35% insights for KFEANS.' },
    { icon: '🏷️', title: 'Annotation Ops', text: 'CVAT auto-annotation cutting labeling effort by 25%.' },
  ],
};

export const experience = [
  {
    company: 'Compviz Technologies',
    role: 'Software Engineer',
    period: 'Apr 2024 — Present',
    location: 'Bengaluru, India',
    note: 'AI Intern → Full-time (Jun 2024)',
    bullets: [
      'AIMS project: YOLO26 + Detectron2 asset detection in production; +30% processing speed, −15% turnaround time.',
      'Built CVAT auto-annotation pipelines, reducing manual labeling effort by 25%.',
      'Designed and implemented the backend for the AIMS ticket management system — ticket lifecycle, assignment workflows, status tracking, and REST APIs supporting inspection operations.',
      'Owned production deployment: model versioning, inference optimization, monitoring.',
      'KFEANS: Apache Superset dashboards delivering +35% improvement in actionable insights.',
    ],
    tags: ['YOLO26', 'Detectron2', 'CVAT', 'Django REST', 'Apache Superset', 'Production CV'],
  },
  {
    company: 'NIT Karnataka',
    role: 'Research Intern',
    period: 'Sep 2023 — Nov 2023',
    location: 'Surathkal, India',
    note: 'Speech and Emotion Recognition',
    bullets: [
      'Multi-emotional speaker recognition using ResNet-18 on Mel-spectrogram features.',
      'Achieved +20% accuracy improvement over CapsuleNet baseline.',
    ],
    tags: ['ResNet-18', 'Mel-spectrogram', 'PyTorch', 'Research'],
  },
];

export const projects = [
  {
    title: 'Skin Disease Classification',
    subtitle: 'Multi-class deep learning · Springer HINT 2024',
    description:
      'Multi-class skin disease classifier with transfer learning and augmentation. +15% accuracy over baseline; published at Springer HINT 2024.',
    tags: ['PyTorch', 'CNNs', 'Transfer Learning', 'Medical Imaging'],
    icon: '🧬',
    link: null,
  },
  {
    title: 'Wildlife Poaching Detection',
    subtitle: 'Real-time YOLO26 + web alerting',
    description:
      'Real-time poaching detection pipeline with YOLO26 inference and a web-based alerting system for rangers and operators.',
    tags: ['YOLO26', 'Real-time Inference', 'Web Alerts', 'Deployment'],
    icon: '🦁',
    link: null,
  },
  {
    title: 'AIMS — AI Inspection Platform',
    subtitle: 'Production asset detection @ Compviz',
    description:
      'Production CV platform: Detectron2 instance segmentation, optimized inference (+30% speed), CVAT auto-labeling (−25% effort).',
    tags: ['Detectron2', 'CVAT', 'MLOps', 'Optimization'],
    icon: '🏭',
    link: null,
  },
  {
    title: 'AIMS Ticket Management System (Backend)',
    subtitle: 'Inspection workflow backend @ Compviz',
    description:
      'Backend for the AIMS ticket management system: ticket creation and lifecycle, assignment and escalation workflows, status tracking, and REST APIs integrated with inspection results for operational follow-through.',
    tags: ['Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs', 'RBAC'],
    icon: '🎫',
    link: null,
  },
  {
    title: 'KFEANS Analytics Dashboards',
    subtitle: 'Apache Superset · +35% insights',
    description:
      'Self-serve Superset dashboards over engineered datasets — drill-downs, alerts, and KPI views for operations teams.',
    tags: ['Apache Superset', 'SQL', 'Data Engineering', 'BI'],
    icon: '📈',
    link: null,
  },
];

export const skills = [
  { group: 'Languages', icon: '💻', items: ['Python', 'SQL', 'C'] },
  { group: 'Deep Learning', icon: '🧠', items: ['Deep Learning', 'CNNs', 'TensorFlow', 'PyTorch'] },
  { group: 'Computer Vision', icon: '👁️', items: ['Object Detection', 'Instance Segmentation', 'YOLO26', 'Detectron2'] },
  { group: 'BI and Analytics', icon: '📊', items: ['Apache Superset', 'Tableau', 'Power BI'] },
  { group: 'MLOps and Tooling', icon: '🛠️', items: ['CVAT', 'Git', 'Annotation Pipelines', 'Model Deployment'] },
  { group: 'Engineering', icon: '⚙️', items: ['Performance Optimization', 'Data Engineering Basics'] },
];

export const education = {
  degree: 'B.E. — Artificial Intelligence and Data Science',
  school: 'Global Academy of Technology, Bengaluru',
  period: '2020 — 2024',
  cgpa: 'CGPA 7.73 / 10',
  points: [
    'Core coursework: machine learning, deep learning, computer vision, databases, statistics.',
    'Published 3 peer-reviewed papers during undergrad (Springer × 2, IEEE × 1).',
  ],
};

export const publications = [
  {
    title: 'Impact of Social Media Distractions — A Data-Driven Study',
    venue: 'Springer SOCTA',
    icon: '📱',
    detail: 'Statistical + ML analysis of distraction patterns and productivity correlates.',
  },
  {
    title: 'Air Pollutant Prediction with Machine Learning',
    venue: 'IEEE CIISCA',
    icon: '🌫️',
    detail: 'Regression and time-series models for pollutant forecasting.',
  },
  {
    title: 'Skin Disease Classification using Deep Learning',
    venue: 'Springer HINT 2024',
    icon: '🔬',
    detail: 'Multi-class CNN pipeline, +15% accuracy over baseline.',
  },
];

export const certifications = [
  { title: 'Data Visualization with Tableau', issuer: 'Coursera', icon: '📊' },
  { title: 'Cybersecurity Foundations', issuer: 'Coursera', icon: '🔐' },
  { title: 'NLP Foundation', issuer: 'Infosys Springboard', icon: '💬' },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];
