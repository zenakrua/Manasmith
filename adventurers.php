<?php

require_once 'dbconnect.php';
$query = $dbconnect->prepare("select * from adventurers");
$query->execute();
$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);
$adventurers = json_encode($jsonData);
//echo $json;
$dbconnect = null;

//$options = ['size' => 400, 'crop' => true];
//$image_file = "gs://${manasmith-221002.appspot.com}/images/adventurers/portraits/110029_1.png";
//$image_url = CloudStorageTools::getImageServingUrl($image_file, $options);

//echo $image_url;

foreach($adventurers->data as $adventurer){
	
	foreach($adventurer->values as $values){
		
        	echo $values->name;
		
	}
	
}
	
?>

