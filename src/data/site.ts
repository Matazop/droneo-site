// Toutes les infos modifiables du site sont ici.
// Les valeurs marquées "À COMPLÉTER" sont provisoires.

export const site = {
  name: 'Droneo',
  pilot: 'Mathieu Azzopardi',
  tagline: 'Vidéos aériennes sur mesure en Vendée',
  email: 'contact@droneo.fr', // À COMPLÉTER : adresse réelle
  phone: '06 00 00 00 00', // À COMPLÉTER
  phoneIntl: '+33600000000', // À COMPLÉTER (format international, pour les liens)
  whatsapp: '33600000000', // À COMPLÉTER (sans le +)
  instagram: 'https://www.instagram.com/', // À COMPLÉTER
  zone: 'Vendée et Pays de la Loire',
  responseDelay: '48 h',
  // Vidéo de fond de l'accueil : déposer un fichier MP4 dans public/video/ et indiquer son chemin ici (ex. '/video/demo.mp4').
  heroVideo: '',
  // Lien de la bande démo (YouTube) pour le bouton « Voir la bande démo ».
  demoYoutubeId: '',
};

export const pillars = [
  {
    title: 'Sur mesure',
    text: "Chaque vidéo est pensée pour votre projet : plans, durée, musique et formats. Pas de rushes livrés en vrac.",
    icon: 'spark',
  },
  {
    title: 'Pilote certifié',
    text: "Télépilote titulaire du CATS. Vols déclarés, autorisations gérées et assurance professionnelle : vous êtes couvert.",
    icon: 'shield',
  },
  {
    title: 'De A à Z',
    text: "Un seul interlocuteur, du premier échange à la livraison : repérage, tournage, montage, étalonnage.",
    icon: 'route',
  },
  {
    title: 'Prêt à diffuser',
    text: "Formats adaptés à votre écran, votre site, Instagram, TikTok ou LinkedIn. Il ne reste plus qu'à partager.",
    icon: 'share',
  },
];

export const offersParticuliers = [
  {
    name: 'Envol',
    price: 390,
    pitch: "L'essentiel pour immortaliser un temps fort.",
    features: [
      "Jusqu'à 2 h sur place",
      'Vols aux moments clés',
      'Clip monté de 1 min 30, avec musique',
      '10 photos aériennes',
    ],
  },
  {
    name: 'Souvenir',
    price: 690,
    pitch: 'Le film de votre journée, vu du ciel.',
    featured: true,
    features: [
      "Jusqu'à 4 h sur place",
      'Film monté de 3 à 4 min',
      'Teaser vertical pour Instagram',
      '20 photos aériennes',
    ],
  },
  {
    name: 'Prestige',
    price: 990,
    pitch: 'De la cérémonie à la soirée, rien ne vous échappe.',
    features: [
      'Présence étendue sur la journée',
      'Film monté de 5 à 8 min',
      'Teaser vertical + toutes les photos',
      'Rushes fournis',
    ],
  },
];

export const offersPros = [
  {
    name: 'Immo Flash',
    price: 190,
    pitch: 'Le bien et son environnement, en un coup d’œil.',
    features: [
      '1 h de prise de vue',
      '15 photos aériennes',
      'Clip de 30 à 60 s (annonce + réseaux)',
      'Livraison sous 72 h',
    ],
  },
  {
    name: 'Vitrine',
    price: 590,
    pitch: 'Une vidéo qui valorise votre activité partout.',
    featured: true,
    features: [
      'Demi-journée de tournage',
      'Vidéo montée de 1 à 2 min',
      'Déclinaisons 16:9, 9:16 et 1:1',
      "Droits d'utilisation commerciale",
    ],
  },
  {
    name: 'Sur mesure',
    price: null,
    pitch: 'Événement, film d’entreprise, suivi de chantier…',
    features: [
      'Tournage sur un ou plusieurs jours',
      'Scénario et repérage',
      'Montage et formats à la carte',
      'Devis détaillé sous 48 h',
    ],
  },
];

export const launchOffers = {
  pros: "Offre de lancement : votre première vidéo immo à 149 € (nouvelles agences et hébergements, jusqu'au 31 mars 2027).",
  particuliers: 'Mariage 2027 réservé avant le 31 décembre 2026 : teaser vertical offert.',
};

export const servicesParticuliers = [
  { title: 'Mariage', text: "L'arrivée des invités, le lieu de réception, la photo de groupe vue du ciel : des images que personne d'autre n'aura." },
  { title: 'Fêtes et anniversaires', text: 'Un anniversaire marquant, une fête de famille, une réunion entre amis : un souvenir original à revoir ensemble.' },
  { title: 'Demande en mariage', text: 'Un moment secret, un décor naturel vendéen, et une vidéo qui raconte le « oui ».' },
  { title: 'Votre maison, votre terrain', text: 'Une vue aérienne de votre propriété ou de votre région, pour le plaisir ou pour la garder en mémoire.' },
];

export const servicesPros = [
  { id: 'immobilier', title: 'Immobilier', text: 'Démarquez vos annonces : terrain, environnement, accès, proximité de la mer. Les acheteurs comprennent le bien en quelques secondes.' },
  { id: 'tourisme', title: 'Tourisme et hébergement', text: 'Campings, gîtes, hôtels : une vidéo courte qui donne envie de réserver, prête pour votre site et les plateformes.' },
  { id: 'entreprise', title: "Vidéo d'entreprise", text: 'Présentez vos sites, vos chantiers ou votre savoir-faire de façon spectaculaire. Idéal pour la marque employeur.' },
  { id: 'evenementiel', title: 'Événementiel et festivals', text: "Aftermovie et contenus réseaux livrés vite, pendant que l'événement est encore dans toutes les têtes." },
  { id: 'sport', title: 'Événements sportifs', text: 'Suivi de course, vues d’ensemble, mise en valeur des partenaires : le sport sous son meilleur angle.' },
  { id: 'chantier', title: 'BTP et suivi de chantier', text: "Des points de vue réguliers pour suivre l'avancement et communiquer sur vos réalisations." },
];

export const steps = [
  { title: 'Vous me parlez de votre projet', text: 'Par le formulaire, téléphone ou WhatsApp. On définit ensemble ce que vous voulez montrer.' },
  { title: 'Je vous envoie un devis clair', text: `Sous ${site.responseDelay}, avec le contenu exact, le prix et le délai de livraison.` },
  { title: 'Je filme, en toute sécurité', text: 'Je gère les autorisations de vol et la météo. Vous profitez de votre événement.' },
  { title: 'Vous recevez votre vidéo', text: 'Montée, étalonnée, aux bons formats. Prête à être partagée.' },
];

// Réalisations : ajoutez l'identifiant YouTube (youtubeId) quand les vidéos sont en ligne.
export const videos = [
  { title: 'Mariage au domaine', category: 'Mariage', audience: 'particuliers', youtubeId: '', context: 'Film de 4 min + teaser Instagram' },
  { title: 'Villa en bord de mer', category: 'Immobilier', audience: 'pros', youtubeId: '', context: 'Clip annonce de 45 s + 15 photos' },
  { title: 'Camping sur la côte', category: 'Tourisme', audience: 'pros', youtubeId: '', context: 'Vidéo de présentation, 3 formats' },
  { title: 'Course sur le littoral', category: 'Sport', audience: 'pros', youtubeId: '', context: 'Aftermovie de 2 min' },
  { title: 'Anniversaire en famille', category: 'Fête', audience: 'particuliers', youtubeId: '', context: 'Clip souvenir de 1 min 30' },
  { title: 'Chantier en cours', category: 'Entreprise', audience: 'pros', youtubeId: '', context: 'Suivi mensuel, vue fixe répétée' },
];

export const faq = [
  { q: 'Est-ce que c’est légal ?', a: "Oui. Je suis télépilote titulaire du CATS (certificat d'aptitude théorique de télépilote). Je déclare mes vols, je demande les autorisations nécessaires selon la zone et je suis couvert par une assurance responsabilité civile professionnelle." },
  { q: 'Que se passe-t-il s’il pleut ou s’il y a trop de vent ?', a: "La sécurité passe avant tout. Si la météo empêche le vol, on convient ensemble d'une solution : report à une date proche sans frais, ou adaptation du programme." },
  { q: 'Où intervenez-vous ?', a: "Partout en Vendée et dans les Pays de la Loire. Le déplacement est inclus dans un rayon de 50 km, au-delà il est indiqué clairement dans le devis." },
  { q: 'Quels sont les délais de livraison ?', a: "72 h pour une prestation immobilière, environ 2 semaines pour un film de mariage ou d'entreprise. Le délai exact figure dans votre devis." },
  { q: 'Le drone gêne-t-il les invités ?', a: "Non. Les vols sont courts, planifiés avec vous et réalisés à distance de sécurité. La plupart des invités l'oublient vite… jusqu'à ce qu'ils voient le film." },
  { q: 'Puis-je choisir la musique ?', a: 'Oui, on la choisit ensemble parmi des musiques libres de droits, pour que vous puissiez partager la vidéo partout sans problème.' },
  { q: 'Puis-je utiliser la vidéo pour ma communication ?', a: "Oui. Les formules professionnelles incluent les droits d'utilisation commerciale (site, réseaux, publicité)." },
  { q: 'Comment se passe le paiement ?', a: 'Un acompte confirme la réservation, le solde est réglé à la livraison. Une facture est fournie pour chaque prestation.' },
];
