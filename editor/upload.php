<?php

print_r($_POST);
$xml = $_POST['xml'];
$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml);
$dom->save("elements.xml");

?>
