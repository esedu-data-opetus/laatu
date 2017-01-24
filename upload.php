<?php
  $target_dir = "php_ini_scanned_files/";
  $image = $target_dir . basename($_FILES["kuva"]["name"]);

  if ( file_exists($_FILES['kuva']['tmp_name']) ){
    echo "File exists";
    include 'upload2.php';
    if (upload($target_dir, $image) === true){
      echo "Upload is ok";
    } else {
      echo "Mikää ei toimi";
      header("Location: editor.php");
    }
  }

$lista = simplexml_load_file('elements.xml');

$uusikuva = $lista->sivut->sivu->kuva;
$uusikuva->addChild('linkki', $image);

$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($lista->asXML());
$dom->save("elements.xml");

header("Location: editor.php");
?>
