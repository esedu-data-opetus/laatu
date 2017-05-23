<?php
session_start();
if(isset($_SESSION['login_user'])){
$user = $_SESSION['login_user'];

}else{
  Header("Location: vastauslogin.php");
}
include("db_connect.php");

$sql1=  "SELECT rooli FROM users where username='$user'";

$result1 = $conn->query($sql1);
  if ($result1->num_rows > 0) {
    while($row1 = $result1->fetch_assoc()) {
      if($row1["rooli"]>2){
        $sql2 = "SELECT Esimies from vastaukset";
        $result2 = $conn->query($sql2);
          }if ( $result2->num_rows > 0) {
            // output data of each row
            while($row2 = $result2->fetch_assoc()) {
              $esimies = $row2['Esimies'];
              echo "Esimies: " . $row2['Esimies'] . "</br>";
              $sql3 = "SELECT Vaarin, Oikein FROM Vastaukset WHERE Esimies='$esimies'";
              $result3 = $conn->query($sql3);
              if ($result3->num_rows > 0) {
                while($row3 = $result3->fetch_assoc()) {
                  echo "Esimies: " . $row3['Esimies'] . "Oikein: " . $row3['Oikein'] . "Väärin: " . $row3['Vaarin'];

                }}
    }



      }
        }



}else {

$sql = "SELECT * FROM vastaukset WHERE Esimies='$user'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Nimi: " . $row["Nimi"].
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
