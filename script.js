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
      tabElem.setAttribute("onClick", "window.setTimeout(checkActivity, 100);");
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

        var overflowElem = document.createElement("div");
        overflowElem.setAttribute("class", "textOverflow");
        var textElem = document.createElement("p");
        textElem.setAttribute("class", "teksti");
        var text = $sivu.children("teksti").text();
        textElem.innerHTML = text;
        overflowElem.appendChild(textElem);
        content.appendChild(overflowElem);
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
          var pButtonElem = document.createElement("button");
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

function calcHeight(){
  // var accordionHeight = $('div.accordion').height();
  var accordionHeight = "380";
  console.log("accordion " + accordionHeight);
  var totalHeight = 0;
  var activeItems = $('div.item.active');
  var panelButtons = $(activeItems[0]).find('button.aPanelButton');
  $(panelButtons).each(function(){
    var thisButton = this;
    totalHeight += $(thisButton).height();
  });
  console.log("total " + totalHeight);
  console.log("panel " + (accordionHeight - totalHeight));
  return accordionHeight - totalHeight;
}

function accordion(elem){
  var button = elem;
  var nextElem = next(button);
  if($(nextElem).hasClass("hidden")){
    closePanels();
    button.children[0].innerHTML = "-";
    $(nextElem).css("height", calcHeight())
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
/*
  function addTitle(sivu){
    var $sivu = $xml.find(sivu);
    var $tekstit = $sivu.find("tekstit");
    var $otsikko = $tekstit.find("otsikko");
    var value = $otsikko.text();
    var attribute = $otsikko.attr("id");
    document.getElementById(attribute).innerHTML = value;
  }
  function addText(sivu){
    var $sivu = $xml.find(sivu);
    var $tekstit = $sivu.find("tekstit");
    var $teksti = $tekstit.find("teksti");
    var value = $teksti.text();
    var attribute = $teksti.attr("id");
    document.getElementById(attribute).innerHTML = value;
  }
  function addAccordion(sivu, haitari){
    var $sivu = $xml.find(sivu);
    var $haitarilista = $sivu.find("haitarilista");
    var $haitari = $haitarilista.find(haitari);
    var $otsikko = $haitari.find("otsikko");
    var $teksti = $haitari.find("teksti");
    var otsikkoValue = $otsikko.text();
    var otsikkoAttribute = $otsikko.attr("id");
    var tekstiValue = $teksti.text();
    var tekstiAttribute = $teksti.attr("id");
    document.getElementById(otsikkoAttribute).innerHTML = otsikkoValue;
    document.getElementById(tekstiAttribute).innerHTML = tekstiValue;
  }
  function addContent(){
    //vastaukset
    var $vastaukset = $xml.find("vastaukset");
    var vastauksetValue = $vastaukset.text();
    document.getElementById("vastaukset").innerHTML = vastauksetValue;

    //addTitle("sivu1");
    //var sivut = ["sivu2","sivu3","sivu4","sivu5","sivu6","sivu7","sivu8","sivu9","sivu10","sivu11","sivu12","sivu13","sivu14","sivu15","sivu16"];



    for(i=0; i < sivut.length; i++){
      addTitle(sivut[i]);
      addText(sivut[i]);
    }
    addAccordion("sivu3", "haitari1");
    addAccordion("sivu3", "haitari2");
    addAccordion("sivu3", "haitari3");
    addAccordion("sivu3", "haitari4");
    addAccordion("sivu4", "haitari5");
    addAccordion("sivu6", "haitari6");
    addAccordion("sivu6", "haitari7");
    addAccordion("sivu7", "haitari8");
    addAccordion("sivu7", "haitari9");
    addAccordion("sivu9", "haitari10");
    addAccordion("sivu9", "haitari11");
    addAccordion("sivu9", "haitari12");
    addAccordion("sivu10", "haitari13");
    addAccordion("sivu10", "haitari14");
    addAccordion("sivu12", "haitari15");
    addAccordion("sivu12", "haitari16");
    addAccordion("sivu14", "haitari17");
    addAccordion("sivu14", "haitari18");
  }
  addContent();

//haitari listat

$(function() {
  var icons = {
    header: "iconMinus",
    activeHeader: "iconPlus"
  };

  $( ".accordion" ).accordion({
    icons: icons,
    collapsible: true,
    active: false,
    heightStyle: "fill"
  });
});

//tab lista

  function checkActivity(){

    var tab1 = document.getElementById("tab1");
    $(tab1).data("tab", 1);
    var tab2 = document.getElementById("tab2");
    $(tab2).data("tab", 2);
    var tab3 = document.getElementById("tab3");
    $(tab3).data("tab", 3);
    var tab4 = document.getElementById("tab4");
    $(tab4).data("tab", 4);
    var tab5 = document.getElementById("tab5");
    $(tab5).data("tab", 5);
    var tab6 = document.getElementById("tab6");
    $(tab6).data("tab", 6);
    var tab7 = document.getElementById("tab7");
    $(tab7).data("tab", 7);
    var tab8 = document.getElementById("tab8");
    $(tab8).data("tab", 8);
    var tab9 = document.getElementById("tab9");
    $(tab9).data("tab", 9);
    var tab10 = document.getElementById("tab10");
    $(tab10).data("tab", 10);
    var tab11 = document.getElementById("tab11");
    $(tab11).data("tab", 11);
    var tab12 = document.getElementById("tab12");
    $(tab12).data("tab", 12);
    var tab13 = document.getElementById("tab13");
    $(tab13).data("tab", 13);
    var tab14 = document.getElementById("tab14");
    $(tab14).data("tab", 14);
    var tab15 = document.getElementById("tab15");
    $(tab15).data("tab", 15);
    var tab16 = document.getElementById("tab16");
    $(tab16).data("tab", 16);
    var tab17 = document.getElementById("tab17");
    $(tab17).data("tab", 17);
    var tab18 = document.getElementById("tab18");
    $(tab18).data("tab", 18);
    var tab19 = document.getElementById("tab19");
    $(tab19).data("tab", 19);
    var tab20 = document.getElementById("tab20");
    $(tab20).data("tab", 20);

    var tabs = [tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10, tab11, tab12, tab13, tab14, tab15, tab16, tab17, tab18, tab19, tab20];

    var indicator1 = document.getElementById("indicator1");
    $(indicator1).data("indicator", 1);
    var indicator2 = document.getElementById("indicator2");
    $(indicator2).data("indicator", 2);
    var indicator3 = document.getElementById("indicator3");
    $(indicator3).data("indicator", 3);
    var indicator4 = document.getElementById("indicator4");
    $(indicator4).data("indicator", 4);
    var indicator5 = document.getElementById("indicator5");
    $(indicator5).data("indicator", 5);
    var indicator6 = document.getElementById("indicator6");
    $(indicator6).data("indicator", 6);
    var indicator7 = document.getElementById("indicator7");
    $(indicator7).data("indicator", 7);
    var indicator8 = document.getElementById("indicator8");
    $(indicator8).data("indicator", 8);
    var indicator9 = document.getElementById("indicator9");
    $(indicator9).data("indicator", 9);
    var indicator10 = document.getElementById("indicator10");
    $(indicator10).data("indicator", 10);
    var indicator11 = document.getElementById("indicator11");
    $(indicator11).data("indicator", 11);
    var indicator12 = document.getElementById("indicator12");
    $(indicator12).data("indicator", 12);
    var indicator13 = document.getElementById("indicator13");
    $(indicator13).data("indicator", 13);
    var indicator14 = document.getElementById("indicator14");
    $(indicator14).data("indicator", 14);
    var indicator15 = document.getElementById("indicator15");
    $(indicator15).data("indicator", 15);
    var indicator16 = document.getElementById("indicator16");
    $(indicator16).data("indicator", 16);
    var indicator17 = document.getElementById("indicator17");
    $(indicator17).data("indicator", 17);
    var indicator18 = document.getElementById("indicator18");
    $(indicator18).data("indicator", 18);
    var indicator19 = document.getElementById("indicator19");
    $(indicator19).data("indicator", 19);
    var indicator20 = document.getElementById("indicator20");
    $(indicator20).data("indicator", 20);

    var indicators = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11, indicator12, indicator13, indicator14, indicator15, indicator16, indicator17, indicator18, indicator19, indicator20];

    for(var i = 0; i < indicators.length; i++){
      if(indicators[i].getAttribute("class") === "active"){
        for(var o = 0; o < tabs.length; o++){
          var indicator = $(indicators[i]).data("indicator");
          var tab = $(tabs[o]).data("tab");
          if(tab === indicator){
            tabs[o].setAttribute("class", "active");
            var offset = tabs[o].offsetTop;
            console.log(offset);
            $("navlist").scrollTop( offset );
          }else{
            tabs[o].setAttribute("class", "inactive");
          }
        }
      }
    }
  }
*/

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
