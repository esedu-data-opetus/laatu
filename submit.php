<?php
$servername = "paja.esedu.fi";
$username = "laatu";
$password = "K@tt1m@t1k@1nen";
$dbname = "laatuDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
  $answer1 = ($_POST['kysymys1']);
  $answer2 = ($_POST['kysymys2']);
  $answer3 = ($_POST['kysymys3']);
  $answer4 = ($_POST['kysymys4']);
  $answer5 = ($_POST['kysymys5']);
  $nimi = htmlspecialchars($_POST['nimi']);
  $datetime = date_create()->format('Y-m-d H:i:s');
  $esimies = htmlspecialchars($_POST['esimies']);

  $sql = "INSERT INTO kysely (Nimi, Datetime, Esimies) VALUES ('$nimi', '$datetime', '$esimies');";
  mysqli_query($conn, $sql);
  
  $last_id = mysqli_insert_id($conn);
  $sql1 = "INSERT INTO vastaukset (vastaus1, vastaus2, vastaus3, vastaus4, vastaus5, kysely_id) VALUES ('$answer1', '$answer2', '$answer3' , '$answer4' , '$answer5', '$last_id');";
  mysqli_query($conn, $sql1);

$conn->close();
?>
