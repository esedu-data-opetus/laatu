<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Laatu editor</title>

  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">
  <script src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
  <script src="vastaukset.js"></script>
  <link rel="stylesheet" type="text/css" href="vastaukset.css">
</head>
<body>
  <?php
  if (!isset($_POST['submit'])){
  ?>
  <!-- The HTML login form -->
      <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
          Etu ja sukunimi: <input type="text" name="username" id="username" /><br />
          Salasana: <input type="password" name="password" /><br />

          <input type="submit" name="submit" value="Login" />
      </form>
      <a href="register.php">Tee uusi käyttäjä</a>
  <?php
  } else {
      require_once("db_connect.php");
      if ($conn->connect_errno) {
          echo "<p>MySQL error no {$conn->connect_errno} : {$conn->connect_error}</p>";
          exit();
      }

      $username = $_POST['username'];
      $password = $_POST['password'];

      $sql = "SELECT * from users WHERE username LIKE '{$username}' AND password LIKE '{$password}' AND rooli>1 LIMIT 1 ";
      $result = $conn->query($sql);
      if (!$result->num_rows == 1) {
          echo "<a href='vastaukset.php'>Pääsy evätty</p>";
      } else {
          echo "<div id='wrapper'>
            <table id='example' class='display' cellspacing='0' width='100%'>
                    <thead>
                        <tr>
                            <th>Nimi</th>
                            <th>Esimies</th>
                            <th>Vastaus</th>
                            <th>Aika</th>
                            <th>PageNumber</th>
                            <th>KysymysNumero</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Nimi</th>
                            <th>Esimies</th>
                            <th>Vastaus</th>
                            <th>Aika</th>
                            <th>PageNumber</th>
                            <th>KysymysNumero</th>
                        </tr>
                    </tfoot>
                </table>
              </div>";
            }

      }

  ?>




</body>
</html>
