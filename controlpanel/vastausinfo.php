<?php

$id = $_GET['id'];

$servername = "paja.esedu.fi";
$username = "laatu";
$password = "K@tt1m@t1k@1nen";
$dbname = "laatuDB";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql1 = "SELECT vastaus1 FROM vastaukset WHERE kysely_id = $id";
$sql2 = "SELECT vastaus2 FROM vastaukset WHERE kysely_id = $id";
$sql3 = "SELECT vastaus3 FROM vastaukset WHERE kysely_id = $id";
$sql4 = "SELECT vastaus4 FROM vastaukset WHERE kysely_id = $id";
$sql5 = "SELECT vastaus5 FROM vastaukset WHERE kysely_id = $id";
$result1 = $conn->query($sql1);
$result2 = $conn->query($sql2);
$result3 = $conn->query($sql3);
$result4 = $conn->query($sql4);
$result5 = $conn->query($sql5);

if ($result1->num_rows > 0) {
    // output data of each row
    while($row1 = $result1->fetch_assoc()) {
if(empty($row1["vastaus1"])){echo "";}else{
        echo "<p>Aikaisemman osaamisen tunnistamisen ja tunnustamisen prosessikuvauksen mukaan ohjauskeskustelun käyminen on opiskelijan vastuulla  " . $row1["vastaus1"]. "</p><br>";
    }
}}

if ($result2->num_rows > 0) {
    // output data of each row
    while($row2 = $result2->fetch_assoc()) {
if(empty($row2["vastaus2"])){echo "";}else{
        echo "<p>Aikuiskoulutushaussa vastuuopettaja ja opintosihteeri vastaavat yhdessä mahdollisten hakijoiden informoinnista ja ohjaamisesta  " . $row2["vastaus2"]. "</p><br>";
    }
}}

if ($result3->num_rows > 0) {
    // output data of each row
    while($row3 = $result3->fetch_assoc()) {
if(empty($row3["vastaus3"])){echo "";}else{
        echo "<p>Opettajan vastuulla on ohjata opiskelijat vastaamaan opiskelijapalautekyselyihin (nuorten tulo-, olo- ja päättökyselyt, aikuiskoulutus OPAL ja AIPAL sekä kummankin koulutusmuodon opettajan henkilökohtainen palaute)  " . $row3["vastaus3"]. "</p><br>";
    }
}}

if ($result4->num_rows > 0) {
    // output data of each row
    while($row4 = $result4->fetch_assoc()) {
if(empty($row4["vastaus4"])){echo "";}else{
        echo "<p>Opiskelija tunnistaa olemassa olevan osaamisen  " . $row4["vastaus4"]. "</p><br>";
    }
}}

if ($result5->num_rows > 0) {
    // output data of each row
    while($row5 = $result5->fetch_assoc()) {
if(empty($row5["vastaus5"])){echo "";}else{
        echo "<p>Oppisopimuskoordinaattori ja vastuuopettaja vastaavat yhdessä oppisopimuskoulutuksen tietopuolisen koulutuksen suunnittelusta  " . $row5["vastaus5"]. "</p><br>";
    }
}}


 ?>
