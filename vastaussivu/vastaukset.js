//ajax (hakee xml:n)
$.ajax({
  type: "GET",
  url: "/laatu/elements.xml",
  dataType: "xml",
  success: function (xml) {
    init(xml);
    console.log("success");
  },
  error: function(){
    console.log("error");
  }
});

var esimies = "Onni Heinonen";

function init(xml) {


  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "vastaus.php",
    data: { esimies: esimies },
    success: function(data) {
      $('#example').DataTable({
        "data": data,
        "columns": [
          { "data": "Nimi" },
          { "data": "Esimies" },
          { "data": "Vastaus" },
          { "data": "Aika" },
          { "data": "PageNumber" },
          { "data": "KysymysNumero" }
        ]
      });
      console.log(data)
    },
    error: function(){
      console.log("error");
    }
  });

  $(xml).find("sivu").each(function(){

    if($(this).children("tyyppi").html() === "kysely"){

      var otsikkoDiv = document.createElement("div");
      document.getElementById("wrapper").appendChild(otsikkoDiv);

      var otsikkoText = document.createElement("p");
      var otsikko = $(this).find("otsikko").text();
      otsikkoText.innerHTML = otsikko;
      otsikkoDiv.appendChild(otsikkoText);

      var kysymysnumero = 1;

      $(this).find("tehtava").each(function(){
        var kysymysText = document.createElement("p");
        var kysmys = $(this).find("kysymys").text();
        kysymysText.innerHTML = kysymysnumero + ".) " + kysmys + "( " + $(this).children("vastaus").attr("totta-vai-tarua")+ " )";
        otsikkoDiv.appendChild(kysymysText);
        kysymysnumero ++;
      });

      var otsikkoNumero = document.createElement("p");
      var numero = $(this).index();
      otsikkoNumero.innerHTML = numero;
      otsikkoDiv.appendChild(otsikkoNumero);

    }
  });
}
