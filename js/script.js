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

var menuStatus = 0;

function menuFunc(){
  var menu = document.getElementById("navbaar");
  if(menuStatus === 0){
    menu.style.display = "inline-block";
    menuStatus = 1;
  } else{
    menu.style.display = "none";
    menuStatus = 0;
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
