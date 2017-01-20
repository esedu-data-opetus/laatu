<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Laatu editor</title>
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
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
      <div>
        <form>
          <input type="text">
        </form>
      </div>
    </div>
    <ul id="sortable"></ul>
    <button onclick="addElement()">Lisää elementti</button>
  </div>
</body>
</html>
