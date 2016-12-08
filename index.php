<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
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
      <h1> Sisältö </h1>
      <div id="navlist"></div>
    </div>
    <div class="header">
      <img src="pics/esedu_logo.png" style="float: left;"/>
      <a id="header_text1">Etelä-Savon ammattiopisto</a><br>
      <a id="header_text2">South Savo Vocational College</a>
    </div>

    <div id='carousel-custom' class="carousel slide" data-interval="false">

    <!-- Sivujen indikaattorit -->
      <ol id="indicators" class="carousel-indicators"></ol>

      <!-- Sivut -->
      <div id="carousel-inner" class="carousel-inner" role="listbox"></div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-custom" role="button" data-slide="prev" onClick="window.setTimeout(checkActivity, 100);">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <button id="menuButton"> <img src="pics/menuicon.png"/> </button>
      <a class="right carousel-control" href="#carousel-custom" role="button" data-slide="next" onClick="window.setTimeout(checkActivity, 100);">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>

  <!-- lisätyt linkit (2) -->
  <script src="js/bootstrap.min.js"></script>
</body>
</html>
