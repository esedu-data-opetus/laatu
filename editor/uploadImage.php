<?php

  print_r($_FILES);

  $target_dir = "pics/";

  foreach ($_FILES as $key => $file){
    $image = $target_dir . basename($file["name"]);
    move_uploaded_file($file["tmp_name"], $image);
  }

/*
  if ( file_exists($image) ){
    echo "File exists";
    include 'upload2.php';
    if (upload($target_dir, $image) === true){
      echo "Upload is ok";
    } else {
      echo "Mikää ei toimi";
    }
  }
*/
?>
