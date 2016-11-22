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
      <button id="menuButton"> <img src="pics/menuicon.png"/> </button>
    </div>

    <div id='carousel-custom' class="carousel slide" data-interval="false">

    <!-- Sivujen indikaattorit -->
      <ol id="indicators" class="carousel-indicators"></ol>

      <!-- Sivut -->
      <div id="carousel-inner" class="carousel-inner" role="listbox"></div>

        <!--
        Sivu1
        <div class="item active">
          <div>
            <p id="otsikko1" class="otsikko"></p>
            <img style="margin-left: 7%; width: 800px;" src="pics/Laatuympyra.gif"/>
          </div>
        </div>
        Sivu2
        <div class="item">
          <p id="otsikko2" class="otsikko"></p>
          <p id="teksti1" class="teksti"></p>
        </div>
        Sivu3
        <div class="item">
          <div>
            <p id="osaOtsikko1" class="otsikko"></p>
            <img style="margin-left: 7%; width: 800px;" src="pics/Laatuympyra.gif"/>
          </div>
        </div>
        Sivu4
        <div class="item">
          <div class="leftside">
            <p id="otsikko3" class="otsikko"></p>
            <p id="teksti2" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 230px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko1"></h3>
              <div>
                <a id="hTeksti1"></a>
              </div>
              <h3 id="hOtsikko2"></h3>
              <div>
                <a id="hTeksti2"></a>
              </div>
              <h3 id="hOtsikko3"></h3>
              <div>
                <a id="hTeksti3"></a>
              </div>
              <h3 id="hOtsikko4"></h3>
              <div>
                <a id="hTeksti4"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu5
        <div class="item">
          <div class="leftside">
            <p id="otsikko4" class="otsikko"></p>
            <p id="teksti3" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 400px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko5"></h3>
              <div>
                <a id="hTeksti5"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu6
        <div class="item">
          <p id="otsikko5" class="otsikko"></p>
          <p id="teksti4" class="teksti"></p>
          <div id="blocks">
            <a id="block5" class="draggable">Henkilöstösuunnitelma</a>
            <a id="block12" class="draggable">Oppimistulokset</a>
            <a id="block4" class="draggable">Opetussuunnitelma</a>
            <a id="block11" class="draggable">Asiakastulokset</a>
            <a id="block6" class="draggable">Opetus</a>
            <a id="block2" class="draggable">Hanketoiminta</a>
            <a id="block3" class="draggable">HEKS-keskustelut</a>
            <a id="block8" class="draggable">Työssäoppiminen</a>
            <a id="block10" class="draggable">Opiskelijapalautteet</a>
            <a id="block1" class="draggable">Oman työn kehittäminen</a>
            <a id="block9" class="draggable">Näyttötutkinto</a>
            <a id="block7" class="draggable">Ohjaus</a>
          </div>
          <div id="goals">
            <div id="goal1" class="droppable">Suunnittelu</div>
            <div id="goal2" class="droppable">Toteutus</div>
            <div id="goal3" class="droppable">Arviointi</div>
            <div id="goal4" class="droppable">Parantaminen</div>
          </div>
        </div>
        Sivu7
        <div class="item">
          <div class="leftside">
            <p id="otsikko6" class="otsikko"></p>
            <p id="teksti5" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 325px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko6"></h3>
              <div>
                <a id="hTeksti6"></a>
              </div>
              <h3 id="hOtsikko7"></h3>
              <div>
                <a id="hTeksti7"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu8
        <div class="item">
          <div class="leftside">
            <p id="otsikko7" class="otsikko"></p>
            <p id="teksti6" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 300px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko8"></h3>
              <div>
                <a id="hTeksti8"></a>
              </div>
              <h3 id="hOtsikko9"></h3>
              <div>
                <a id="hTeksti9"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu9
        <div class="item">
          <div class="leftside">
            <p id="otsikko8" class="otsikko"></p>
            <p id="teksti7" class="teksti"></p>
            <div id="vastauksetDiv" class="hidden">
              <p id="vastaukset" class="teksti"></p>
            </div>
          </div>
          <div class="rightside" style="overflow-y: hidden;">
            <h2> Totta vai Tarua? </h2>
            <p id="tottatarua">Totta</p>
            <p id="tottatarua">Tarua</p>
            <div id="vastauswrapper">
              <table class="tableborderform">
                <form name="FORM" method="post">
                  <tr>
                    <td>
                      <p id="kysymys">Aikaisemman osaamisen tunnistamisen ja tunnustamisen prosessikuvauksen mukaan ohjauskeskustelun käyminen on opiskelijan vastuulla</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys1" value="tarua">
                        <input id="radionappi" type="radio" name="kysymys1" value="totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Aikuiskoulutushaussa vastuuopettaja ja opintosihteeri vastaavat yhdessä mahdollisten hakijoiden informoinnista ja ohjaamisesta</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys2" value="tarua">
                        <input id="radionappi" type="radio" name="kysymys2" value="totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Opettajan vastuulla on ohjata opiskelijat vastaamaan opiskelijapalautekyselyihin (nuorten tulo-, olo- ja päättökyselyt, aikuiskoulutus OPAL ja AIPAL sekä kummankin koulutusmuodon opettajan henkilökohtainen palaute)</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys3" value="tarua">
                        <input id="radionappi" type="radio" name="kysymys3" value="totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Opiskelija tunnistaa olemassa olevan osaamisen</p>
                        <fieldset id="group">
                        <input id="radionappi" type="radio"  name="kysymys4" value="tarua">
                        <input id="radionappi" type="radio"  name="kysymys4" value="totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Oppisopimuskoordinaattori ja vastuuopettaja vastaavat yhdessä oppisopimuskoulutuksen tietopuolisen koulutuksen suunnittelusta</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio"  name="kysymys5" value="tarua">
                        <input id="radionappi" type="radio"  name="kysymys5" value="totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <?php /*
                        $lista = simplexml_load_file('esimiehet.xml');
                        echo '
                        Nimi:<br>
                        <input type="text" name="nimi" id="nimi"><br>
                        <select name="esimiehet" id="esimies">
                        <option value="Tyhja"> Esimies </option>';
                        foreach ($lista->esimiehet->children() as $asia) {
                          echo '<option value="esimies" name="esimies">' .$asia. '</option>';
                        };
                      */ ?>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="button" onClick="submitdata();">Submit</button>
                    </td>
                  </tr>
                </form>
              </table>
            </div>
          </div>
        </div>
        Sivu10
        <div class="item">
          <div>
            <p id="osaOtsikko2" class="otsikko"></p>
            <img style="margin-left: 7%; width: 800px;" src="pics/Laatuympyra.gif"/>
          </div>
        </div>
        Sivu11
        <div class="item">
          <div class="leftside">
            <p id="otsikko9" class="otsikko"></p>
            <p id="teksti8" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 300px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko10"></h3>
              <div>
                <a id="hTeksti10"></a>
              </div>
              <h3 id="hOtsikko11"></h3>
              <div>
                <a id="hTeksti11"></a>
              </div>
              <h3 id="hOtsikko12"></h3>
              <div>
                <a id="hTeksti12"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu12
        <div class="item">
          <div class="leftside">
            <p id="otsikko10" class="otsikko"></p>
            <p id="teksti9" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 350px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko13"></h3>
              <div>
                <a id="hTeksti13"></a>
              </div>
              <h3 id="hOtsikko14"></h3>
              <div>
                <a id="hTeksti14"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu13
        <div class="item">
          <div style="width: 975px; height: 450px; overflow-y: auto;">
            <p id="otsikko11" class="otsikko"></p>
            <p id="teksti10" class="teksti"></p>
          </div>
        </div>
        Sivu14
        <div class="item">
          <div class="leftside">
            <p id="otsikko12" class="otsikko"></p>
            <p id="teksti11" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 350px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko15"></h3>
              <div>
                <a id="hTeksti15"></a>
              </div>
              <h3 id="hOtsikko16"></h3>
              <div>
                <a id="hTeksti16"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu15
        <div class="item">
          <p id="otsikko13" class="otsikko"></p>
          <p id="teksti12" class="teksti"></p>
        </div>
        Sivu16
        <div class="item">
          <div>
            <p id="osaOtsikko3" class="otsikko"></p>
            <img style="margin-left: 7%; width: 800px;" src="pics/Laatuympyra.gif"/>
          </div>
        </div>
        Sivu17
        <div class="item">
          <div class="leftside">
            <p id="otsikko14" class="otsikko"></p>
            <p id="teksti13" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 350px;"> Nopea ratkaisu
            <div class="accordion">
              <h3 id="hOtsikko17"></h3>
              <div>
                <a id="hTeksti17"></a>
              </div>
              <h3 id="hOtsikko18"></h3>
              <div>
                <a id="hTeksti18"></a>
              </div>
            </div>
            </div>
          </div>
        </div>
        Sivu18
        <div class="item">
          <p id="otsikko15" class="otsikko"></p>
          <p id="teksti14" class="teksti"></p>
        </div>
        Sivu19
        <div class="item">
          <p id="otsikko16" class="otsikko"></p>
          <p id="teksti15" class="teksti"></p>
        </div>
        Sivu20
        <div class="item">
          <p class="teksti"> </p>
        </div>
        -->

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-custom" role="button" data-slide="prev" onClick="window.setTimeout(checkActivity, 100);">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
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
