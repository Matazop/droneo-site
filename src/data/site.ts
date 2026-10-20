// Le contenu du site est dans src/content/*.json et se modifie depuis le back office (Pages CMS).
// Ce fichier lit ces contenus et prépare quelques valeurs dérivées.
import reglages from '../content/reglages.json';
import accueil from '../content/accueil.json';
import particuliers from '../content/particuliers.json';
import professionnels from '../content/professionnels.json';
import realisations from '../content/realisations.json';
import faqData from '../content/faq.json';
import aPropos from '../content/a-propos.json';
import devis from '../content/devis.json';

const digits = (s: string) => (s || '').replace(/\D/g, '');
const intl = (s: string) => {
  const d = digits(s);
  return d.startsWith('0') ? '33' + d.slice(1) : d;
};

// Accepte un identifiant YouTube ou un lien complet (youtube.com/watch?v=…, youtu.be/…, shorts/…)
export function youtubeId(v?: string) {
  if (!v) return '';
  const m = v.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : v.trim();
}

export const site = {
  name: reglages.nom,
  pilot: reglages.pilote,
  email: reglages.email,
  phone: reglages.telephone,
  phoneIntl: '+' + intl(reglages.telephone),
  whatsapp: intl(reglages.whatsapp || reglages.telephone),
  instagram: reglages.instagram,
  facebook: reglages.facebook,
  linkedin: reglages.linkedin,
  zone: reglages.zone,
  responseDelay: reglages.delaiReponse,
  radius: reglages.rayonDeplacement,
  legal: { statut: reglages.statut, siret: reglages.siret, adresse: reglages.adresse, assureur: reglages.assureur },
  heroVideo: accueil.videoFond,
  demoYoutubeId: youtubeId(accueil.bandeDemo),
};

export type Offer = { name: string; price: number | null; pitch: string; features: string[]; featured?: boolean };
const toOffers = (l: any[]): Offer[] =>
  l.map((o) => ({ name: o.nom, price: o.prix ? Number(o.prix) : null, pitch: o.accroche, features: o.inclus || [], featured: !!o.miseEnAvant }));

export { accueil, particuliers, professionnels, aPropos, devis };

export const pillars = accueil.piliers.map((p: any) => ({ title: p.titre, text: p.texte, icon: p.icone }));
export const steps = accueil.etapes.map((p: any) => ({ title: p.titre, text: p.texte }));
export const offersParticuliers = toOffers(particuliers.formules);
export const offersPros = toOffers(professionnels.formules);
export const launchOffers = { particuliers: particuliers.offreLancement, pros: professionnels.offreLancement };
export const servicesParticuliers = particuliers.occasions.map((x: any) => ({ title: x.titre, text: x.texte, examples: x.exemples || '', icon: x.icone || 'spark' }));
export const servicesPros = professionnels.secteurs.map((x: any) => ({ id: x.ancre, title: x.titre, text: x.texte, examples: x.exemples || '', icon: x.icone || 'spark' }));
export const videos = (realisations as any[]).map((v) => ({
  title: v.titre,
  category: v.categorie,
  audience: v.public,
  youtubeId: youtubeId(v.youtube),
  context: v.description,
  thumbnail: v.miniature,
  home: !!v.accueil,
}));
export const faq = (faqData as any[]).map((f) => ({ q: f.question, a: f.reponse }));
export const testimonials = (accueil.temoignages || []) as { nom: string; contexte?: string; texte: string }[];
