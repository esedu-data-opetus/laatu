<?php

$x = intval($_GET["n"]);
$lista = simplexml_load_file('C:/xampp/htdocs/laatumaster/laatu2/esimiehet.xml');

unset($lista->esimiehet->esimies[$x]);

// Tallennus siistimmin
$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($lista->asXML());
$dom->save('C:/xampp/htdocs/laatumaster/laatu2/esimiehet.xml');

header("Location: index.php");
