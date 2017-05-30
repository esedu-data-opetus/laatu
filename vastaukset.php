<?php
session_start();
if(isset($_SESSION['login_user'])){
$user = $_SESSION['login_user'];

}else{
  Header("Location: vastauslogin.php");
}
include("db_connect.php");
echo "<a href='logout.php'>Kirjaudu ulos</a>";
$sql1=  "SELECT rooli FROM users WHERE username='$user'";

$result1 = $conn->query($sql1);
  if ($result1->num_rows > 0) {
    while($row1 = $result1->fetch_assoc()) {
      $rooli = $row1["rooli"];
    }
  }
  echo $row1["rooli"];
      if($rooli==3){
        $sql2 = "select Esimies, sum(Oikein), sum(Vaarin) from vastaukset group by Esimies" ;
        $result2 = $conn->query($sql2);
        echo "<table>";
        echo "<tr><th>Esimies</th><th>Oikein</th><th>Väärin</th></tr>";
        while($row2 = $result2->fetch_assoc()) {
          echo "<tr><td>" . $row2['Esimies'] . "</td><td>" . $row2['sum(Oikein)'] . "</td><td>" . $row2['sum(Vaarin)'] . "</td></tr>";
        }
        echo "</table>";
            } else {

$sql = "SELECT * FROM vastaukset WHERE Esimies='$user'";
$result = $conn->query($sql);
echo "<table>";
echo "<tr><th>Nimi</th><th>Oikein</th><th>Väärin</th></tr>";
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Nimi"].
              "</td><td>: " . $row["Oikein"].
               "</td><td>". $row['Vaarin'] . "</td></tr>";
    }
} else {
    echo "0 1231231";
}
}

mysqli_close($conn);
?>
