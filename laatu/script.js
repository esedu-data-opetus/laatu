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
  var $xml = $(xml);
  var $title = $xml.find("title");
  var titleText = $title.text();
  document.getElementsByTagName("title").innerHTML = titleText;

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
    addTitle("sivu1");
    var sivut = ["sivu2","sivu3","sivu4","sivu5","sivu6","sivu7","sivu8","sivu9","sivu10","sivu11","sivu12","sivu13","sivu14","sivu15","sivu16"];
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
}

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

  if(document.getElementById("indicator1").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "active");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator2").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "active");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator3").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "active");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator4").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "active");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator5").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "active");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator6").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "active");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator7").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "active");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator8").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "active");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator9").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "active");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator10").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "active");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator11").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "active");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator12").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "active");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator13").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "active");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator14").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "active");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator15").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "active");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator16").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "active");
    document.getElementById("tab17").setAttribute("class", "inactive");
  }else if(document.getElementById("indicator17").getAttribute("class") === "active"){
    document.getElementById("tab1").setAttribute("class", "inactive");
    document.getElementById("tab2").setAttribute("class", "inactive");
    document.getElementById("tab3").setAttribute("class", "inactive");
    document.getElementById("tab4").setAttribute("class", "inactive");
    document.getElementById("tab5").setAttribute("class", "inactive");
    document.getElementById("tab6").setAttribute("class", "inactive");
    document.getElementById("tab7").setAttribute("class", "inactive");
    document.getElementById("tab8").setAttribute("class", "inactive");
    document.getElementById("tab9").setAttribute("class", "inactive");
    document.getElementById("tab10").setAttribute("class", "inactive");
    document.getElementById("tab11").setAttribute("class", "inactive");
    document.getElementById("tab12").setAttribute("class", "inactive");
    document.getElementById("tab13").setAttribute("class", "inactive");
    document.getElementById("tab14").setAttribute("class", "inactive");
    document.getElementById("tab15").setAttribute("class", "inactive");
    document.getElementById("tab16").setAttribute("class", "inactive");
    document.getElementById("tab17").setAttribute("class", "active");
  }
}

//dragdrop testi
$(function(){
  var block1 = document.getElementById("block1");
  $(block1).data("target", 3);
  var block2 = document.getElementById("block2");
  $(block2).data("target", 4);
  var block3 = document.getElementById("block3");
  $(block3).data("target", 4);
  var block9 = document.getElementById("block9");
  $(block9).data("target", 2);
  var block4 = document.getElementById("block4");
  $(block4).data("target", 4);
  var block5 = document.getElementById("block5");
  $(block5).data("target", 1);
  var block13 = document.getElementById("block13");
  $(block13).data("target", 3);
  var block6 = document.getElementById("block6");
  $(block6).data("target", 1);
  var block7 = document.getElementById("block7");
  $(block7).data("target", 2);
  var block10 = document.getElementById("block10");
  $(block10).data("target", 2);
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

  $( ".draggable" ).draggable({
    revert: "invalid",
  });
  $( ".droppable" ).droppable({
    drop: handleDropEvent,
  });
});

var rightAnswers = 0;

function handleDropEvent( event, ui ) {
  var drop = $(this).data( 'id' );
  var drag = ui.draggable.data( 'target' );
  if(drop === drag){
    rightAnswers += 1;
    console.log(rightAnswers);
    ui.draggable.addClass( "droppedright" );
    ui.draggable('disable');
  } else{
    ui.draggable.addClass( "droppedwrong" );
    ui.draggable('disable');
  }
}
