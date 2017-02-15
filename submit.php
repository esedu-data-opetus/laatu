<?php
include("db_connect.php");

$nimi = htmlspecialchars($_POST['nimi']);
$datetime = date_create()->format('Y-m-d H:i:s');
$esimies = htmlspecialchars($_POST['esimies']);

foreach($_POST as $key => $value) {
    if(strlen($key) == 5) {
      $sql = "INSERT INTO kysely (Nimi,Esimies,Vastaus,Oikea vastaus, Aika) VALUES ('$nimi', '$esimies', '$key' , '$oikeavastaus' , '$datetime');";
      mysqli_query($conn, $sql);
}
  }
}





$conn->close();
?>
