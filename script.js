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

function init(xml) {

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
      tabElem.setAttribute("onClick", "window.setTimeout(checkActivity, 100); closeMenu();");
      var tabList = document.getElementById("navlist");
      tabList.appendChild(tabElem);
      var indElem = document.createElement("li");
      var indPict = document.createElement("img");
      indPict.setAttribute("src", "pics/indicator.png");
      indElem.appendChild(indPict);
      indElem.setAttribute("class", activity);
      indElem.setAttribute("data-target", "#carousel-custom");
      indElem.setAttribute("data-slide-to", slideTo);
      indElem.setAttribute("onClick", "window.setTimeout(checkActivity, 100);");
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
          pIndicatorElem.classList.add("aPanelIndicator");
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

        var answerElem = document.createElement("p");
        $(answerElem).addClass("teksti");
        $(answerElem).addClass("hidden");
        answerElem.setAttribute("id", "vastauksetDiv")
        var answerText = $sivu.find("vastaukset").text();
        answerElem.innerHTML = answerText;
        leftElem.appendChild(answerElem);

        var valiaikainen = $sivu.find("valiaikainen");
        rightElem.innerHTML = $(valiaikainen[0]).text();

        var selectElem = document.createElement("select");
        selectElem.setAttribute("name", "esimiehet");
        selectElem.setAttribute("id", "esimies");

        $sivu.find("esimies").each(function(){
          var thisOption = $(this).text();
          var optionElem = document.createElement("option");
          optionElem.innerHTML = thisOption;
          selectElem.appendChild(optionElem);
        });
        rightElem.appendChild(selectElem);
        rightElem.innerHTML += $(valiaikainen[1]).text();
        content.appendChild(leftElem);
        content.appendChild(rightElem);
      }
    }
    addNavElements();
    addItems();
    pageTypes();
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

function submitData() {
  var vastausElem = document.getElementById("vastauksetDiv");
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
