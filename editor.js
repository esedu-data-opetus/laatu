//ajax hakee xml:n
var xmlDoc;

$.ajax({
  type: "GET",
  url: "elements.xml",
  dataType: "xml",
  success: function (xml) {
    init(xml);
    xmlDoc = xml;
    console.log("success");
  },
  error: function(){
    console.log("error");
  }
});

//jos xml:n hakeminen onnistuu, tekee seuraavan
function init(xml){

//teksti editorin aktivointi

  tinyMCE.init({
        mode : "textareas",
        theme : "simple"
  });

//sortable elementtien aktivointi ja asetukset
  $( "#sortable" ).sortable({
    stop: function(event, ui) {
      console.log("New position: " + ui.item.index());
    }
  });
  $( "#sortable" ).disableSelection();

//jokaista xml:n sivua kohtaan tekee sortable elementin
  $(xml).find('sivu').each(function(index){
    var $sivu =  $(this);
    var $nav = $sivu.find("nav");
    var sortable = document.getElementById("sortable");

    var sivuElem = document.createElement("li");
    sortable.appendChild(sivuElem);

    var titleElem = document.createElement("a");
    titleElem.innerHTML = $nav.find("otsikko").text();
    sivuElem.appendChild(titleElem);

    var deleteElem = document.createElement("a");
    deleteElem.setAttribute("onClick", "deleteFunc(this)");
    deleteElem.setAttribute("class", "characterbutton delete");
    deleteElem.setAttribute("title", "Poista sivu");
    deleteElem.innerHTML = "&#9932;";
    sivuElem.appendChild(deleteElem);

    var editElem = document.createElement("a");
    editElem.setAttribute("onClick", "editFunc(this)");
    editElem.setAttribute("class", "characterbutton edit");
    editElem.setAttribute("title", "Muokkaa sivua");
    editElem.innerHTML = "&#9881;";
    sivuElem.appendChild(editElem);
  });
}

//inserttaa rivin vaihdon
function lineBreak(parent, amount){
  for(var i = 0; i < amount; i++){
    var elem = document.createElement("br");
    parent.appendChild(elem);
  }
}

//asettaa menun näkyviin
function addElement(){
  document.getElementById("menu").style.display = "block";
  document.getElementById("sivumalli").style.display = "inline-block";
}

//asettaa valittua sivumallia vastaavan formin näkyviin
function sivumalli(elem){
  var sivumalliElem = document.getElementById("sivumalli");

  if(elem.innerHTML === "Kansi"){
    document.getElementById("kansi").style.display = "block";
    sivumalliElem.style.display = "none";
  } else if(elem.innerHTML === "Sivumalli 1"){
    document.getElementById("sivumalli1").style.display = "block";
    sivumalliElem.style.display = "none";
  } else if(elem.innerHTML === "Sivumalli 2"){
    document.getElementById("sivumalli2").style.display = "block";
    sivumalliElem.style.display = "none";
  } else if(elem.innerHTML === "Drag and drop"){
    document.getElementById("draganddrop").style.display = "block";
    sivumalliElem.style.display = "none";
  } else if(elem.innerHTML === "Kysely"){
    document.getElementById("kysely").style.display = "block";
    sivumalliElem.style.display = "none";
  }
}

//poistaa valitun sivun indikaattorin ja xml elementin
function deleteFunc(elem){
  var pageElement = elem.parentElement;
  var pageIndex = $(pageElement).index();

  var y = xmlDoc.getElementsByTagName("sivu")[pageIndex];
  xmlDoc.documentElement.getElementsByTagName("sivut")[0].removeChild(y);

  pageElement.parentElement.removeChild(pageElement);
}

//avaa valitun elementin formin
function editFunc(elem){
  var pageIndex = $(elem).parent().index();
}

//accordioneiden määrä
var accordionAmount = 1;
//käsiteltävän accordionin id
var currentAccordion = 0;

//poistaa accordionin indikaattorin
function deleteElement(elem){
  var pageElement = elem.parentElement;
  pageElement.parentElement.removeChild(pageElement);
}

//Lisää uuden accordionin indikaattorin tai muokkaa sitä ja tallentaa tiedot .data() käyttäen
function addAccordion(elem, event){
  event.preventDefault();
  tinyMCE.triggerSave();
  var formElem = elem.parentElement;
  var formData = new FormData(formElem);
  var target = document.getElementById("accordionList");

  if(currentAccordion === 0){
    var haitariInd = document.createElement("div");
    haitariInd.setAttribute("class", "elemenIndicator");
    var haitariIndText = document.createElement("a");
    haitariIndText.setAttribute("class", "haitariText");
    haitariInd.appendChild(haitariIndText);
    haitariIndText.setAttribute("id", accordionAmount);
    haitariIndText.setAttribute("onclick", "accordionPassValues(this)");
    haitariIndText.innerHTML = formData.get("haitari-otsikko");
    $(haitariIndText).data("teksti", formData.get("haitari-teksti"));

    var haitariDel = document.createElement("a");
    haitariDel.setAttribute("onClick", "deleteElement(this)");
    haitariDel.setAttribute("class", "characterbutton delete");
    haitariDel.setAttribute("title", "Poista haitari");
    haitariDel.innerHTML = "&#9932;";
    haitariInd.appendChild(haitariDel);

    target.appendChild(haitariInd);
    accordionAmount++;
  } else{
    var haitariIndText = document.getElementById(currentAccordion);
    haitariIndText.innerHTML = formData.get("haitari-otsikko");
    $(haitariIndText).data("teksti", formData.get("haitari-teksti"));
    currentAccordion = 0;
  }
  document.getElementById("addAcc").value = "Luo uusi";
  document.getElementById("haitari-otsikko").value = "";
  tinyMCE.get("haitari-teksti").setContent("");
}

//tyhjentää formiin täytetyt tiedot ja deselectaa valitun elementin
function cancel(event, elem){
  event.preventDefault();
  document.getElementById("haitari-otsikko").value = "";
  tinyMCE.get("haitari-teksti").setContent("");
  currentAccordion = 0;
  document.getElementById("addAcc").value = "Luo uusi";
}

//välittää valitun accordionin tiedot formiin
function accordionPassValues(elem){
  document.getElementById("haitari-otsikko").value = elem.innerHTML;
  var tekstiData = $(elem).data("teksti");
  tinyMCE.get("haitari-teksti").setContent(tekstiData);
  currentAccordion = elem.id;
  document.getElementById("addAcc").value = "Tallenna muutokset";
}

//drag elementtien määrä
var dragAmount = 1;
//käsiteltävän drag elementin id
var currentDrag = 0;

//Lisää uuden draggable indikaattorin ja kiinnittää tiedot siihen .data() käyttäen
function addDragFunc(elem, event){
  event.preventDefault();
  console.log("addDrag is a function");
  var formElem = elem.parentElement;
  var formData = new FormData(formElem);
  var target = document.getElementById("draggables");

  if(currentDrag === 0){
    var dragInd = document.createElement("div");
    dragInd.setAttribute("class", "elemenIndicator");
    var dragIndText = document.createElement("a");
    dragIndText.setAttribute("class", "dragText");
    dragInd.appendChild(dragIndText);
    dragIndText.setAttribute("id", dragAmount);
    dragIndText.setAttribute("onclick", "dragPassValues(this)");
    dragIndText.innerHTML = formData.get("drag-teksti");
    $(dragIndText).data("target", formData.get("target"));

    var dragDel = document.createElement("a");
    dragDel.setAttribute("onClick", "deleteElement(this)");
    dragDel.setAttribute("class", "characterbutton delete");
    dragDel.setAttribute("title", "Poista draggable");
    dragDel.innerHTML = "&#9932;";
    dragInd.appendChild(dragDel);

    target.appendChild(dragInd);
    dragAmount++;
  } else{
    var dragIndText = document.getElementById(currentDrag);
    dragIndText.innerHTML = formData.get("drag-teksti");
    $(dragIndText).data("target", formData.get("target"));
    currentDrag = 0;
  }
  document.getElementById("addDrag").value = "Luo uusi";
  document.getElementById("drag-teksti").value = "";
  document.getElementById("target").value = "";
}

//tyhjentää formiin täytetyt tiedot ja deselectaa valitun elementin
function cancelDrag(event, elem){
  event.preventDefault();
  document.getElementById("drag-teksti").value = "";
  document.getElementById("target").value = "";
  currentDrag = 0;
  document.getElementById("addDrag").value = "Luo uusi";
}

//välittää valitun drag elementin tiedot formiin
function dragPassValues(elem){
  document.getElementById("drag-teksti").value = elem.innerHTML;
  var target = $(elem).data("target");
  document.getElementById("target").value = target;
  currentDrag = elem.id;
  document.getElementById("addDrag").value = "Tallenna muutokset";
}

//välittää täytetyt tiedot xml:ään ja lisää sivuja vastaavat indikaattorit
function formFunc(elem, event){
  event.preventDefault();
  tinyMCE.triggerSave();

  $.ajax({
    type:     "POST",
    url:      $(this).attr('action'),
    success:  function() {
                console.log("POST was success");
              }
  });

  var formElem = elem.parentElement;
  var formData = new FormData(formElem);

  var sivut = xmlDoc.getElementsByTagName("sivut")[0];
  var sivu = xmlDoc.createElement("sivu");
  sivut.appendChild(sivu);

  function commonElements(type){
    var tyyppiElem = xmlDoc.createElement("tyyppi");
    tyyppiElem.innerHTML = type;
    sivu.appendChild(tyyppiElem);

    var navElem = xmlDoc.createElement("nav-otsikko");
    navElem.innerHTML = formData.get("nav-otsikko");
    sivu.appendChild(navElem);
  }

  function addPageElement(title){
    var sortable = document.getElementById("sortable");

    var sivuElem = document.createElement("li");
    sortable.appendChild(sivuElem);

    var titleElem = document.createElement("a");
    titleElem.innerHTML = title;
    sivuElem.appendChild(titleElem);

    var deleteElem = document.createElement("a");
    deleteElem.setAttribute("onClick", "deleteFunc(this)");
    deleteElem.setAttribute("class", "characterbutton delete");
    deleteElem.setAttribute("title", "Poista sivu");
    deleteElem.innerHTML = "&#9932;";
    sivuElem.appendChild(deleteElem);

    var editElem = document.createElement("a");
    editElem.setAttribute("onClick", "editFunc(this)");
    editElem.setAttribute("class", "characterbutton edit");
    editElem.setAttribute("title", "Muokkaa sivua");
    editElem.innerHTML = "&#9881;";
    sivuElem.appendChild(editElem);
  }

  if(formElem.id === "kansi"){
    commonElements("kansi");
    addPageElement(formData.get("nav-otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko")
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var kuvaElem = xmlDoc.createElement("kuva")
    kuvaElem.innerHTML = formData.get("kuva").name;
    sivu.appendChild(kuvaElem);

  } else if(formElem.id === "sivumalli1"){
    commonElements("sivumalli1");
    addPageElement(formData.get("nav-otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    tekstiElem.innerHTML = formData.get("teksti");
    sivu.appendChild(tekstiElem);

  } else if(formElem.id === "sivumalli2"){
    commonElements("sivumalli2");
    addPageElement(formData.get("nav-otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    tekstiElem.innerHTML = formData.get("teksti");
    sivu.appendChild(tekstiElem);

    var haitarilista = xmlDoc.createElement("haitarilista");
    sivu.appendChild(haitarilista);

    $("#accordionList").find("div").each(function( index ) {
      var haitari = xmlDoc.createElement("haitari");
      haitarilista.appendChild(haitari);
      var otsikko = xmlDoc.createElement("otsikko");
      otsikko.innerHTML = $(this).find(".haitariText").text();
      haitari.appendChild(otsikko);
      var teksti = xmlDoc.createElement("teksti");
      teksti.innerHTML = $(this).data("teksti");
      haitari.appendChild(teksti);
    });

  } else if(formElem.id === "draganddrop"){
    commonElements("draganddrop");
    addPageElement(formData.get("nav-otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    tekstiElem.innerHTML = formData.get("teksti");
    sivu.appendChild(tekstiElem);

    var drags = xmlDoc.createElement("drags");
    sivu.appendChild(drags);

    $("#draggables").find("div").each(function( index ) {
      var drag = xmlDoc.createElement("drag");
      drags.appendChild(drag);
      drag.innerHTML = $(this).find(".dragText").text();
      var target = $(this).data("target");
      drag.setAttribute("target", target);
    });
  } else if(formElem.id === "kysely"){

  }

  var n = $(sivut).find("sivu").length - 1;
  console.log($(sivut).find("sivu")[n].innerHTML);

  document.getElementById("kansi").style.display = "none";
  document.getElementById("sivumalli1").style.display = "none";
  document.getElementById("sivumalli2").style.display = "none";
  document.getElementById("draganddrop").style.display = "none";
  document.getElementById("kysely").style.display = "none";
  document.getElementById("menu").style.display = "none";
}
