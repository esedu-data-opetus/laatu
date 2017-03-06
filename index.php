<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <title></title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <!-- lisätyt linkit -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js"></script>

</head>
<body>

  <div id="wrapper">
    <div id="navbaar">
      <div id="navtitle">
        <h1> Sisältö </h1>
      </div>
      <div id="closebutton">
        <span class="glyphicon glyphicon glyphicon-remove" onclick="closeMenu();"></span>
      </div>
      <div id="navlist"></div>
    </div>
    <div class="header">
      <img class="header-image" src="pics/esedu_logo.png"/>
      <img class="header-image" src="pics/headertext.png"/>
      <button id="menuButton2" onclick="openMenu()"> <img src="pics/menuicon.png"/> </button>
    </div>

    <div id='carousel-custom' class="carousel slide" data-interval="false">

    <!-- Sivujen indikaattorit -->
      <ol id="indicators" class="carousel-indicators"></ol>

      <!-- Sivut -->
      <div id="carousel-inner" class="carousel-inner" role="listbox"></div>

      <!-- Controls -->
      <a id="control1" class="left carousel-control" href="#carousel-custom" role="button" data-slide="prev" onClick="navFunc()">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a id="control2" class="right carousel-control" href="#carousel-custom" role="button" data-slide="next" onClick="navFunc()">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <div id="mob-control">
        <a id="control3" class="left carousel-control" href="#carousel-custom" role="button" data-slide="prev" onClick="navFunc()">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <div id="bWrapper">
          <button id="menuButton" onclick="openMenu()"> <img src="pics/menuicon.png"/> </button>
        </div>
        <a id="control4" class="right carousel-control" href="#carousel-custom" role="button" data-slide="next" onClick="navFunc()">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>

  <!-- lisätyt linkit (2) -->
  <script src="js/bootstrap.min.js"></script>
  </body>
</html>
