<?php
use google\appengine\api\cloud_storage\CloudStorageTools;

require_once 'dbconnect.php';
$query = $dbconnect->prepare("select * from adventurers order by element asc, rarity desc, name asc, variation asc");
$query->execute();
$adventurers = $query->fetchAll(PDO::FETCH_ASSOC);
//$list = json_encode($jsonData);
//var_dump($jsonData);
//echo $list;
$dbconnect = null;

foreach($adventurers as $adventurer){

	$options = ['size' => 400, 'crop' => true];
	$image_file = 'gs://${manasmith-221002.appspot.com}/'.$adventurer['id'].'_'.$adventurer['variation'].'.png';
//	var_dump($image_file);
	$image_url = CloudStorageTools::getImageServingUrl($image_file, $options);
//	var_dump($image_url);
//	$image_url = 'img';

//	echo $adventurer['name'];

	echo '<table class="adventurer"><tr><th>'.$adventurer['name'].'</th></tr><tr><td>test</td></tr></table>';
//	echo '<table class="adventurer"><tr><th>'.$adventurer['name'].'</th></tr><tr><td><img src="gs://${manasmith-221002.appspot.com}/images/adventurers/portraits/'.$adventurer['id'].'_'.$adventurer['variation'].'.png"></td></tr></table>';

}
	
?>
