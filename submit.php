<?php
include("db_connect.php");
$nimi = htmlspecialchars($_POST['nimi']);
$datetime = date_create()->format('Y-m-d H:i:s');
$esimies = htmlspecialchars($_POST['esimies']);
$pageNumber = $_POST['pageNumber'];
$kysymysNumero = 1;

foreach($_POST as $key => $value) {
    if($value == "Totta" || $value == "Tarua") {

      $sql = "INSERT INTO vastaukset (Nimi,Esimies,Vastaus, Aika, PageNumber, KysymysNumero) VALUES ('$nimi', '$esimies', '$value' , '$datetime' , '$pageNumber', '$kysymysNumero' );";
      echo $vastaus;
      mysqli_query($conn, $sql);
      $kysymysNumero++;
}
  }





$conn->close();
?>
