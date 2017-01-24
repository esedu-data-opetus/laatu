<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Laatu editor</title>
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <link rel="stylesheet" type="text/css" href="editor.css">
  <script src="editor.js"></script>
  <script src="addKansi.js"></script>
  <script src="addSivu1.js"></script>
  <script src="addSivu2.js"></script>
  <script src="addDragAndDrop.js"></script>
  <script src="addKysely.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script> 
  <script src="http://malsup.github.com/jquery.form.js"></script> 
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
        <input type="text">
        <input type="text">
        <input type="submit" value="Lähetä">
      </form>
      <form id="sivumalli2" class="sivumalli">
        <input type="text">
        <input type="text">
        <!-- accordion -->
        <input type="submit" value="Lähetä">
      </form>
      <form id="draganddrop" class="sivumalli">
        <input type="text">
        <input type="submit" value="Lähetä">
      </form>
      <form id="kysely" class="sivumalli">
        <input type="text">
        <input type="submit" value="Lähetä">
      </form>
    </div>
    <ul id="sortable"></ul>
    <button onclick="addElement()">Lisää elementti</button>
  </div>
</body>
</html>
