import { disciplineAssets, logoAssets, projectAssets } from '../assets/portfolioAssets';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Designs', href: '#designs' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'Tailwind CSS',
  'Figma',
  'UI Systems',
];

export const skillGroups = [
  {
    title: 'Build',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UX flows', 'Interface systems', 'Accessibility'],
  },
  {
    title: 'Product',
    items: ['AI-assisted workflows', 'Dashboards', 'Kiosk systems', 'Case study thinking'],
  },
];

export const highlights = [
  {
    title: 'Front-end first',
    text: 'I build interfaces that are clean, responsive, and easy to scan under real user pressure.',
  },
  {
    title: 'Product aware',
    text: 'I think beyond screens: what the feature solves, who it helps, and how the flow should behave.',
  },
  {
    title: 'AI curious',
    text: 'I use AI as a practical layer for research, workflow ideas, and smarter product experiences.',
  },
];

export const projects = [
  {
    name: 'Lifewood Website',
    type: 'Full-stack website',
    role: 'Full-stack developer',
    description: 'A complete web platform shaped around clean presentation, responsive layouts, and practical data-backed features.',
    outcome: 'Built as a polished business website experience with front-end structure and back-end thinking working together.',
    impact: 'Responsive business presentation with practical full-stack planning.',
    focus: 'UI structure, content hierarchy, and scalable website sections.',
    tags: ['Full Stack', 'Website', 'Responsive UI'],
    accent: '#0f766e',
    mockup: 'website',
  },
  {
    name: 'fAInance AI Agent',
    type: 'AI finance assistant',
    role: 'AI product designer',
    description: 'An assistant concept for finance workflows that helps users understand, organize, and act on financial information.',
    outcome: 'Designed around quick summaries, guided decisions, and simple next steps instead of overwhelming users with raw numbers.',
    impact: 'Turns dense financial information into guided, readable actions.',
    focus: 'AI workflow mapping, assistant UX, and decision-support screens.',
    tags: ['AI Agent', 'Finance', 'Automation'],
    accent: '#7c3aed',
    mockup: 'agent',
    image: projectAssets.aiAgent,
    imageAlt: 'fAInance AI agent project preview',
  },
  {
    name: 'Abducted',
    type: 'Game development',
    role: 'Game developer',
    description: 'An interactive game project focused on atmosphere, player decisions, and a memorable gameplay loop.',
    outcome: 'Built to practice scene flow, tension, feedback, and player interaction inside a more expressive digital experience.',
    impact: 'Interactive gameplay prototype with atmosphere and feedback loops.',
    focus: 'Scene flow, player interaction, and expressive digital experience design.',
    tags: ['Game Dev', 'Interactive', 'Gameplay'],
    accent: '#e11d48',
    mockup: 'game',
    image: projectAssets.abducted,
    imageAlt: 'Abducted game project preview',
  },
  {
    name: 'Smart Campus Attendance System',
    type: 'Kiosk-based fingerprint backup',
    role: 'System designer',
    description: 'A campus attendance system with kiosk flow and fingerprint backup for faster, more reliable student check-ins.',
    outcome: 'Focused on reducing manual attendance friction while keeping a backup path for identity verification.',
    impact: 'Reduces attendance friction through kiosk-first check-in planning.',
    focus: 'Kiosk UX, backup identity verification, and campus workflow design.',
    tags: ['Attendance', 'Kiosk', 'Biometrics'],
    accent: '#0f3460',
    mockup: 'kiosk',
  },
];

export const techLogos = [
  { src: logoAssets.chatGpt, alt: 'ChatGPT', title: 'ChatGPT' },
  { src: logoAssets.claude, alt: 'Claude', title: 'Claude' },
  { src: logoAssets.github, alt: 'GitHub', title: 'GitHub' },
  { src: logoAssets.deepseek, alt: 'DeepSeek', title: 'DeepSeek' },
  { src: logoAssets.vscode, alt: 'Visual Studio Code', title: 'Visual Studio Code' },
  { src: logoAssets.linkedin, alt: 'LinkedIn', title: 'LinkedIn' },
  { src: logoAssets.extra, alt: 'Tech Logo', title: 'Tech Logo' },
];

export const disciplines = [
  {
    title: 'UX Design',
    text: 'UX design helps me make each screen clear and intuitive, so users can move through tasks without confusion or extra effort.',
    image: disciplineAssets.uxDesign,
    alt: 'UX design workspace illustration',
  },
  {
    title: 'Product Thinking',
    text: 'Product thinking keeps me focused on outcomes, making sure every feature solves a real user problem and supports business goals.',
    image: disciplineAssets.productThinking,
    alt: 'Product thinking concept image',
  },
  {
    title: 'Front-end Development',
    text: 'Front-end development lets me turn ideas into polished interfaces that are responsive, accessible, and consistent across devices.',
    image: disciplineAssets.frontEnd,
    alt: 'Front-end development screen image',
  },
  {
    title: 'AI Integration',
    text: 'AI integration helps me design smarter experiences that assist users at the right moment without adding complexity.',
    image: disciplineAssets.aiIntegration,
    alt: 'AI integration concept image',
  },
  {
    title: 'User Research',
    text: 'User research grounds my design decisions in evidence, so I can validate what people actually need before building.',
    image: disciplineAssets.userResearch,
    alt: 'User research process image',
  },
  {
    title: 'Interface Design',
    text: 'Interface design is where it all comes together, translating UX, product strategy, and technical constraints into a visual system users trust.',
    image: disciplineAssets.interfaceDesign,
    alt: 'Interface design concept image',
  },
];
