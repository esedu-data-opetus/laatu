//ajax (hakee xml:n)
$.ajax({
  type: "GET",
  url: "elements.xml",
  dataType: "xml",
  success: function (xml) {
    init(xml);
    console.log("success");
  },
  error: function(){
    console.log("error");
  }
});

function init(xml){

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
    titleElem.innerHTML = $nav.children("otsikko").text();
    sivuElem.appendChild(titleElem);

    var deleteElem = document.createElement("a");
    deleteElem.setAttribute("onClick", "delete(elem)");
    deleteElem.setAttribute("class", "characterbutton delete");
    deleteElem.setAttribute("title", "Poista sivu");
    deleteElem.innerHTML = "&#9932;";
    sivuElem.appendChild(deleteElem);

    var editElem = document.createElement("a");
    editElem.setAttribute("onClick", "edit(elem)");
    editElem.setAttribute("class", "characterbutton edit");
    editElem.setAttribute("title", "Muokkaa sivua");
    editElem.innerHTML = "&#9881;";
    sivuElem.appendChild(editElem);
  });
}

function addElement(){
  document.getElementById("menu").style.display = "block";
  document.getElementById("sivumalli").style.display = "inline-block";
  /*var sortable = document.getElementById("sortable");

  var sivuElem = document.createElement("li");
  sortable.appendChild(sivuElem);

  var titleElem = document.createElement("a");
  titleElem.innerHTML = "esimerkki";
  sivuElem.appendChild(titleElem);

  var deleteElem = document.createElement("a");
  deleteElem.setAttribute("onClick", "delete(elem)");
  deleteElem.setAttribute("class", "characterbutton delete");
  deleteElem.setAttribute("title", "Poista sivu");
  deleteElem.innerHTML = "&#9932;";
  sivuElem.appendChild(deleteElem);

  var editElem = document.createElement("a");
  editElem.setAttribute("onClick", "edit(elem)");
  editElem.setAttribute("class", "characterbutton edit");
  editElem.setAttribute("title", "Muokkaa sivua");
  editElem.innerHTML = "&#9881;";
  sivuElem.appendChild(editElem);*/
}

function sivumalli(elem){
  if(elem.innerHTML === "Kansi"){

    

  } else if(elem.innerHTML === "Sivumalli 1"){

  } else if(elem.innerHTML === "Sivumalli 2"){

  } else if(elem.innerHTML === "Drag and drop"){

  } else if(elem.innerHTML === "Kysely"){

  }
}
