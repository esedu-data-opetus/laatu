<?php
  $xml = $_POST['xml'];

  echo $xml;

  $target_dir = "/pics";
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

$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($lista->asXML());
$dom->save("elements.xml");

//header("Location: editor.php");
?>
