<?php
include("db_connect.php");
$id = $_GET['id'];
$sql = "UPDATE users SET rooli = rooli+1 WHERE id = $id";
mysqli_query($conn, $sql);
header('Location: editor.php');


$conn->close();
?>
