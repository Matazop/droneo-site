<?php
// Envoi du formulaire de devis par email (hébergement Hostinger, PHP).
// Fichier généré à partir des réglages du back office (email de contact).
$destinataire = '__EMAIL__';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: /devis/'); exit; }

// Anti-spam : champ invisible rempli par les robots
if (!empty($_POST['site_web'])) { header('Location: /devis/merci/'); exit; }

function champ($k, $max = 2000) {
  $v = isset($_POST[$k]) ? trim((string)$_POST[$k]) : '';
  $v = str_replace(["\r", "\0"], '', $v);
  return mb_substr($v, 0, $max);
}

$nom = champ('nom', 120);
$email = champ('email', 160);
if ($nom === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['rgpd'])) {
  header('Location: /devis/erreur/'); exit;
}

$profil = champ('profil', 20) === 'pros' ? 'Professionnel' : 'Particulier';
$lignes = [
  'Profil' => $profil,
  'Type de projet' => champ('type', 80),
  'Formule' => champ('formule', 80),
  'Date' => champ('date', 80),
  'Lieu' => champ('lieu', 120),
  'Budget' => champ('budget', 40),
  'Nom' => $nom,
  'Société' => champ('societe', 120),
  'Email' => $email,
  'Téléphone' => champ('tel', 40),
  'Message' => champ('message', 4000),
];
$corps = "Nouvelle demande de devis depuis droneo.fr\n\n";
foreach ($lignes as $k => $v) { if ($v !== '') $corps .= "$k : $v\n"; }

$sujet = '=?UTF-8?B?' . base64_encode("Demande de devis : $profil, " . ($lignes['Type de projet'] ?: 'projet')) . '?=';
$entetes = implode("\r\n", [
  'From: Droneo <no-reply@droneo.fr>',
  'Reply-To: ' . str_replace(["\n", "\r"], '', $email),
  'Content-Type: text/plain; charset=UTF-8',
]);

$ok = mail($destinataire, $sujet, $corps, $entetes);
header('Location: ' . ($ok ? '/devis/merci/' : '/devis/erreur/'));
exit;
