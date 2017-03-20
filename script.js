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

function imagePosition(image) {
  var images = document.getElementsByClassName(image);

  for(i = 0; i < images.length; i++){
    var imageHeight = $(images[i]).height();
    var imageWidth = $(images[i]).width();

    var x = imageHeight / 2;
    var y = imageWidth / 2;
    x = -x + "px";
    y = -y + "px";

    images[i].style.marginTop = x;
    images[i].style.marginLeft = y;
  }
}

function init(xml) {

  $(window).on('resize orientationChange', function(event) {
    var width = $(window).width();
    var height = $(window).height();
    var menuElem = document.getElementById("navbaar");
    if(width > 1200){
      menuElem.style.display = "block";
    } else{
      menuElem.style.display = "none";
    }
  });

  $(xml).find('sivu').each(function(index){

    var $sivu = $(this);
    var carousel = document.getElementById("carousel-inner");
    var content;
    var pageIndex = $sivu.index();
    var pageNumber = pageIndex + 1;

    function addNavElements(){
      var tabElem = document.createElement("li");
      var tabTitle = document.createTextNode($sivu.find("nav-otsikko").html());
      tabElem.appendChild(tabTitle);
      var activity;

      if(pageIndex === 0){
        activity = "active";
      } else{
        activity = "inactive";
      }

      tabElem.setAttribute("data-target", "#carousel-custom");
      tabElem.setAttribute("data-slide-to", pageIndex);
      tabElem.setAttribute("class", activity);
      tabElem.setAttribute("onClick", "navFunc(); closeMenu();");
      var tabList = document.getElementById("navlist");
      tabList.appendChild(tabElem);
      var indElem = document.createElement("li");
      var indPict = document.createElement("img");
      indPict.setAttribute("src", "pics/indicator.png");
      indElem.appendChild(indPict);
      if(activity === "active"){
        indElem.setAttribute("class", "active");
      }
      indElem.setAttribute("data-target", "#carousel-custom");
      indElem.setAttribute("data-slide-to", pageIndex);
      indElem.setAttribute("onClick", "navFunc()");
      var indicators = document.getElementById("indicators");
      indicators.appendChild(indElem);
    }

    function addItems(){
      var itemElem = document.createElement("div");
      itemElem.setAttribute("class", "item");
      if(pageIndex === 0){
    	itemElem.classList.add("active");
      }
      var pageId = "page " + pageNumber;
      itemElem.setAttribute("id", pageId)
      var contentElem = document.createElement("div");
      contentElem.setAttribute("class", "content");
      itemElem.appendChild(contentElem);
      carousel.appendChild(itemElem);

      content = contentElem;
    }

    function pageTypes(){

      var pageType = $sivu.find("tyyppi").html();

      if(pageType === "kansi"){
        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").html();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        content.appendChild(titleElem);

        var image = $sivu.find("kuva").html();
        var imgElem = document.createElement("img");
        imgElem.setAttribute("src", image);
        imgElem.setAttribute("class", "titleImage");
        content.appendChild(imgElem);
      } else if(pageType === "sivu1"){
        var wrapperElem = document.createElement("div");
        wrapperElem.setAttribute("class", "textWrapper");

        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").html();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        wrapperElem.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").html();
        textElem.innerHTML = text;
        wrapperElem.appendChild(textElem);

        content.appendChild(wrapperElem);
      } else if(pageType === "sivu2"){
        var leftElem = document.createElement("div");
        leftElem.setAttribute("class", "leftside");
        var rightElem = document.createElement("div");
        rightElem.setAttribute("class", "rightside");

        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").html();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        leftElem.appendChild(titleElem);

        var textElem = document.createElement("div");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").html();
        textElem.innerHTML = text;
        leftElem.appendChild(textElem);

        //accordion
        var accordion = document.createElement("div");
        accordion.setAttribute("class", "accordion");
        var $pList = $sivu.find("haitarilista");

        //accordion function
        $pList.find("haitari").each(function(){
          var $panel = $(this);
          // panel button
          var pButtonElem = document.createElement("div");
          pButtonElem.setAttribute("class", "aPanelButton");
          pButtonElem.setAttribute("onclick", "accordion(this);");
          // panel indicator
          var pIndicatorElem = document.createElement("div");
          var pIndicatorChar = document.createElement("p");
          pIndicatorChar.innerHTML = "+";
          pIndicatorElem.setAttribute("class", "aPanelIndicator teksti");
          // panel title
          var pTitleElem = document.createElement("p");
          pTitleElem.classList.add("teksti");
          pTitleElem.classList.add("aPanelButtonText");
          var pTitle = $panel.find("otsikko").html();
          pTitleElem.innerHTML = pTitle;
          // append
          pIndicatorElem.appendChild(pIndicatorChar);
          pButtonElem.appendChild(pIndicatorElem);
          pButtonElem.appendChild(pTitleElem);
          accordion.appendChild(pButtonElem);
          // text panel
          var panelElem = document.createElement("div");
          panelElem.classList.add("aPanel");
          panelElem.classList.add("hidden");
          // text
          var pTextElem = document.createElement("p");
          pTextElem.setAttribute("class", "teksti");
          var pText = $panel.find("teksti").html();
          pTextElem.innerHTML = pText;
          // append
          panelElem.appendChild(pTextElem);
          accordion.appendChild(panelElem);
        });
        rightElem.appendChild(accordion);
        content.appendChild(leftElem);
        content.appendChild(rightElem);
      } else if(pageType === "dragdrop"){
        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").html();
        titleElem.innerHTML = title;
        content.appendChild(titleElem);

        var instructionElem = document.createElement("p");
        instructionElem.setAttribute("class", "teksti");
        instructionElem.innerHTML = "Vie sanat oikeisiin laatikoihin. Kun vastaat oikein, sanan tausta muuttuu vihreäksi.";
        content.appendChild(instructionElem);

        var $dragList = $sivu.find("drags");
        var nextId = 0;
        $dragList.find("drag").each(function(){
          var $drag = $(this);
          var dragElem = document.createElement("div");
          var target = $drag.attr("target");
          var dragTextElem = document.createElement("p");
          dragTextElem.innerHTML = $drag.html();
          dragElem.appendChild(dragTextElem);
          dragElem.setAttribute("class", "drag");
          dragElem.setAttribute("draggable", "true");
          dragElem.setAttribute("ondragstart", "drag(event)");
          dragElem.setAttribute("id", nextId);
          dragElem.setAttribute("target", target);
          content.appendChild(dragElem);
          nextId = nextId + 1;
        });
        var dropWrapper = document.createElement("div");
        content.appendChild(dropWrapper);
        dropWrapper.setAttribute("class", "dropWrapper");
        var $dropList = $sivu.find("drops");
        $dropList.find("drop").each(function(){
          var $drop = $(this);
          var dropElem = document.createElement("div");
          var target = $drop.attr("target");
          var dropTextElem = document.createElement("p");
          dropTextElem.innerHTML = $drop.html();
          dropElem.appendChild(dropTextElem);
          dropElem.setAttribute("class", "drop");
          dropElem.setAttribute("ondrop", "drop(event)");
          dropElem.setAttribute("ondragover", "allowDrop(event)");
          dropElem.setAttribute("target", target);
          dropWrapper.appendChild(dropElem);
        });
      } else if(pageType === "kysely"){
        var leftElem = document.createElement("div");
        leftElem.setAttribute("class", "leftside");
        content.appendChild(leftElem);

        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").html();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        leftElem.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").html();
        textElem.innerHTML = text;
        leftElem.appendChild(textElem);

        var vastaukset = document.createElement("div");
        vastaukset.setAttribute("class", "vastaus");
        leftElem.appendChild(vastaukset);

        var vastausTeksti = document.createElement("p");
        vastausTeksti.setAttribute("class", "teksti");
        vastausTeksti.style.fontWeight = "bold";
        vastausTeksti.innerHTML = "Oikeat vastaukset";
        vastaukset.appendChild(vastausTeksti);

        var indikaattori = 1;

        $sivu.find("tehtava").each(function(){

          var vastausWrapper = document.createElement("div");
          vastausWrapper.style.display = "inline-block";
          vastausWrapper.style.margin = "5px 0px 5px 0px";
          vastaukset.appendChild(vastausWrapper);

          var tottataruaElem = document.createElement("p");
          tottataruaElem.setAttribute("class", "teksti");
          tottataruaElem.setAttribute("style", "font-weight: bold");
          tottataruaElem.innerHTML = indikaattori + ".) " + $(this).children("vastaus").attr("totta-vai-tarua");
          vastausWrapper.appendChild(tottataruaElem);

          var vastausElem = document.createElement("p");
          vastausElem.setAttribute("class", "teksti");
          vastausElem.innerHTML = $(this).find("vastaus").html();
          vastausWrapper.appendChild(vastausElem);

          indikaattori++;

        });

        var kyselyWrapper = document.createElement("div");
        kyselyWrapper.setAttribute("class", "kyselywrapper");
        content.appendChild(kyselyWrapper);

        var upperLeftWrapper = document.createElement("div");
        upperLeftWrapper.setAttribute("class", "upperLeftWrapper");
        kyselyWrapper.appendChild(upperLeftWrapper);

        var upperRightWrapper = document.createElement("div");
        upperRightWrapper.setAttribute("class", "upperRightWrapper");
        kyselyWrapper.appendChild(upperRightWrapper);

        var formi = document.createElement("form");
        formi.setAttribute("name", "FORM");
        kyselyWrapper.appendChild(formi);

        var tottaElem = document.createElement("p");
        tottaElem.innerHTML = "Totta";
        tottaElem.setAttribute("class", "tottatarua");
        tottaElem.setAttribute("style", "float:left;");
        upperRightWrapper.appendChild(tottaElem);

        var taruaElem = document.createElement("p");
        taruaElem.innerHTML = "Tarua";
        taruaElem.setAttribute("class", "tottatarua");
        taruaElem.setAttribute("style", "float:right;");
        upperRightWrapper.appendChild(taruaElem);

        var $tehtavat = $sivu.find("kysely");
        var kysymysNumero = 1;

        $tehtavat.find("tehtava").each(function(){
          $tehtava = $(this);

          var tehtavaWrapper = document.createElement("div");
          tehtavaWrapper.setAttribute("class", "tehtavaWrapper");
          kyselyWrapper.appendChild(tehtavaWrapper);
          formi.appendChild(tehtavaWrapper);

          var leftWrapper = document.createElement("div");
          leftWrapper.setAttribute("class", "leftWrapper");
          tehtavaWrapper.appendChild(leftWrapper);

          var rightWrapper = document.createElement("div");
          rightWrapper.setAttribute("class", "rightWrapper");
          tehtavaWrapper.appendChild(rightWrapper);

          var kysymysElem = document.createElement("p");
          kysymysElem.setAttribute("class", "teksti");

          var kysymysText = $tehtava.find("kysymys").html();
          kysymysElem.innerHTML = kysymysNumero + ".) " + kysymysText
          leftWrapper.appendChild(kysymysElem);

          var fieldsetElem = document.createElement("fieldset");
          fieldsetElem.setAttribute("id", "group");

          var vastaus = $tehtava.find("vastaus").attr("totta-vai-tarua");

          var inputElem1 = document.createElement("input");
          inputElem1.setAttribute("type", "radio");
          inputElem1.setAttribute("name", kysymysNumero);
          inputElem1.setAttribute("class", "radionappi");
          inputElem1.setAttribute("style", "float:left;");
          inputElem1.setAttribute("value", "totta");
          fieldsetElem.appendChild(inputElem1);

          var inputElem2 = document.createElement("input");
          inputElem2.setAttribute("type", "radio");
          inputElem2.setAttribute("name", kysymysNumero);
          inputElem2.setAttribute("class", "radionappi");
          inputElem2.setAttribute("style", "float:right;");
          inputElem2.setAttribute("value", "tarua");
          fieldsetElem.appendChild(inputElem2);
          rightWrapper.appendChild(fieldsetElem);

          if(vastaus === "totta"){
            console.log("totta");
          } else{
            console.log("tarua");
          }

          kysymysNumero = kysymysNumero + 1;
        });

        function lineBreak(parent, amount){
          for(var i = 0; i < amount; i++){
            var elem = document.createElement("br");
            parent.appendChild(elem);
          }
        }

        var nameTextElem = document.createElement("p");
        nameTextElem.innerHTML = "Nimi";
        nameTextElem.setAttribute("class", "teksti");
        kyselyWrapper.appendChild(nameTextElem);
        formi.appendChild(nameTextElem);
        var nameElem = document.createElement("input");
        nameElem.setAttribute("type", "text");
        nameElem.setAttribute("name", "nimi");
        nameElem.style.margin = "0 0 5px 0";
        kyselyWrapper.appendChild(nameElem);
        formi.appendChild(nameElem);
        lineBreak(kyselyWrapper, 1);

        var selectionElem = document.createElement("select");
        selectionElem.setAttribute("name", "esimies");
        kyselyWrapper.appendChild(selectionElem);
        selectionElem.style.margin = "0 0 5px 0";
        formi.appendChild(selectionElem);
        var optionElem = document.createElement("option");
        optionElem.innerHTML = "Esimies";
        selectionElem.appendChild(optionElem);

        $(xml).find("esimiehet").find("esimies").each(function(){
          var esimies = $(this).html();

          var optionElem = document.createElement("option");
          optionElem.innerHTML = esimies;
          selectionElem.appendChild(optionElem);
        });

        lineBreak(kyselyWrapper, 1);

        var buttonElem = document.createElement("button");
        buttonElem.setAttribute("type", "button");
        buttonElem.setAttribute("onclick", "submitdata(this);");
        buttonElem.innerHTML = "Lähetä";
        kyselyWrapper.appendChild(buttonElem);
        formi.appendChild(buttonElem);
      }
    }
    addNavElements();
    addItems();
    pageTypes();
    imagePosition("titleImage");
  });
  document.getElementById("header").children[0].setAttribute("src", "pics/" + $(xml).find("logo").text());

  var color1 = $(xml).find("color1").text();
  var color1b = $(xml).find("color1b").text();
  var color2 = $(xml).find("color2").text();

  var sheet = document.createElement("style");
  sheet.innerHTML = "#header{ background-color: #" + color1 + "; } ";
  sheet.innerHTML += "#navbaar .active{ background-color: #" + color1b + "; } ";
  sheet.innerHTML += ".carousel-indicators .active img{ background-color: #" + color2 + "; } ";
  sheet.innerHTML += ".carousel-indicators .inactive img{ background-color: #" + color1b + "; } ";
  sheet.innerHTML += ".carousel-indicators img{ background-color: #" + color1b + "; } ";
  sheet.innerHTML += ".glyphicon-chevron-left{ color: #" + color1 + "; } ";
  sheet.innerHTML += ".glyphicon-chevron-right{ color: #" + color1 + "; } ";
  sheet.innerHTML += ".otsikko{ color: #" + color2 + "; } ";
  sheet.innerHTML += "#mob-control{ background-color: #" + color1 + "; } ";

  console.log(sheet.innerHTML);
  document.body.appendChild(sheet);

}

function next(elem) {
  do {
      elem = elem.nextSibling;
  } while (elem && elem.nodeType !== 1);
  return elem;
}

function closePanels(){
  $('div.aPanelIndicator').each(function(){
    this.innerHTML = "+";
  });
  $('div.aPanel').each(function(){
    var $thisPanel = $(this);
    $thisPanel.addClass("hidden");
    $thisPanel.removeClass("visible");
  });
}

function calcHeight(parentDiv){
  var accordionHeight = $(parentDiv[0]).height();
  var totalHeight = 0;
  var activeItems = $('div.item.active');
  var panelButtons = $(activeItems[0]).find('div.aPanelButton');
  $(panelButtons).each(function(){
    totalHeight += $(this).height() + 13; //margin + border + padding
  });
  var panelHeight = accordionHeight - totalHeight;
  return panelHeight;
}

function accordion(elem){
  var button = elem;
  var parent = $(button).parent();
  var nextElem = next(button);
  if($(nextElem).hasClass("hidden")){
    closePanels();
    button.children[0].innerHTML = "-";
    $(nextElem).css("max-height", calcHeight(parent));
    nextElem.classList.add("visible");
    nextElem.classList.remove("hidden");
  } else{
    button.children[0].innerHTML = "+";
    nextElem.classList.add("hidden");
    nextElem.classList.remove("visible");
  }
}

function checkActivity(){
  var indElements = document.getElementById("indicators").getElementsByTagName("li");
  var tabElements = document.getElementById("navlist").getElementsByTagName("li");
  for(var i = 0; i < indElements.length; i++){
    var indTo = indElements[i].getAttribute("data-slide-to");
    for(var o = 0; o < tabElements.length; o++){
      var tabTo = tabElements[o].getAttribute("data-slide-to");
      if(indTo === tabTo){
        if($(indElements[i]).hasClass("active")){
          tabElements[o].setAttribute("class", "active");
        }
        else{
          tabElements[o].setAttribute("class", "inactive");
        }
      }
    }
  }
}

function navFunc(){
  window.setTimeout(function(){checkActivity(); imagePosition("titleImage");}, 100);
}

function openMenu(){
  var menu = document.getElementById("navbaar");
  menu.style.display = "inline-block";
}

function closeMenu(){
  if($(window).width() < 1200){
    var menu = document.getElementById("navbaar");
    menu.style.display = "none";
  }
}

$("#esimies").load('options.php');

function submitdata(elem) {
  var formElem = elem.parentElement;
  var formData = new FormData(formElem);
  $(elem).parents(".item").find(".vastaus").css("display", "block");

  $.ajax({
    type: 'POST',
    dataType: 'text',
    url: "submit.php",
    data: $('FORM').serialize() + "&pageNumber=" + $(elem).parents(".item").index(),
    success: function(data) {
      console.log(data)
    },
    error: function(){
      console.log("error")
    }
  });
}

//drag and drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var dataElem = document.getElementById(data);
  if($(ev.target).hasClass("drop")){
    ev.target.appendChild(dataElem);
    if(ev.target.getAttribute("target") === dataElem.getAttribute("target")){
      $(dataElem).addClass("dragRight");
      $(dataElem).removeClass("dragWrong");
    }else{
      $(dataElem).addClass("dragWrong");
      $(dataElem).removeClass("dragRight");
    }
  } else {
    console.log("not a valid element");
  }
}
