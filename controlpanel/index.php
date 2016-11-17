
<!DOCTYPE html>
<html>
<head>
  <style>
  .otettu, .otettu a { color: #999; }
  li a { color: #000; text-decoration: none; }
  </style>
</head>
<body>
<?php
$lista = simplexml_load_file('C:/xampp/htdocs/laatumaster/laatu2/esimiehet.xml');
echo "<h1>$lista->nimi</h1>";

$n = 0;
echo '<ul>';
foreach ($lista->esimiehet->children() as $asia) {

  // tarkistetaan onko tuotteella otettu="on" -atribuutti

  echo "<li>".$asia."
          <a href=\"poistaTuote.php?n=".$n++."\">poista</a>
        </li>";
}
echo '</ul>';
?>

<form method="get" action="lisaaTuote.php">
  <input type="text" name="esimies" placeholder="Lisää esimies" />
  <input type="submit" value="Lisää" />
</form>
<br>

<h1> Vastaukset kyselyyn </h1>
<?php


$servername = "paja.esedu.fi";
$username = "laatu";
$password = "K@tt1m@t1k@1nen";
$dbname = "laatuDB";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$query = "SELECT Nimi, Id FROM kysely";

$result = $conn->query($query);
while($row = mysqli_fetch_assoc($result))
{
   echo "<a href='vastausinfo.php?id=". $row['Id']. "'>". $row['Nimi']. "</a></br>";
}
?>







</body>
</html>
