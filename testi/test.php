<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script>
    $(function() {
      $( ".accordion" ).accordion({
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
        collapsible: true,
        active: false,
        heightStyle: "fill"
      });
    });

    var teksti = "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
    var otsikko = "Otsikko";
  </script>
  <style>
    #container{
      width: 450px;
      height: 450px;
      border: 1px solid black;
    }
    #wrapper{
      width: 1000px;
      height: 500px;
      padding: 10px;
      border: 1px solid black;
    }
  </style>

</head>

<body>

      <div style="height: 400px; width: 300px; border: 1px solid black;">

        <div class="accordion">
          <h3 id="hotsikko1"></h3>
          <div class="accordion-panel">
            <a id="hteksti1"></a>
          </div>
          <h3 id="hotsikko2"></h3>
          <div class="accordion-panel">
            <a id="hteksti2"></a>
          </div>
          <h3 id="hotsikko3"></h3>
          <div class="accordion-panel">
            <a id="hteksti3"></a>
          </div>
          <h3 id="hotsikko4"></h3>
          <div class="accordion-panel">
            <a id="hteksti4"></a>
          </div>
        </div>

      </div>
      <script>
        document.getElementById("hotsikko1").innerHTML = otsikko;
        document.getElementById("hotsikko2").innerHTML = otsikko;
        document.getElementById("hotsikko3").innerHTML = otsikko;
        document.getElementById("hotsikko4").innerHTML = otsikko;
        document.getElementById("hteksti1").innerHTML = teksti;
        document.getElementById("hteksti2").innerHTML = teksti;
        document.getElementById("hteksti3").innerHTML = teksti;
        document.getElementById("hteksti4").innerHTML = teksti;
      </script>
</body>

</html>
