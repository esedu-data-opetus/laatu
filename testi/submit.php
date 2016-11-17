<?php
$answer1 = $_POST['kysymys1'];
$answer2 = $_POST['kysymys2'];
$answer3 = $_POST['kysymys3'];
$answer4 = $_POST['kysymys4'];
$answer5 = $_POST['kysymys5'];
$nimi = $_POST['nimi'];
$esimies = $_POST['esimies'];



$lista = simplexml_load_file('vastaukset.xml');


$uusi2 = $lista->vastaukset1->addChild('vastaus1',$answer1 );
$uusi3 = $lista->vastaukset2->addChild('vastaus2',$answer2 );
$uusi4 = $lista->vastaukset3->addChild('vastaus3',$answer3 );
$uusi5 = $lista->vastaukset4->addChild('vastaus4',$answer4 );
$uusi6 = $lista->vastaukset5->addChild('vastaus5',$answer5 );
$uusi7 = $lista->nimet->addChild('nimi1',$nimi );
$uusi8 = $lista->esimiehet->addChild('esimies',$esimies );



// Tallennus siistimmin
$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($lista->asXML());
$dom->save("vastaukset.xml");
?>
