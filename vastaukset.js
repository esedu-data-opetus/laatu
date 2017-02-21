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
  $(xml).find("sivu").each(function(){
    if($(this).children("tyyppi").html() === "kysely"){

        var otsikkoDiv = document.createElement("div");
        document.getElementById("wrapper").appendChild(otsikkoDiv);
        var otsikkoText = document.createElement("p");
        var otsikkoNumero = document.createElement("p");
        otsikkoDiv.appendChild(otsikkoText);
        otsikkoDiv.appendChild(otsikkoNumero);
       var otsikko = $(this).find("otsikko").text();
       var numero = $(this).index();
       otsikkoText.innerHTML = otsikko;
       otsikkoNumero.innerHTML = numero;
       var button = document.createElement("button");
       button.setAttribute("onclick", "vastausOpen()");
       button.innerHTML = "Näytä vastaukset";
       otsikkoDiv.appendChild(button);

    }
  });
}
function vastausOpen(){
  $.ajax({
    dataType: 'text',
    url: "vastaus.php",
    success: function(data) {
      console.log(data)
    },
    error: function(){
      console.log("error")
    }
  });
}
