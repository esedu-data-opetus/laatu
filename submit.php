<?php
include("db_connect.php");
print_r($_POST);
$nimi = htmlspecialchars($_POST['nimi']);
$datetime = date_create()->format('Y-m-d H:i:s');
$esimies = htmlspecialchars($_POST['esimies']);

foreach($_POST as $key => $value) {
    if($value == "totta" || $value == "tarua") {

      $sql = "INSERT INTO vastaukset (Nimi,Esimies,Vastaus, Aika) VALUES ('$nimi', '$esimies', '$value' , '$datetime');";
      echo $sql;
      mysqli_query($conn, $sql);
}
  }





$conn->close();
?>
