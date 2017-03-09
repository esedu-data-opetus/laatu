<?php
include("db_connect.php");

$sql = "SELECT * FROM vastaukset";
$result = $conn->query($sql);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);


    $conn->close();
    ?>
