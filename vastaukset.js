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
        var otsikkoNumero = document.createElement("p");
        otsikkoDiv.appendChild(otsikkoText);
        otsikkoDiv.appendChild(otsikkoNumero);
       var otsikko = $(this).find("otsikko").text();
       var numero = $(this).index();
       otsikkoText.innerHTML = otsikko;
       otsikkoNumero.innerHTML = numero;
       $.ajax({
         method: "POST",
         dataType: 'json',
         url: "vastaus.php",
         data: { esimies: esimies },
         success: function(data) {

           $('#example').DataTable( {
               "data": data,
               "columns": [
                   { "data": "Nimi" },
                   { "data": "Esimies" },
                   { "data": "Vastaus" },
                   { "data": "Aika" },
                   { "data": "PageNumber" },
                   { "data": "KysymysNumero" }
               ]
           } );
           console.log(data)

     }


       });

    }
  });
}
