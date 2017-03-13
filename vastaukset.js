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

var esimies = "Onni Heinonen";

function init(xml) {

  $(xml).find("sivu").each(function(){

    if($(this).children("tyyppi").html() === "kysely"){

      var otsikkoDiv = document.createElement("div");
      document.getElementById("wrapper").appendChild(otsikkoDiv);

      var otsikkoText = document.createElement("p");
      var otsikko = $(this).find("otsikko").text();
      otsikkoText.innerHTML = otsikko;
      otsikkoDiv.appendChild(otsikkoText);

      var otsikkoNumero = document.createElement("p");
      var numero = $(this).index();
      otsikkoNumero.innerHTML = numero;
      otsikkoDiv.appendChild(otsikkoNumero);

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
    }
  });
}
