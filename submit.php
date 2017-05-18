<?php
include("db_connect.php");

$pageNumber = $_POST['pageNumber'];
$vaarin = $_POST['vääräVastaus'];
$oikein = $_POST['oikeaVastaus'];
$esimies = $_POST['esimies'];
$formnimi = $_POST['formNimi'];




$sql = "INSERT INTO vastaukset (Nimi, Esimies, Oikein, PageNumber, Vaarin)
VALUES ('$formnimi', '$esimies', '$oikein', '$pageNumber', '$vaarin')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
