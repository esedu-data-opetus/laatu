<html>
<head>
    <title>Registration</title>
</head>
<body>
<?php
require_once("db_connect.php");
if (!isset($_POST['submit'])) {
?>  <!-- The HTML registration form -->
    <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
        Nimi: <input type="text" name="username" /><br />
        Salasana: <input type="password" name="password" /><br />
        <input type="submit" name="submit" value="Register" />
    </form>
    <p>Laita nimesi muotoon: Etunimi Sukunimi</p>
<?php
  } else {
    if ($conn->connect_errno) {
      echo "<p>MySQL error no {$mysqli->connect_errno} : {$mysqli->connect_error}</p>";
      exit();
    }



    else {
      $username   = $_POST['username'];
      $password   = md5($_POST['password']);
        # insert data into mysql database
        $sql = "INSERT  INTO `users` (`username`, `password`)
                VALUES ('{$username}', '{$password}')";

        if ($conn->query($sql)) {
            //echo "New Record has id ".$mysqli->insert_id;
            echo "<p>Rekisteröinti onnistui.</p>
            <a href='vastaukset.php'>Vastaussivu kirjautuminen</a><br>
            <a href='editor.php'>Editori kirjautuminen</a>";
        } else {
            echo "<p>MySQL error no {$conn->errno} : {$conn->error}</p>";
            exit();
        }
    }
}
?>
</body>
</html>
