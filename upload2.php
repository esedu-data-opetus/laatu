<?php
function upload($target_dir, $image){
  echo $target_dir . "<br>";
  echo $image . "<br>";
  $uploadOk = 1;
  $imageFileType = pathinfo($image,PATHINFO_EXTENSION);

  if (file_exists($image)) {
    $uploadOk = 0;
  }

  if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["file-0"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        $uploadOk = 0;
    }
  }

  if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
    $uploadOk = 0;
  }

  if ($uploadOk === 1) {
    move_uploaded_file($_FILES["file-0"], $image);
    return true;
  } else{
    return false;
  }
}
?>
