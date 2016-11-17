<?php
if (!empty($_GET["esimies"]))
  $tuote = $_GET["esimies"];
else {
  header("Location: index.php");
  die("Die!");
}

$lista = simplexml_load_file('C:/xampp/htdocs/laatumaster/laatu2/esimiehet.xml');

$uusiTuote = $lista->esimiehet->addChild('esimies', $tuote);

// Tallennus siistimmin
$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($lista->asXML());
$dom->save('C:/xampp/htdocs/laatumaster/laatu2/esimiehet.xml');

header("Location: index.php");
