<?php
session_start();
if(isset($_SESSION['login_user'])){
$user = $_SESSION['login_user'];

}else{
  Header("Location: login.php");
}
include("db_connect.php");

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

mysqli_close($conn);
?>
