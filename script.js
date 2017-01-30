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

    console.log( images[i].src + " " + imageHeight + " " + imageWidth);

    var x = imageHeight / 2;
    var y = imageWidth / 2;

    x = -x + "px";
    y = -y + "px";
    console.log(x +" "+ y);

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
    var $nav = $(this).find("nav");
    var carousel = document.getElementById("carousel-inner");
    var content;
    var number = $sivu.find("numero").text()

    function addNavElements(){
      var tabElem = document.createElement("li");
      var tabTitle = document.createTextNode($nav.find("otsikko").text());
      tabElem.appendChild(tabTitle);
      var slideTo = $nav.find('sivulle').text();
      var activity = $nav.find('activity').text();
      tabElem.setAttribute("data-target", "#carousel-custom");
      tabElem.setAttribute("data-slide-to", slideTo);
      tabElem.setAttribute("class", activity);
      tabElem.setAttribute("onClick", "navFunc(); closeMenu();");
      var tabList = document.getElementById("navlist");
      tabList.appendChild(tabElem);
      var indElem = document.createElement("li");
      var indPict = document.createElement("img");
      indPict.setAttribute("src", "pics/indicator.png");
      indElem.appendChild(indPict);
      indElem.setAttribute("class", activity);
      indElem.setAttribute("data-target", "#carousel-custom");
      indElem.setAttribute("data-slide-to", slideTo);
      indElem.setAttribute("onClick", "navFunc()");
      var indicators = document.getElementById("indicators");
      indicators.appendChild(indElem);
    }

    function addItems(){
      var itemElem = document.createElement("div");
      itemElem.setAttribute("class", "item");
      var activity = $sivu.find("nav").find("activity").text();
      if(activity === "active"){
        itemElem.classList.add("active");
      }
      var pageNumber = "page " + $sivu.find("numero").text();
      itemElem.setAttribute("id", pageNumber)
      var contentElem = document.createElement("div");
      contentElem.setAttribute("class", "content");
      itemElem.appendChild(contentElem);
      carousel.appendChild(itemElem);

      content = contentElem;
    }

    function pageTypes(){

      var pageType = $sivu.find("tyyppi").text();
      console.log(number + " - " + pageType);

      if(pageType === "kansi"){
        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").text();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        content.appendChild(titleElem);

        var image = $sivu.find("kuva").text();
        var imgElem = document.createElement("img");
        imgElem.setAttribute("src", image);
        imgElem.setAttribute("class", "titleImage");
        content.appendChild(imgElem);
      } else if(pageType === "sivu1"){
        var wrapperElem = document.createElement("div");
        wrapperElem.setAttribute("class", "textWrapper");

        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").text();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        wrapperElem.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").text();
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
        var title = $sivu.children("otsikko").text();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        leftElem.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").text();
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
          var pTitle = $panel.find("otsikko").text();
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
          var pText = $panel.find("teksti").text();
          pTextElem.innerHTML = pText;
          // append
          panelElem.appendChild(pTextElem);
          accordion.appendChild(panelElem);
        });
        rightElem.appendChild(accordion);
        content.appendChild(leftElem);
        content.appendChild(rightElem);
      } else if(pageType === "dragdrop"){
        var $dragList = $sivu.find("drags");
        var nextId = 0;
        $dragList.find("drag").each(function(){
          var $drag = $(this);
          var dragElem = document.createElement("div");
          var target = $drag.attr("target");
          var dragTextElem = document.createElement("p");
          dragTextElem.innerHTML = $drag.text();
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
          dropTextElem.innerHTML = $drop.text();
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
        var title = $sivu.children("otsikko").text();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        leftElem.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").text();
        textElem.innerHTML = text;
        leftElem.appendChild(textElem);

        var kyselyWrapper = document.createElement("div");
        kyselyWrapper.setAttribute("class", "kyselywrapper");
        var upperLeftWrapper = document.createElement("div");
        kyselyWrapper.appendChild(upperLeftWrapper);
        upperLeftWrapper.setAttribute("class", "upperLeftWrapper");
        var upperRightWrapper = document.createElement("div");
        kyselyWrapper.appendChild(upperRightWrapper);
        upperRightWrapper.setAttribute("class", "upperRightWrapper");

        content.appendChild(kyselyWrapper);
        var tottaElem = document.createElement("p");
        tottaElem.innerHTML = "Totta";
        var taruaElem = document.createElement("p");
        taruaElem.innerHTML = "Tarua";
        taruaElem.setAttribute("class", "tottatarua");
        tottaElem.setAttribute("class", "tottatarua");
        taruaElem.setAttribute("style", "float:right;");
        tottaElem.setAttribute("style", "float:left;");
        upperRightWrapper.appendChild(tottaElem);
        upperRightWrapper.appendChild(taruaElem);

        var $tehtavat = $sivu.find("kysely");
        var kysymysNumero = 1;

        $tehtavat.find("tehtava").each(function(){
          $tehtava = $(this);

          var tehtavaWrapper = document.createElement("div");
          tehtavaWrapper.setAttribute("class", "tehtavaWrapper");
          kyselyWrapper.appendChild(tehtavaWrapper);

          var leftWrapper = document.createElement("div");
          leftWrapper.setAttribute("class", "leftWrapper");
          tehtavaWrapper.appendChild(leftWrapper);

          var rightWrapper = document.createElement("div");
          rightWrapper.setAttribute("class", "rightWrapper");
          tehtavaWrapper.appendChild(rightWrapper);

          var kysymysElem = document.createElement("p");
          kysymysElem.setAttribute("class", "teksti");

          var kysymysText = $tehtava.find("kysymys").text();
          kysymysElem.innerHTML = kysymysText
          leftWrapper.appendChild(kysymysElem);

          var fieldsetElem = document.createElement("fieldset");
          fieldsetElem.setAttribute("id", "group");

          var vastaus = $tehtava.find("vastaus").attr("totta-vai-tarua");

          var inputElem1 = document.createElement("input");
          inputElem1.setAttribute("type", "radio");
          inputElem1.setAttribute("name", kysymysNumero);
          inputElem1.setAttribute("class", "radionappi");
          inputElem1.setAttribute("style", "float:left;");
          fieldsetElem.appendChild(inputElem1);

          var inputElem2 = document.createElement("input");
          inputElem2.setAttribute("type", "radio");
          inputElem2.setAttribute("name", kysymysNumero);
          inputElem2.setAttribute("class", "radionappi");
          inputElem2.setAttribute("style", "float:right;");
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

        var nameElem = document.createElement("input");
        nameElem.setAttribute("type", "text");
        nameElem.setAttribute("name", "nimi");
        nameElem.style.margin = "0 0 5px 0";
        kyselyWrapper.appendChild(nameElem);

        lineBreak(kyselyWrapper, 1);

        var selectionElem = document.createElement("select");
        selectionElem.setAttribute("name", "esimies");
        kyselyWrapper.appendChild(selectionElem);
        selectionElem.style.margin = "0 0 5px 0";

        var optionElem = document.createElement("option");
        optionElem.innerHTML = "esimerkki";
        selectionElem.appendChild(optionElem);

        lineBreak(kyselyWrapper, 1);

        var buttonElem = document.createElement("button");
        buttonElem.setAttribute("onclick", "submitdata();");
        buttonElem.innerHTML = "Lähetä";
        kyselyWrapper.appendChild(buttonElem);
      }
    }
    addNavElements();
    addItems();
    pageTypes();
    imagePosition("titleImage");
  });
}

function next(elem) {
  do {
      elem = elem.nextSibling;
  } while (elem && elem.nodeType !== 1);
  return elem;
}

function closePanels(){
  $('p.aPanelIndicator').each(function(){
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
  console.log(accordionHeight);
  var totalHeight = 0;
  var activeItems = $('div.item.active');
  var panelButtons = $(activeItems[0]).find('div.aPanelButton');
  $(panelButtons).each(function(){
    console.log("button height " + $(this).height());
    totalHeight += $(this).height() + 13; //margin + border + padding
  });
  console.log("total button height" + totalHeight);
  var panelHeight = accordionHeight - totalHeight;
  console.log("panel height" + panelHeight);
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

function submitData(parentDiv) {
  var vastausElem = parentDiv;
  $(vastausElem).addClass("visible");
  $(vastausElem).removeClass("hidden");

  $(function() {
    $.ajax({
      type: 'POST',
      url: "submit.php",
      data: $("FORM").serialize(),
      success: function() {
        return "success";
      }
    });
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
