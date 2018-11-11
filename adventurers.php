<?php

require_once 'dbconnect.php';
$query = $dbconnect->prepare("select * from adventurers order by element asc, rarity desc, name asc, variation asc");
$query->execute();
$adventurers = $query->fetchAll(PDO::FETCH_ASSOC);
$dbconnect = null;

foreach($adventurers as $adventurer){

	echo '<table class="adventurer"><tr><th>'.$adventurer['name'].'</th></tr><tr><td><img src="https://storage.cloud.google.com/manasmith-221002.appspot.com/images/adventurers/portraits/'.$adventurer['id'].'_'.$adventurer['variation'].'.png" /></td></tr></table>';

}
	
?>
