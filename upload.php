<?php
  //print_r($_POST);
  $xml = $_POST['xml'];

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

$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml);
$dom->save("elements.xml");

?>
