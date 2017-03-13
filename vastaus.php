<?php
include("db_connect.php");
$esimies = $_POST['esimies'];
$sql = "SELECT * FROM vastaukset WHERE Esimies = '$esimies'";
$result = $conn->query($sql);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    //$rows = json_encode(array('item' => $r, JSON_FORCE_OBJECT));

    $rows[] = $r;


}
//echo $rows;
print json_encode($rows);

    $conn->close();
    ?>
