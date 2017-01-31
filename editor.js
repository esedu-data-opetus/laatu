//ajax (hakee xml:n)
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

function init(xml){

  tinyMCE.init({
        mode : "textareas",
        theme : "simple"
  });

  $( "#sortable" ).sortable({
    stop: function(event, ui) {
      console.log("New position: " + ui.item.index());
    }
  });
  $( "#sortable" ).disableSelection();

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

function lineBreak(parent, amount){
  for(var i = 0; i < amount; i++){
    var elem = document.createElement("br");
    parent.appendChild(elem);
  }
}

function addElement(){
  document.getElementById("menu").style.display = "block";
  document.getElementById("sivumalli").style.display = "inline-block";
}

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

function deleteFunc(elem){
  var pageElement = elem.parentElement;
  var pageIndex = $(pageElement).index();

  var y = xmlDoc.getElementsByTagName("sivu")[pageIndex];
  xmlDoc.documentElement.getElementsByTagName("sivut")[0].removeChild(y);

  pageElement.parentElement.removeChild(pageElement);
}

function editFunc(elem){
  var pageIndex = $(elem).parent().index();
}

var accordionAmount = 1;
var currentAccordion = 0;

function deleteAccordion(elem){
  var pageElement = elem.parentElement;
  pageElement.parentElement.removeChild(pageElement);
}

function addAccordion(elem, event){
  event.preventDefault();
  tinyMCE.triggerSave();
  var formElem = elem.parentElement;
  var formData = new FormData(formElem);
  var target = document.getElementById("accordionList");

  if(currentAccordion === 0){
    var haitariInd = document.createElement("div");
    haitariInd.setAttribute("class", "accordionInd");
    var haitariIndText = document.createElement("a");
    haitariInd.appendChild(haitariIndText);
    haitariIndText.setAttribute("id", accordionAmount);
    haitariIndText.setAttribute("onclick", "accordionPassValues(this)");
    haitariIndText.innerHTML = formData.get("haitari-otsikko");
    $(haitariIndText).data("teksti", formData.get("haitari-teksti"));

    var haitariDel = document.createElement("a");
    haitariDel.setAttribute("onClick", "deleteAccordion(this)");
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

  //tietojen tallentaminen

  document.getElementById("haitari-otsikko").value = "";
  tinyMCE.get("haitari-teksti").setContent("");
}

function cancel(event, elem){
  event.preventDefault();
  document.getElementById("haitari-otsikko").value = "";
  tinyMCE.get("haitari-teksti").setContent("");
  currentAccordion = 0;
  document.getElementById("addAcc").value = "Luo uusi";
}

function accordionPassValues(elem){
  document.getElementById("haitari-otsikko").value = elem.innerHTML;
  var tekstiData = $(elem).data("teksti");
  tinyMCE.get("haitari-teksti").setContent(tekstiData);
  currentAccordion = elem.id;
  document.getElementById("addAcc").value = "Tallenna muutokset";
}

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
    navElem.innerHTML = formData.get("otsikko");
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
    addPageElement(formData.get("otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko")
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var kuvaElem = xmlDoc.createElement("kuva")
    kuvaElem.innerHTML = formData.get("kuva").name;
    sivu.appendChild(kuvaElem);

  } else if(formElem.id === "sivumalli1"){
    commonElements("sivumalli1");
    addPageElement(formData.get("otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    tekstiElem.innerHTML = formData.get("teksti");
    sivu.appendChild(tekstiElem);

  } else if(formElem.id === "sivumalli2"){
    commonElements("sivumalli2");
    addPageElement(formData.get("otsikko"));

    var otsikkoElem = xmlDoc.createElement("otsikko");
    otsikkoElem.innerHTML = formData.get("otsikko");
    sivu.appendChild(otsikkoElem);

    var tekstiElem = xmlDoc.createElement("teksti");
    console.log(formData.get("teksti"));
    tekstiElem.innerHTML = formData.get("teksti");
    sivu.appendChild(tekstiElem);

    var haitarilista = xmlDoc.createElement("haitarilista");
    sivu.appendChild(haitarilista);

    $("#accordionList").find("div").each(function( index ) {
      var haitari = xmlDoc.createElement("haitari");
      haitarilista.appendChild(haitari);
      var otsikko = xmlDoc.createElement("otsikko");
      otsikko.innerHTML = $(this).find("a").text();
      haitari.appendChild(otsikko);
      var teksti = xmlDoc.createElement("teksti");
      teksti.innerHTML = $(this).data("teksti");
      haitari.appendChild(teksti);
    });

  } else if(formElem.id === "draganddrop"){

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
