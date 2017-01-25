<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Laatu editor</title>
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
  <script>tinymce.init({ selector:'textarea' });</script>
  <link rel="stylesheet" type="text/css" href="editor.css">
  <script src="editor.js"></script>
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
      <form id="kansi" class="sivumalli" method="post" action="upload.php" enctype="multipart/form-data">
        Otsikko: <input type="text" name="otsikko"> <br>
        Kansikuva: <input type="file" name="kuva" id="kuva"> <br>
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="sivumalli1" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko"> <br>
        Sisältöteksti: <textarea type="text" name="teksti"></textarea> <br>
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="sivumalli2" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko"> <br>
        Sisältöteksti: <textarea type="text" name="teksti"></textarea> <br>
        <!-- accordion editor -->
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="draganddrop" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko"> <br>
        <!-- draganddrop editor -->
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
      <form id="kysely" class="sivumalli">
        Tabin otsikko: <input type="text" name="nav-otsikko"> <br>
        Otsikko: <input type="text" name="otsikko"> <br>
        <!-- kysely editor -->
        <input type="submit" value="Lähetä" onclick="formFunc(this, event)">
      </form>
    </div>
    <ul id="sortable"></ul>
    <button onclick="addElement()">Lisää elementti</button>
  </div>
</body>
</html>
