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
      echo $row1["rooli"];}}
      if($row1["rooli"]===3){
        $sql2 = "SELECT Esimies FROM vastaukset";
        $result2 = $conn->query($sql2);
          if ( $result2->num_rows > 0) {
            // output data of each row
            while($row2 = $result2->fetch_assoc()) {
              $esimies = $row2['Esimies'];
              $sql3 = "SELECT Vaarin, Oikein, Esimies FROM vastaukset WHERE Esimies='$esimies'";
              $result3 = $conn->query($sql3);
              if ($result3->num_rows > 0) {
                while($row3 = $result3->fetch_assoc()) {
                  echo  "</br> Esimies: " . $row3['Esimies'] . " Oikein: " . $row3['Oikein'] . " Väärin: " . $row3['Vaarin'] . "</br>";

                }}
              }}
            } else {

$sql = "SELECT * FROM vastaukset WHERE Esimies='$user'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "</br>Nimi: " . $row["Nimi"].
              " - Esimies: " . $row["Esimies"].
              " - Oikein: " . $row["Oikein"].
               " - Väärin: ". $row['Vaarin'] .
                " - Aika: " . $row["Aika"].
                 " - Sivunumero: " . $row['PageNumber'];
    }
} else {
    echo "0 results";
}
}

mysqli_close($conn);
?>
