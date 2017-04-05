<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Laatu editor</title>
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js"></script>
  <script>
  //teksti editorin aktivointi

    tinyMCE.init({
      entity_encoding : "raw",
      mode : "textareas",
    });

  </script>
  <script src="editor.js"></script>
  <script src="js/jscolor.min.js"></script>
  <link rel="stylesheet" type="text/css" href="editor.css">
</head>
<body>
  <div id="wrapper">
    <div id="menu">
      <div id="sivumalli">
        <h1>Valitse sivumalli</h1>
        <button onclick="sivumalli(this)">Kansi</button>
        <button onclick="sivumalli(this)">Sivumalli 1</button>
        <button onclick="sivumalli(this)">Sivumalli 2</button>
        <button onclick="sivumalli(this)">Drag and drop</button>
        <button onclick="sivumalli(this)">Kysely</button>
      </div>
      <form id="kansi" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko"> <br>
        Kansikuva: <input type="file" name="kuva" id="kuva"> <br>
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="sivumalli1" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="sivu1-otsikko"> <br>
        Sisältöteksti: <textarea name="sivu1-teksti" id="sivu1-teksti" cols="50" rows="15"></textarea><br>
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="sivumalli2" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="sivu2-otsikko"> <br>
        Sisältöteksti: <textarea type="text" name="sivu2-teksti" id="sivu2-teksti"></textarea> <br>

        Haitarilista: <br><br>
        <div id="accordionList"></div> <br><br>
        Otsikko: <input type="text" name="haitari-otsikko" id="haitari-otsikko"> <br>
        Teksti: <textarea name="haitari-teksti" id="haitari-teksti" cols="50" rows="15" > </textarea> <br>
        <input id="addAcc" type="submit" value="Luo uusi" onclick="addAccordion(this, event)">
        <input type="submit" value="Peruuta" onclick="cancel(event, this)"><br><br>

        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="draganddrop" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko" id="otsikko"> <br>
        Sisältöteksti: <textarea type="text" name="dd-teksti" id="dd-teksti"></textarea> <br>

        Droppables: <br><br>
        <div id="droppables"></div> <br><br>
        Teksti: <input type="text" name="drop-teksti" id="drop-teksti"> <br>
        Numero: <input type="text" name="drop-target" id="drop-target"> <br> <br>
        <input id="addDrop" type="submit" value="Luo uusi" onclick="addDropFunc(this, event)">
        <input type="submit" value="Peruuta" onclick="cancelDrop(event, this)"><br><br>

        <div id="dragDiv">
          Draggables: <br>
          Teksti: <input type="text" name="drag-teksti" id="drag-teksti"> <br>
          <input id="addDrag" type="submit" value="Luo uusi" onclick="addDragFunc(this, event)">
          <input type="submit" value="Peruuta" onclick="cancelDrag(event, this)"><br><br>
        </div>

        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="kysely" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko" id="otsikko"> <br>
        Kyselyteksti: <textarea type="text" name="teksti" id="kysely-teksti"></textarea> <br><br>
        <div id="kyselyList"></div>
        <div id="kyselyDiv">
          Kysymys: <input type="text" name="kysymys-teksti" id="kysymys-teksti"> <br>
          Oikea vastaus: <input type="text" name="vastaus-teksti" id="vastaus-teksti"> <br>
          <select name="tottatarua" id="tottatarua">
            <option value="Totta">Totta</option>
            <option value="Tarua">Tarua</option>
          </select><br>
          <input id="kyselyAdd" type="submit" value="Luo uusi" onclick="addKysely(this, event)">
          <input type="submit" value="Peruuta" onclick="cancelKysely(event, this)"><br><br>

        </div>

        <!-- kysely editor -->
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
    </div>
    <div id="sivuDiv">
      <h4>Sivut</h4>
      <ul id="sortable"></ul><br/>
      <button onclick="addElement()">Lisää elementti</button>
      <button onclick="saveFunc()">Tallenna muutokset</button>
    </div>
    <div id="styleDiv">
      <h4>Tyyli asetukset</h4>
      <form id="styleForm">
        Logo: <br/>
        <input type="file" name="logo" id="logo"> <br/><br/>

        Väri 1: <input class="jscolor" value="ab2567" name="color1" id="color1"> <br/>
        Väri 1b: <input class="jscolor" value="ab2567" name="color1b" id="color1b"> <br/>
        Väri 2: <input class="jscolor" value="ab2567" name="color2" id="color2"> <br/>
        <button onclick="saveStyle(this, event); saveFunc()">Tallenna muutokset</button>
      </form>
    </div>
    <div id="esimiehet">
      <h4>Esimiehet</h4>
      <div id="esimieswrapper"></div><br>
      <form id="esimiesForm">
        <input type="text" name="esimies-text" id="esimies-text" placeholder = "Uusi Esimies"/><br>
        <button onclick="addEsimies(event)">Lisää esimies</button>
      </form>
    </div>
  </div>
</body>
</html>
