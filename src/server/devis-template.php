<?php
// Envoi du formulaire de devis par email (hébergement Hostinger, PHP).
// Fichier généré à partir des réglages du back office (email de contact).
$destinataire = '__EMAIL__';

$json = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;
function repondre($ok, $erreur = '') {
  global $json;
  if ($json) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => $ok, 'error' => $erreur]);
  } else {
    header('Location: ' . ($ok ? '/devis/merci/' : '/devis/erreur/'));
  }
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: /devis/'); exit; }

// Anti-spam : champ invisible rempli par les robots
if (!empty($_POST['site_web'])) { repondre(true); }

function champ($k, $max = 2000) {
  $v = isset($_POST[$k]) ? trim((string)$_POST[$k]) : '';
  $v = str_replace(["\r", "\0"], '', $v);
  return mb_substr($v, 0, $max);
}

$nom = champ('nom', 120);
$email = champ('email', 160);
if ($nom === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['rgpd'])) {
  repondre(false, 'champs');
}

$tel = champ('tel', 40);
if ($tel === '') {
  $local = preg_replace('/\D/', '', champ('tel_local', 20));
  $tel = trim(champ('indicatif', 6) . ' ' . $local);
}

$date = champ('date', 20);
if (champ('date_flexible', 5) === 'oui' || $date === '') {
  $date = 'Pas encore fixée';
} elseif (preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $date, $m)) {
  $date = "$m[3]/$m[2]/$m[1]";
}

$profil = champ('profil', 20) === 'pros' ? 'Professionnel' : 'Particulier';
$lignes = [
  'Profil' => $profil,
  'Prestation' => champ('prestation', 80),
  'Détails' => champ('details', 4000),
  'Formule' => champ('formule', 80),
  'Date' => $date,
  'Lieu' => champ('lieu', 200),
  'Budget' => champ('budget', 40),
  'Nom' => $nom,
  'Société' => champ('societe', 120),
  'Email' => $email,
  'Téléphone' => $tel,
  'Message' => champ('message', 4000),
];
$corps = "Nouvelle demande de devis depuis droneo.fr\n\n";
foreach ($lignes as $k => $v) { if ($v !== '') $corps .= "$k : $v\n"; }

$sujet = '=?UTF-8?B?' . base64_encode("Demande de devis : $profil, " . ($lignes['Prestation'] ?: 'projet')) . '?=';
$entetes = implode("\r\n", [
  'From: Droneo <no-reply@droneo.fr>',
  'Reply-To: ' . str_replace(["\n", "\r"], '', $email),
  'Content-Type: text/plain; charset=UTF-8',
]);

repondre(mail($destinataire, $sujet, $corps, $entetes) ? true : false, 'mail');
