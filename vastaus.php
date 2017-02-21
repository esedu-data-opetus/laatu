<?php
include("db_connect.php");

$sql = "SELECT * FROM vastaukset";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Nimi:" . $row["Nimi"]. "Esimies:" . $row["Esimies"]. "Vastaus:" . $row["Vastaus"]. "Aika:" . $row["Aika"]. "Sivu numero:" . $row["PageNumber"]. "<br>";
    }}
    $conn->close();
    ?>
