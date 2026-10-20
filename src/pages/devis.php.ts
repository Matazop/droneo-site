// Génère devis.php avec l'email de contact défini dans le back office.
import template from '../server/devis-template.php?raw';
import { site } from '../data/site';

export function GET() {
  const email = site.email.replace(/[^\w.@+-]/g, '');
  return new Response(template.replace('__EMAIL__', email), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
