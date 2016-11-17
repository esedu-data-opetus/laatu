
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title></title>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <!-- lisätyt linkit -->
  <script src="submit.js"></script>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js"></script>

</head>
<body>

  <div id="wrapper">
    <div id="navbaar">
      <h1> Sisältö </h1>
      <div id="navlist">
        <div id="tab1" data-target="#carousel-custom" data-slide-to="0" class="active" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Etusivu</a></div>
        <div id="tab2" data-target="#carousel-custom" data-slide-to="1" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Esittely</a></div>
        <div id="tab3" data-target="#carousel-custom" data-slide-to="2" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Mikä tekee oppilaitoksestamme laadukkaan</a></div>
        <div id="tab4" data-target="#carousel-custom" data-slide-to="3" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Mikä siis tekee työstäni laadukkaan</a></div>
        <div id="tab5" data-target="#carousel-custom" data-slide-to="4" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tehtäväsivu 1</a></div>
        <div id="tab6" data-target="#carousel-custom" data-slide-to="5" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten asetamme tavoitteet oppilaitoksellemme</a></div>
        <div id="tab7" data-target="#carousel-custom" data-slide-to="6" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten asetan tavoitteet työlleni</a></div>
        <div id="tab8" data-target="#carousel-custom" data-slide-to="7" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tehtäväsivu 2</a></div>
        <div id="tab9" data-target="#carousel-custom" data-slide-to="8" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten arvioimme oppilaitoksemme toiminnan vaikuttavuutta</a></div>
        <div id="tab10" data-target="#carousel-custom" data-slide-to="9" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten arvioin oman työni vaikutuksia ja vaikuttavuutta</a></div>
        <div id="tab11" data-target="#carousel-custom" data-slide-to="10" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tehtäväsivu 3</a></div>
        <div id="tab12" data-target="#carousel-custom" data-slide-to="11" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten parannamme oppilaitoksen toimintaa</a></div>
        <div id="tab13" data-target="#carousel-custom" data-slide-to="12" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Miten osoitamme oppilaitoksen laadukkuuden</a></div>
        <div id="tab14" data-target="#carousel-custom" data-slide-to="13" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tuloksellisuus- ja vaikuttavuusmittarit</a></div>
        <div id="tab15" data-target="#carousel-custom" data-slide-to="14" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tiedon keruu ja analysointi</a></div>
        <div id="tab16" data-target="#carousel-custom" data-slide-to="15" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Tiedon keruu ja analysointi</a></div>
        <div id="tab17" data-target="#carousel-custom" data-slide-to="16" class="inactive" onClick="window.setTimeout(checkActivity, 100);"><a href=#>Toteutus</a></div>
      </div>
    </div>
    <div class="header"><img src="pics/esedu_logo.png" style="float: left;"></img>
      <a id="header_text1">Etelä-Savon ammattiopisto</a><br>
      <a id="header_text2">South Savo Vocational College</a>
    </div>

    <div id='carousel-custom' class="carousel slide" data-interval="false">

    <!-- Sivujen indikaattorit -->
      <ol class="carousel-indicators">
        <li id="indicator1" data-target="#carousel-custom" data-slide-to="0" class="active" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator2" data-target="#carousel-custom" data-slide-to="1" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator3" data-target="#carousel-custom" data-slide-to="2" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator4" data-target="#carousel-custom" data-slide-to="3" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator5" data-target="#carousel-custom" data-slide-to="4" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator6" data-target="#carousel-custom" data-slide-to="5" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator7" data-target="#carousel-custom" data-slide-to="6" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator8" data-target="#carousel-custom" data-slide-to="7" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator9" data-target="#carousel-custom" data-slide-to="8" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator10" data-target="#carousel-custom" data-slide-to="9" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator11" data-target="#carousel-custom" data-slide-to="10" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator12" data-target="#carousel-custom" data-slide-to="11" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator13" data-target="#carousel-custom" data-slide-to="12" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator14" data-target="#carousel-custom" data-slide-to="13" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator15" data-target="#carousel-custom" data-slide-to="14" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator16" data-target="#carousel-custom" data-slide-to="15" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
        <li id="indicator17" data-target="#carousel-custom" data-slide-to="16" onClick="window.setTimeout(checkActivity, 100);"><img src="pics/123.png"/></li>
      </ol>

      <!-- Sivut -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="leftside">
            <p id="otsikko1" class="otsikko"></p>
          </div>
          <div class="rightside">
            <img src="pics/etusivu.png"/>
          </div>
        </div>
        <div class="item">
          <p id="otsikko2" class="otsikko"></p>
          <p id="teksti1" class="teksti"></p>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko3" class="otsikko"></p>
            <p id="teksti2" class="teksti"></p>
          </div>
          <div class="rightside" style="border: 1px solid black;">

            <button class="accordion" id="hotsikko1"></button>
            <div class="panel">
              <p id="hteksti1"></p>
            </div>
            <button class="accordion" id="hotsikko2"></button>
            <div class="panel">
              <p id="hteksti2"></p>
            </div>
            <button class="accordion" id="hotsikko3"></button>
            <div class="panel">
               <p id="hteksti3"></p>
            </div>
            <button class="accordion" id="hotsikko4"></button>
            <div class="panel">
               <p id="hteksti4"></p>
            </div>

          </div>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko4" class="otsikko"></p>
            <p id="teksti3" class="teksti"></p>
          </div>
          <div class="rightside">
            <div class="accordion">
              <h3 id="hotsikko5"></h3>
              <div>
                <a id="hteksti5"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <p id="otsikko5" class="otsikko"></p>
          <p id="teksti4" class="teksti"></p>
          <div id="blocks">
            <a id="block6" class="draggable">Henkilöstösuunnitelma</a>
            <a id="block13" class="draggable">Oppimistulokset</a>
            <a id="block1" class="draggable">TKR</a>
            <a id="block5" class="draggable">Opetussuunnitelma</a>
            <a id="block12" class="draggable">Asiakastulokset</a>
            <a id="block7" class="draggable">Opetus</a>
            <a id="block3" class="draggable">Hanketoiminta</a>
            <a id="block4" class="draggable">HEKS-keskustelut</a>
            <a id="block9" class="draggable">Työssäoppiminen</a>
            <a id="block11" class="draggable">Opiskelijapalautteet</a>
            <a id="block2" class="draggable">Oman työn kehittäminen</a>
            <a id="block10" class="draggable">Näyttötutkinto</a>
            <a id="block8" class="draggable">Ohjaus</a>
          </div>
          <div id="goals">
            <div id="goal1" class="droppable">Suunnittelu</div>
            <div id="goal2" class="droppable">Toteutus</div>
            <div id="goal3" class="droppable">Arviointi</div>
            <div id="goal4" class="droppable">Parantaminen</div>
          </div>
          <a style="font-family: Corbel; font-size: 20px; margin-left: 10px;" id="rightA"></a>/13
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko6" class="otsikko"></p>
            <p id="teksti5" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 445px;">
              <div class="accordion">
                <h3 id="hotsikko6"></h3>
                <div>
                  <a id="hteksti6"></a>
                </div>
                <h3 id="hotsikko7"></h3>
                <div>
                  <a id="hteksti7"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko7" class="otsikko"></p>
            <p id="teksti6" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 395px;">
              <div class="accordion">
                <h3 id="hotsikko8"></h3>
                <div>
                  <a id="hteksti8"></a>
                </div>
                <h3 id="hotsikko9"></h3>
                <div>
                  <a id="hteksti9"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko8" class="otsikko"></p>
            <p id="teksti7" class="teksti"></p>
          </div>
          <div class="rightside" style="overflow-y: hidden;">
            <h2> Totta vai Tarua? </h2>
            <p id="tottatarua">Totta</p>
            <p id="tottatarua">Tarua</p>
            <div id="vastauswrapper">
              <table class="tableborderform">
                <form method="post">
                  <tr>
                    <td>
                      <p id="kysymys">Aikaisemman osaamisen tunnistamisen ja tunnustamisen prosessikuvauksen mukaan ohjauskeskustelun käyminen on opiskelijan vastuulla</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys1" value="Tarua">
                        <input id="radionappi" type="radio" name="kysymys1" value="Totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Aikuiskoulutushaussa vastuuopettaja ja opintosihteeri vastaavat yhdessä mahdollisten hakijoiden informoinnista ja ohjaamisesta</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys2" value="Tarua">
                        <input id="radionappi" type="radio" name="kysymys2" value="Totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Opettajan vastuulla on ohjata opiskelijat vastaamaan opiskelijapalautekyselyihin (nuorten tulo-, olo- ja päättökyselyt, aikuiskoulutus OPAL ja AIPAL sekä kummankin koulutusmuodon opettajan henkilökohtainen palaute)</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio" name="kysymys3" value="Tarua">
                        <input id="radionappi" type="radio" name="kysymys3" value="Totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Opiskelija tunnistaa olemassa olevan osaamisen</p>
                        <fieldset id="group">
                        <input id="radionappi" type="radio"  name="kysymys4" value="Tarua">
                        <input id="radionappi" type="radio"  name="kysymys4" value="Totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p id="kysymys">Oppisopimuskoordinaattori ja vastuuopettaja vastaavat yhdessä oppisopimuskoulutuksen tietopuolisen koulutuksen suunnittelusta</p>
                      <fieldset id="group">
                        <input id="radionappi" type="radio"  name="kysymys5" value="Tarua">
                        <input id="radionappi" type="radio"  name="kysymys5" value="Totta"> <br>
                      </fieldset>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <?php
                        $lista = simplexml_load_file('esimiehet.xml');
                        echo '
                        Nimi:<br>
                        <input type="text" name="firstname" id="nimi"><br>
                        <select name="esimiehet" id="esimies">
                        <option value="Tyhja"> Esimies </option>';
                        foreach ($lista->esimiehet->children() as $asia) {
                          echo '<option value="esimies" id="">' .$asia. '</option>';
                        };
                      ?>
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
        <div class="item">
          <div class="leftside">
            <p id="otsikko9" class="otsikko"></p>
            <p id="teksti8" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 423px;">
              <div class="accordion">
                <h3 id="hotsikko10"></h3>
                <div>
                  <a id="hteksti10"></a>
                </div>
                <h3 id="hotsikko11"></h3>
                <div>
                  <a id="hteksti11"></a>
                </div>
                <h3 id="hotsikko12"></h3>
                <div>
                  <a id="hteksti12"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko10" class="otsikko"></p>
            <p id="teksti9" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 445px;">
              <div class="accordion">
                <h3 id="hotsikko13"></h3>
                <div>
                  <a id="hteksti13"></a>
                </div>
                <h3 id="hotsikko14"></h3>
                <div>
                  <a id="hteksti14"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style="width: 975px; height: 480px; overflow-y: auto;">
            <p id="otsikko11" class="otsikko"></p>
            <p id="teksti10" class="teksti"></p>
          </div>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko12" class="otsikko"></p>
            <p id="teksti11" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 445px;">
              <div class="accordion">
                <h3 id="hotsikko15"></h3>
                <div>
                  <a id="hteksti15"></a>
                </div>
                <h3 id="hotsikko16"></h3>
                <div>
                  <a id="hteksti16"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <p id="otsikko13" class="otsikko"></p>
          <p id="teksti12" class="teksti"></p>
        </div>
        <div class="item">
          <div class="leftside">
            <p id="otsikko14" class="otsikko"></p>
            <p id="teksti13" class="teksti"></p>
          </div>
          <div class="rightside">
            <div style="height: 445px;">
              <div class="accordion">
                <h3 id="hotsikko17"></h3>
                <div>
                  <a id="hteksti17"></a>
                </div>
                <h3 id="hotsikko18"></h3>
                <div>
                  <a id="hteksti18"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <p id="otsikko15" class="otsikko"></p>
          <p id="teksti14" class="teksti"></p>
        </div>
        <div class="item">
          <p id="otsikko16" class="otsikko"></p>
          <p id="teksti15" class="teksti"></p>
        </div>
        <div class="item">
          <p class="teksti"> Tekninen toteutus: Onni Heinonen, Riku Hänninen </p>
          <p class="teksti"> Graafinen toteutus: Mitja Immonen </p>
        </div>
      </div>
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

<!--    <div class="leftside">
      <div id="blocks">
        <div id="block1" class="draggable">Esim1</div>
        <div id="block2" class="draggable">Esim2</div>
        <div id="block3" class="draggable">Esim3</div>
        <div id="block4" class="draggable">Esim4</div>
        <div id="block4" class="draggable">Esim5</div>
        <div id="block4" class="draggable">Esim6</div>
      </div>
      <div id="goals">
        <div id="goal1" class="droppable">Esim1</div>
        <div id="goal2" class="droppable">Esim2</div>
      </div>
    </div>
    <div class="rightside">
      <div id="accordion">
        <h3>Section 1</h3>
        <div>
          <p>
          Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
          ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
          amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
          odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
          </p>
        </div>
        <h3>Section 2</h3>
        <div>
          <p>
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
          velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
          suscipit faucibus urna.
          </p>
        </div>
        <h3>Section 3</h3>
        <div>
          <p>
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
          Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
          ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
          lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
          </p>
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>
        </div>
        <h3>Section 4</h3>
        <div>
          <p>
          Cras dictum. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
          mauris vel est.
          </p>
          <p>
          Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
    </div>
  </div> -->

  <!-- <div class="rightside">
    <img src="pics/kysymysmerkki.png"/>
  </div>
  <div class="leftside">
    <form method="post" action="send.php">
      <h2> Totta vai Tarua? </h2>
      <div id="vastauswrapper">
      <p id="vastaus1">Totta ja Tarua</p>
      <p id="vastaus1">Totta</p>
      <p id="vastaus1">Tarua</p>

      </div>
      <div id="vastauswrapper">
      <p id="kysymys">1. Hyvin suunniteltu on puoliksi tehty</p>
      <fieldset id="group1">
      <input id="vastaus" type="radio" name="group1">
      <input id="vastaus" type="radio" name="group1">
      <input id="vastaus" type="radio" name="group1"> <br></fieldset>
    </div>
    <div id="vastauswrapper">
      <p id="kysymys">1. Hyvin suunniteltu on puoliksi tehty</p>
      <fieldset id="group2">
      <input id="vastaus" type="radio" name="group2">
      <input id="vastaus" type="radio" name="group2">
      <input id="vastaus" type="radio" name="group2"> <br></fieldset>
    </div>
    <div id="vastauswrapper">
      <p id="kysymys">1. Hyvin suunniteltu on puoliksi tehty</p>
      <fieldset id="group3">
      <input id="vastaus" type="radio" name="group3">
      <input id="vastaus" type="radio" name="group3">
      <input id="vastaus" type="radio" name="group3"> <br></fieldset>
    </div>
    <div id="vastauswrapper">
      <p id="kysymys">1. Hyvin suunniteltu on puoliksi tehty</p>
      <fieldset id="group4">
      <input id="vastaus" type="radio"  name="group4">
      <input id="vastaus" type="radio"  name="group4">
      <input id="vastaus" type="radio"  name="group4"> <br></fieldset>
    </div>
    <input type="submit" name="Lähetä">
  </form>
  </div>
-->
