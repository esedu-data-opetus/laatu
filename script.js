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
        var titleElem = document.createElement("p");
        titleElem.setAttribute("class", "otsikko");
        var title = $sivu.children("otsikko").text();
        var titleNode = document.createTextNode(title);
        titleElem.appendChild(titleNode);
        content.appendChild(titleElem);

        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").text();
        textElem.innerHTML = text;
        content.appendChild(textElem);
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
          var pIndicatorElem = document.createElement("p");
          pIndicatorElem.innerHTML = "+";
          pIndicatorElem.classList.add("aPanelIndicator");
          // panel title
          var pTitleElem = document.createElement("p");
          pTitleElem.classList.add("teksti");
          pTitleElem.classList.add("aPanelButtonText");
          var pTitle = $panel.find("otsikko").text();
          pTitleElem.innerHTML = pTitle;
          // append
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
        content.innerHTML = $sivu.find("valiaikainen").text();
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
  var totalHeight = 0;
  var activeItems = $('div.item.active');
  var panelButtons = $(activeItems[0]).find('div.aPanelButton');
  $(panelButtons).each(function(){
    totalHeight += $(this).height() + 13; //margin + border + padding
  });
  return accordionHeight - totalHeight;
}

function accordion(elem){
  var button = elem;
  var parent = $(button).parent();
  var nextElem = next(button);
  if($(nextElem).hasClass("hidden")){
    closePanels();
    button.children[0].innerHTML = "-";
    $(nextElem).css("height", calcHeight(parent));
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

//dragdrop testi
$(function(){
  var block1 = document.getElementById("block1");
  $(block1).data("target", 4);
  var block2 = document.getElementById("block2");
  $(block2).data("target", 4);
  var block3 = document.getElementById("block3");
  $(block3).data("target", 4);
  var block9 = document.getElementById("block9");
  $(block9).data("target", 2);
  var block4 = document.getElementById("block4");
  $(block4).data("target", 1);
  var block5 = document.getElementById("block5");
  $(block5).data("target", 1);
  var block6 = document.getElementById("block6");
  $(block6).data("target", 2);
  var block7 = document.getElementById("block7");
  $(block7).data("target", 2);
  var block10 = document.getElementById("block10");
  $(block10).data("target", 3);
  var block11 = document.getElementById("block11");
  $(block11).data("target", 3);
  var block12 = document.getElementById("block12");
  $(block12).data("target", 3);
  var block8 = document.getElementById("block8");
  $(block8).data("target", 2);

  var goal1 = document.getElementById("goal1");
  $(goal1).data("id", 1);
  var goal2 = document.getElementById("goal2");
  $(goal2).data("id", 2);
  var goal3 = document.getElementById("goal3");
  $(goal3).data("id", 3);
  var goal4 = document.getElementById("goal4");
  $(goal4).data("id", 4);

  $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
    drop: handleDropEvent,
  });
});

function handleDropEvent( event, ui ) {
  var drop = $(this).data( 'id' );
  var drag = ui.draggable.data( 'target' );
  if(drop === drag){
    ui.draggable.addClass( "droppedright" );
    ui.draggable.removeClass( "droppedwrong" );
  } else{
    ui.draggable.addClass( "droppedwrong" );
    ui.draggable.removeClass( "droppedright" );
  }
}
