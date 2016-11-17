
<!DOCTYPE html>
<html>
<head>
  <style>
  .otettu, .otettu a { color: #999; }
  li a { color: #000; text-decoration: none; }
  </style>
</head>
<body>
<?php
$lista = simplexml_load_file('C:/xampp/htdocs/laatu/esimiehet.xml');
$lista1 = simplexml_load_file('C:/xampp/htdocs/laatu/vastaukset.xml');
echo "<h1>$lista->nimi</h1>";

$n = 0;
echo '<ul>';
foreach ($lista->esimiehet->children() as $asia) {

  // tarkistetaan onko tuotteella otettu="on" -atribuutti

  echo "<li>".$asia."
          <a href=\"poistaTuote.php?n=".$n++."\">poista</a>
        </li>";
}
echo '</ul>';
?>

<form method="get" action="lisaaTuote.php">
  <input type="text" name="esimies" placeholder="Lisää esimies" />
  <input type="submit" value="Lisää" />
</form>
<br>
<?php
echo '<table style="border: 1px solid black"><tr><td>Nimi</td><tr>';






foreach ($lista1->nimet->children() as $asia1) {
  echo "<td style='width: 80px'>".$asia1."</td>";
  }
echo "</tr><td>Aikaisemman osaamisen tunnistamisen ja tunnustamisen prosessikuvauksen mukaan ohjauskeskustelun käyminen on opiskelijan vastuulla</td><tr>";
foreach ($lista1->vastaukset1->children() as $asia2) {
  echo "<td>".$asia2."</td>";
  }
echo "</tr><td>Aikuiskoulutushaussa vastuuopettaja ja opintosihteeri vastaavat yhdessä mahdollisten hakijoiden informoinnista ja ohjaamisesta</td><tr>";
foreach ($lista1->vastaukset2->children() as $asia3) {
  echo "<td>".$asia3."</td>";
  }
echo "</tr><td>Opettajan vastuulla on ohjata opiskelijat vastaamaan opiskelijapalautekyselyihin (nuorten tulo-, olo- ja päättökyselyt, aikuiskoulutus OPAL ja AIPAL sekä kummankin koulutusmuodon opettajan henkilökohtainen palaute)</td><tr>";
foreach ($lista1->vastaukset3->children() as $asia4) {
  echo "<td>".$asia4."</td>";
  }
echo "</tr><td>Opiskelija tunnistaa olemassa olevan osaamisen</td><tr>";
foreach ($lista1->vastaukset4->children() as $asia5) {
  echo "<td>".$asia5."</td>";
  }
echo "</tr><td>Oppisopimuskoordinaattori ja vastuuopettaja vastaavat yhdessä oppisopimuskoulutuksen tietopuolisen koulutuksen suunnittelusta</td><tr>";
foreach ($lista1->vastaukset5->children() as $asia6) {
  echo "<td>".$asia6."</td>";
  }
echo "</tr>";


?>

</body>
</html>
