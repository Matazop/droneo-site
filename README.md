# Droneo.fr

Site vitrine de Droneo : vidéos aériennes sur mesure en Vendée, par Mathieu Azzopardi, télépilote certifié.

## Modifier les contenus

Presque tout se trouve dans `src/data/site.ts` : coordonnées, offres et prix, prestations, vidéos des réalisations, FAQ.
Les éléments marqués « À COMPLÉTER » sont provisoires.

- Ajouter une vidéo : renseigner son identifiant YouTube (`youtubeId`) dans la liste `videos`.
- Vidéo de fond de l'accueil : déposer un MP4 dans `public/video/` et renseigner `heroVideo`.
- Adresse qui reçoit les demandes de devis : `public/devis.php`.

## Fonctionnement

- Site statique [Astro](https://astro.build).
- À chaque envoi sur `main`, GitHub Actions construit le site et publie le résultat sur la branche `hostinger`.
- Hostinger (Déploiement à partir de GitHub) est relié à la branche `hostinger`.
- Le formulaire de devis est envoyé par `devis.php` (PHP de Hostinger).

## En local

```
npm install
npm run dev
```
