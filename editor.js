//ajax hakee xml:n
var xmlDoc;

$.ajax({
  method: "GET",
  url: "elements.xml",
  dataType: "xml",
  success: function (xml) {
    xmlDoc = xml;
    init(xml);
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
    entity_encoding : "raw",
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
    $(editElem).data("numero", $sivu.children("numero").html());
    sivuElem.appendChild(editElem);
  });
}

function saveFunc(){
  var xmlDocString = (new XMLSerializer()).serializeToString(xmlDoc);

  $.ajax({
    method: "POST",
    url: "upload.php",
    data: { xml: xmlDocString },
    dataType: "text",
    success: function(data){
      console.log("XML tallennettu")
    },
    error: function(){
      console.log("Ei toimi!");
    }
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

  var sivuNumero = $(elem).data("numero");
  document.getElementById("menu").style.display = "block";

  $(xmlDoc).find('sivu').each(function(index){
    var thisNumero = $(this).children("numero").html();
    var thisTyyppi = $(this).children("tyyppi").html();
    var thisPage;

    if(thisNumero === sivuNumero && thisTyyppi === "kansi"){
      thisPage = document.getElementById("kansi");
      thisPage.style.display = "block";
      thisPage.children[0].value = $(this).children("nav").children("otsikko").html();
      thisPage.children[2].value = $(this).children("otsikko").html();
    } else if(thisNumero === sivuNumero && thisTyyppi === "sivu1"){
      thisPage = document.getElementById("sivumalli1");
      thisPage.style.display = "block";
      thisPage.children[0].value = $(this).children("nav").children("otsikko").html();
      thisPage.children[2].value = $(this).children("otsikko").html();
      var thisTeksti = $(this).children("teksti").html();
      console.log(thisTeksti);
      tinyMCE.get('sivu1-teksti').setContent(thisTeksti);
    } else if(thisNumero === sivuNumero && thisTyyppi === "sivu2"){
      document.getElementById("sivumalli2").style.display = "block";


    } else if(thisNumero === sivuNumero && thisTyyppi === "draganddrop"){
      document.getElementById("draganddrop").style.display = "block";


    } else if(thisNumero === sivuNumero && thisTyyppi === "kysely"){
      document.getElementById("kysely").style.display = "block";


    }
  });
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
//kohde drop elementtientti
var droppableTarget = 0;

function dragMenu(elem){
  droppableTarget = $(elem.parentElement).find(".dropText").attr("id");
  console.log(droppableTarget);
  document.getElementById("dragDiv").style.display = "block";
}

//Lisää uuden draggable indikaattorin ja kiinnittää tiedot siihen .data() käyttäen
function addDragFunc(elem, event){
  event.preventDefault();
  var formElem = elem.parentElement.parentElement;
  var formData = new FormData(formElem);

  if(currentDrag === 0){
    var dragInd = document.createElement("div");
    dragInd.setAttribute("class", "elemenIndicator");
    var dragIndText = document.createElement("a");
    dragIndText.setAttribute("class", "dragText");
    dragInd.appendChild(dragIndText);
    dragIndText.setAttribute("id", "drag" + dragAmount);
    dragIndText.setAttribute("onclick", "dragPassValues(this)");
    dragIndText.innerHTML = formData.get("drag-teksti");
    $(dragInd).data("target", $(document.getElementById(droppableTarget).parentElement).data("target"));

    var dragDel = document.createElement("a");
    dragDel.setAttribute("onClick", "deleteElement(this)");
    dragDel.setAttribute("class", "characterbutton delete");
    dragDel.setAttribute("title", "Poista draggable");
    dragDel.innerHTML = "&#9932;";
    dragInd.appendChild(dragDel);

    document.getElementById(droppableTarget).parentElement.children[3].appendChild(dragInd);
    dragAmount++;
  } else{
    var elem = document.getElementById(currentDrag);
    elem.innerHTML = formData.get("drag-teksti");
    $(elem.parentElement).data("target", $(document.getElementById(droppableTarget).parentElement).data("target"));
    currentDrag = 0;
  }
  document.getElementById("addDrag").value = "Luo uusi";
  document.getElementById("drag-teksti").value = "";
  document.getElementById("dragDiv").style.display = "none";
}

//tyhjentää formiin täytetyt tiedot ja deselectaa valitun elementin
function cancelDrag(event, elem){
  event.preventDefault();
  document.getElementById("drag-teksti").value = "";
  currentDrag = 0;
  document.getElementById("addDrag").value = "Luo uusi";
  document.getElementById("dragDiv").style.display = "none";
}

//välittää valitun drag elementin tiedot formiin
function dragPassValues(elem){
  document.getElementById("dragDiv").style.display = "block";
  document.getElementById("drag-teksti").value = elem.innerHTML;
  var target = $(elem.parentElement).data("target");
  console.log($(elem.parentElement).data("target"));
  currentDrag = elem.id;
  console.log(elem.id);
  document.getElementById("addDrag").value = "Tallenna muutokset";
}

//drop elementtien määrä
var dropAmount = 1;
//käsiteltävän drop elementin id
var currentDrop = 0;

//Lisää uuden droppable indikaattorin ja kiinnittää tiedot siihen .data() käyttäen
function addDropFunc(elem, event){
  event.preventDefault();
  var formElem = elem.parentElement;
  var formData = new FormData(formElem);
  var target = document.getElementById("droppables");

  if(currentDrop === 0){
    var dropInd = document.createElement("div");
    dropInd.setAttribute("class", "elemenIndicator");
    var dropIndText = document.createElement("a");
    dropIndText.setAttribute("class", "dropText");
    dropInd.appendChild(dropIndText);
    dropIndText.setAttribute("id", "drop" + dropAmount);
    dropIndText.setAttribute("onclick", "dropPassValues(this)");
    dropIndText.innerHTML = formData.get("drop-teksti");
    $(dropInd).data("target", formData.get("drop-target"));

    var dropDel = document.createElement("a");
    dropDel.setAttribute("onClick", "deleteElement(this)");
    dropDel.setAttribute("class", "characterbutton delete");
    dropDel.setAttribute("title", "Poista droppable");
    dropDel.innerHTML = "&#9932;";
    dropInd.appendChild(dropDel);

    var dropAdd = document.createElement("a");
    dropAdd.setAttribute("onClick", "dragMenu(this)");
    dropAdd.setAttribute("class", "characterbutton edit small-char");
    dropAdd.setAttribute("title", "Lisää draggable");
    dropAdd.innerHTML = "&plus;";
    dropInd.appendChild(dropAdd);

    var draggables = document.createElement("div");
    draggables.setAttribute("class", "draggables");
    dropInd.appendChild(draggables);

    target.appendChild(dropInd);
    dropAmount++;
  } else{
    var elem = document.getElementById(currentDrop);
    elem.innerHTML = formData.get("drop-teksti");
    $(elem.parentElement).data("target", formData.get("drop-target"));
    currentDrop = 0;
  }
  document.getElementById("addDrop").value = "Luo uusi";
  document.getElementById("drop-teksti").value = "";
  document.getElementById("drop-target").value = "";
}

//tyhjentää formiin täytetyt tiedot ja deselectaa valitun elementin
function cancelDrop(event, elem){
  event.preventDefault();
  document.getElementById("drop-teksti").value = "";
  document.getElementById("drop-target").value = "";
  currentDrop = 0;
  document.getElementById("addDrop").value = "Luo uusi";
}

//välittää valitun drop elementin tiedot formiin
function dropPassValues(elem){
  document.getElementById("drop-teksti").value = elem.innerHTML;
  var target = $(elem.parentElement).data("target");
  document.getElementById("drop-target").value = target;
  currentDrop = elem.id;
  document.getElementById("addDrop").value = "Tallenna muutokset";
}

//Lisää uuden kysely indikaattorin tai muokkaa sitä ja tallentaa tiedot .data() käyttäen

//kyselyjen määrä
var kyselyAmount = 1;
//käsiteltävän kyselyn id
var currentKysely = 0;


function addKysely(elem, event){
  event.preventDefault();
  tinyMCE.triggerSave();
  var formElem = elem.parentElement.parentElement;
  var formData = new FormData(formElem);
  var target = document.getElementById("kyselyList");

  if(currentKysely === 0){
    var kyselyInd = document.createElement("div");
    target.appendChild(kyselyInd);
    kyselyInd.setAttribute("class", "elemenIndicator");

    var kyselyIndText = document.createElement("a");
    kyselyInd.appendChild(kyselyIndText);
    kyselyIndText.setAttribute("class", "kyselyText");
    kyselyIndText.setAttribute("id", kyselyAmount);
    kyselyIndText.setAttribute("onclick", "kyselyPassValues(this)");
    kyselyIndText.innerHTML = formData.get("kysymys-teksti");
    $(kyselyIndText).data("teksti", formData.get("vastaus-teksti"));
    $(kyselyIndText).data("tottatarua", formData.get("tottatarua"));

    var kyselyDel = document.createElement("a");
    kyselyInd.appendChild(kyselyDel);
    kyselyDel.setAttribute("onClick", "deleteElement(this)");
    kyselyDel.setAttribute("class", "characterbutton delete");
    kyselyDel.setAttribute("title", "Poista kysely");
    kyselyDel.innerHTML = "&#9932;";

    kyselyAmount++;
  } else{
    var kyselyIndText = document.getElementById(currentKysely);
    kyselyIndText.innerHTML = formData.get("kysymys-teksti");
    $(kyselyIndText).data("teksti", formData.get("vastaus-teksti"));
    $(kyselyIndText).data("tottatarua", formData.get("tottatarua"));
    currentKysely = 0;
  }
  document.getElementById("kyselyAdd").value = "Luo uusi";
  document.getElementById("kysymys-teksti").value = "";
  document.getElementById("vastaus-teksti").value = "";
}

function kyselyPassValues(elem){
  document.getElementById("kysymys-teksti").value = elem.innerHTML;
  document.getElementById("vastaus-teksti").value = $(elem).data("teksti");
  document.getElementById("tottatarua").value = $(elem).data("tottatarua");
  currentKysely = elem.id;
  document.getElementById("kyselyAdd").value = "Tallenna muutokset";
}
function cancelKysely(event, elem){
  event.preventDefault();
  document.getElementById("kysymys-teksti").value = "";
  document.getElementById("vastaus-teksti").value = "";
  currentKysely = 0;
  document.getElementById("kyselyAdd").value = "Luo uusi";
}


//välittää täytetyt tiedot xml:ään ja lisää sivuja vastaavat indikaattorit
function formFunc(elem, event){
  event.preventDefault();
  tinyMCE.triggerSave();

  var formElem = elem.parentElement;
  var formData = new FormData(formElem);

  var sivut = xmlDoc.getElementsByTagName("sivut")[0];
  var sivu = xmlDoc.createElement("sivu");
  sivut.appendChild(sivu);

  function commonElements(type){
    var tyyppiElem = xmlDoc.createElement("tyyppi");
    tyyppiElem.innerHTML = type;
    sivu.appendChild(tyyppiElem);

    var navElem = xmlDoc.createElement("nav");
    var navTitle = xmlDoc.createElement("otsikko");
    navTitle.innerHTML = formData.get("nav-otsikko");
    var sivulleElem = xmlDoc.createElement("sivulle");
    sivulleElem.innerHTML = $(sivut).find("sivu").length - 1;
    var activityElem = xmlDoc.createElement("activity");
    activityElem.innerHTML = "inactive";
    navElem.appendChild(navTitle);
    navElem.appendChild(sivulleElem);
    navElem.appendChild(activityElem);
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
    otsikkoElem.innerHTML = formData.get("sivu1-otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    console.log(formData.get("sivu1-teksti"));
    tekstiElem.innerHTML = formData.get("sivu1-teksti");
    sivu.appendChild(tekstiElem);

  } else if(formElem.id === "sivumalli2"){
    commonElements("sivumalli2");
    addPageElement(formData.get("nav-otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("sivu2-otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    tekstiElem.innerHTML = formData.get("sivu2-teksti");
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

    $(".draggables").find("div").each(function( index ) {
      var drag = xmlDoc.createElement("drag");
      drags.appendChild(drag);
      drag.innerHTML = $(this).find(".dragText").text();
      var target = $(this).data("target");
      drag.setAttribute("target", target);
    });

    var drops = xmlDoc.createElement("drops");
    sivu.appendChild(drops);

    $("#droppables").children("div").each(function( index ) {
      var drop = xmlDoc.createElement("drop");
      drops.appendChild(drop);
      drop.innerHTML = $(this).find(".dropText").text();
      var target = $(this).data("target");
      drop.setAttribute("target", target);
    });
  } else if(formElem.id === "kysely"){
    commonElements("kysely");
    addPageElement(formData.get("nav-otsikko"));
    var kyselyTextElem = xmlDoc.createElement("teksti");
    kyselyTextElem.innerHTML = formData.get("teksti");
    sivu.appendChild(kyselyTextElem);


    var kyselyElem = xmlDoc.createElement("kysely");
    sivu.appendChild(kyselyElem);
    $("#kyselyList").children("div").each(function(index){
      var tehtavaElem = xmlDoc.createElement("tehtava");
      kyselyElem.appendChild(tehtavaElem);
      var kysymysElem = xmlDoc.createElement("kysymys");
      kysymysElem.innerHTML = this.children[0].innerHTML;
      tehtavaElem.appendChild(kysymysElem);
      var vastausElem = xmlDoc.createElement("vastaus");
      vastausElem.innerHTML = $(this).find(".kyselyText").data("teksti");
      vastausElem.setAttribute("totta-vai-tarua" , formData.get("tottatarua"));
      tehtavaElem.appendChild(vastausElem);
    });
  }

  var n = $(sivut).find("sivu").length - 1;
  //console.log($(sivut).find("sivu")[n].innerHTML);

  document.getElementById("kansi").style.display = "none";
  document.getElementById("sivumalli1").style.display = "none";
  document.getElementById("sivumalli2").style.display = "none";
  document.getElementById("draganddrop").style.display = "none";
  document.getElementById("kysely").style.display = "none";
  document.getElementById("menu").style.display = "none";
}
