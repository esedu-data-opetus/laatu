<?php

print_r($_FILES);


  $target_dir = "pics/";
  $image = $target_dir . basename($_FILES["file-0"]["name"]);
  
  move_uploaded_file($_FILES["file-0"]["tmp_name"], $image);
  
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
