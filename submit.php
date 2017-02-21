<?php
include("db_connect.php");
$nimi = htmlspecialchars($_POST['nimi']);
$datetime = date_create()->format('Y-m-d H:i:s');
$esimies = htmlspecialchars($_POST['esimies']);
$pageNumber = $_POST['pageNumber'];

foreach($_POST as $key => $value) {
    if($value == "totta" || $value == "tarua") {

      $sql = "INSERT INTO vastaukset (Nimi,Esimies,Vastaus, Aika, PageNumber) VALUES ('$nimi', '$esimies', '$value' , '$datetime' , '$pageNumber' );";
      echo $sql;
      mysqli_query($conn, $sql);
}
  }





$conn->close();
?>
