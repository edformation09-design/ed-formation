export const SITE = {
  name: 'ED FORMATION',
  slogan: 'Apprenez Aujourd’hui, créez Demain',
  contact: {
    phone: '+212 6 00 00 00 00',
    whatsapp: '+212 6 00 00 00 00',
    email: 'contact@edformation.ma',
    address: 'Casablanca, Maroc',
  },
  socials: {
    facebook: 'https://facebook.com/edformation',
    instagram: 'https://instagram.com/edformation',
  },
}

const WHATSAPP_NUMBER = SITE.contact.whatsapp.replace(/[^0-9]/g, '')

export function whatsappLink(message = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Formations', href: '#formations' },
  { label: 'Notre méthode', href: '#methode' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const FORMATIONS = [
  {
    id: 'marketing-digital',
    icon: 'Megaphone',
    name: 'Marketing Digital',
    description:
      'Apprenez à construire une stratégie digitale complète : étude de marché, présence sur les réseaux sociaux, création de contenu et publicité en ligne.',
    program: [
      { part: 'Stratégie & marché', topics: ['Fondamentaux du Marketing Digital', 'Étude de marché', 'Analyse de la concurrence', 'Choix de niche', 'Recherche et sélection de produits', 'Positionnement'] },
      { part: 'Présence & contenu', topics: ['Création et optimisation des pages Facebook et Instagram', 'Identité visuelle pour les réseaux sociaux', 'Gestion professionnelle des réseaux sociaux', 'Création de contenu', 'Stratégie de contenu', 'Parcours client'] },
      { part: 'Publicité & performance', topics: ['Gestion des prospects', 'WhatsApp Business', 'Facebook Ads', 'Instagram Ads', 'Analyse des performances', 'Optimisation des campagnes'] },
    ],
  },
  {
    id: 'e-commerce',
    icon: 'ShoppingCart',
    name: 'E-commerce',
    description:
      'Apprenez à lancer et gérer une boutique en ligne : choix du produit, création de la boutique, gestion des commandes et optimisation des ventes.',
    program: [
      { part: 'Préparation', topics: ['Fondamentaux de l’e-commerce', 'Étude de marché', 'Choix du produit', 'Analyse de la demande', 'Positionnement'] },
      { part: 'Boutique en ligne', topics: ['Création d’une boutique e-commerce', 'Présentation des produits', 'Parcours client', 'Acquisition digitale'] },
      { part: 'Gestion', topics: ['Gestion des commandes', 'Relation client', 'Optimisation des ventes'] },
    ],
  },
  {
    id: 'graphic-design',
    icon: 'PenTool',
    name: 'Graphic Design',
    description:
      'Apprenez à créer des visuels professionnels : composition, couleurs, typographie et identité visuelle avec les outils Adobe.',
    program: [
      { part: 'Fondamentaux du design', topics: ['Principes fondamentaux du design', 'Composition', 'Couleurs', 'Typographie'] },
      { part: 'Identité visuelle', topics: ['Identité visuelle', 'Création de visuels professionnels', 'Design pour réseaux sociaux', 'Supports publicitaires'] },
      { part: 'Outils professionnels', topics: ['Adobe Photoshop', 'Adobe Illustrator'] },
    ],
  },
  {
    id: 'montage-video',
    icon: 'Clapperboard',
    name: 'Montage Vidéo',
    description:
      'Apprenez à produire des vidéos professionnelles pour les réseaux sociaux : montage, storytelling et optimisation du contenu.',
    program: [
      { part: 'Bases du montage', topics: ['Principes du montage vidéo', 'Storytelling', 'Découpage', 'Transitions'] },
      { part: 'Création de contenu', topics: ['Création de Reels', 'Montage pour réseaux sociaux', 'Sous-titres', 'Audio'] },
      { part: 'Production', topics: ['Adobe Premiere Pro', 'Création de vidéos publicitaires', 'Optimisation des vidéos pour les réseaux sociaux'] },
    ],
  },
  {
    id: 'intelligence-artificielle',
    icon: 'BrainCircuit',
    name: 'Intelligence Artificielle',
    description:
      'Apprenez à utiliser l’intelligence artificielle pour améliorer votre productivité, votre contenu et vos processus métier.',
    program: [
      { part: 'Comprendre l’IA', topics: ['Comprendre l’intelligence artificielle', 'Utilisation professionnelle des outils IA', 'Prompting'] },
      { part: 'Création avec l’IA', topics: ['Création de contenu avec l’IA', 'Génération et optimisation de visuels'] },
      { part: 'Business & productivité', topics: ['Productivité', 'Automatisation', 'Applications de l’IA dans le marketing', 'Applications de l’IA dans le business'] },
    ],
  },
]

export const FORMATS = [
  {
    id: 'groupe',
    name: 'Formation en groupe',
    description: 'Apprenez dans un cadre collectif, avec un programme structuré et des sessions régulières.',
    features: [
      'Apprentissage collectif',
      'Exercices pratiques',
      'Échanges entre participants',
      'Programme structuré',
      'Sessions organisées régulièrement',
    ],
    cta: 'Choisir la formation en groupe',
  },
  {
    id: 'individuelle',
    name: 'Formation individuelle',
    description: 'Bénéficiez d’un accompagnement personnalisé et d’un programme adapté à vos objectifs.',
    features: [
      'Accompagnement personnalisé',
      'Programme adapté aux objectifs',
      'Horaires flexibles',
      'Progression adaptée au rythme du participant',
      'Suivi personnalisé',
    ],
    cta: 'Choisir la formation individuelle',
  },
]

export const METHOD = [
  {
    number: '01',
    title: 'Orientation',
    description:
      'Un premier échange pour comprendre votre objectif et vous orienter vers la formation adaptée.',
  },
  {
    number: '02',
    title: 'Formation pratique',
    description:
      'Des exercices, cas concrets et mises en situation pour développer des compétences réellement applicables.',
  },
  {
    number: '03',
    title: 'Accompagnement',
    description:
      'Un suivi pour vous aider à progresser et à mettre vos compétences en pratique.',
  },
]

export const WHY = [
  'Formation orientée pratique',
  'Accompagnement personnalisé',
  'Formations adaptées aux objectifs',
  'Format groupe ou individuel',
  'Horaires flexibles pour les formations individuelles',
]

export const FAQS = [
  {
    question: 'Quels formats de formation proposez-vous ?',
    answer:
      'ED FORMATION propose des formations en groupe et des formations individuelles.',
  },
  {
    question: 'Les formations sont-elles pratiques ?',
    answer:
      'Oui. L’apprentissage repose sur des exercices, des cas concrets et des situations professionnelles.',
  },
  {
    question: 'Puis-je choisir mes horaires ?',
    answer:
      'Pour les formations individuelles, les horaires peuvent être adaptés aux disponibilités du participant.',
  },
  {
    question: 'Comment savoir quelle formation choisir ?',
    answer:
      'Une séance d’orientation permet d’échanger sur votre objectif et de vous orienter vers la formation adaptée.',
  },
  {
    question: 'Comment puis-je m’inscrire ?',
    answer:
      'Remplissez le formulaire avec vos informations. L’équipe ED FORMATION vous contactera ensuite.',
  },
]

export const HERO = {
  badge: 'Formations pratiques — Casablanca, Maroc',
  title: 'Développez vos compétences. Construisez votre avenir.',
  subtitle:
    'Des formations pratiques en Marketing Digital, E-commerce, Design, Montage Vidéo et Intelligence Artificielle, adaptées à vos objectifs.',
  primaryCta: 'Découvrir nos formations',
  secondaryCta: 'Réserver une séance d’orientation',
}

export const ABOUT = {
  title: 'À propos de ED FORMATION',
  paragraphs: [
    'ED FORMATION accompagne les personnes qui souhaitent développer des compétences pratiques dans les domaines du digital, du design, de l’e-commerce et de l’intelligence artificielle.',
    'Notre approche privilégie la pratique, l’accompagnement et l’application concrète des connaissances.',
  ],
}

export const CONTACT_FORM = {
  title: 'Parlons de votre projet',
  subtitle: 'Quelques informations suffisent pour nous permettre de vous recontacter.',
  cta: 'Être recontacté',
  success: {
    title: 'Merci pour votre demande.',
    message: 'L’équipe ED FORMATION vous contactera prochainement.',
  },
  whatsapp: {
    title: 'Vous avez une question ?',
    cta: 'Échanger sur WhatsApp',
  },
}

export const FINAL_CTA = {
  title: 'Prêt à développer de nouvelles compétences ?',
  text: 'Échangeons sur votre objectif et trouvons la formation adaptée à votre projet.',
  cta: 'Réserver une séance d’orientation',
}