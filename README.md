# Droneo.fr

Site vitrine de Droneo : vidéos aériennes sur mesure en Vendée, par Mathieu Azzopardi, télépilote certifié.

## Modifier les contenus

Le contenu se modifie depuis le back office **Pages CMS** : https://app.pagescms.org (connexion avec GitHub, dépôt `droneo-site`).

- Les contenus sont stockés dans `src/content/*.json`.
- La configuration du back office est dans `.pages.yml`.
- Les images et vidéos envoyées depuis le back office vont dans `public/img/uploads/`.
- L'email de contact des réglages reçoit aussi les demandes de devis (`devis.php` est généré à partir de `src/server/devis-template.php`).

## Fonctionnement

- Site statique [Astro](https://astro.build).
- À chaque envoi sur `main`, GitHub Actions construit le site et publie le résultat sur la branche `hostinger`.
- Hostinger (Déploiement à partir de GitHub) est relié à la branche `hostinger`.
- Le formulaire de devis est envoyé par `devis.php` (PHP de Hostinger).
- Chaque enregistrement dans le back office crée un commit sur `main`, ce qui republie le site.

## En local

```
npm install
npm run dev
```
