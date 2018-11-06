<?php

include 'header.php';

require_once 'dbconnect.php';
	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();
	$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);
//	$json = json_encode($jsonData);
//	echo $jsonData;
	$dbconnect = null;

echo '<div id="content">';

foreach($jsonData->data as $mydata)

    {
         echo $mydata->name . "\n"
    }  

echo '</div>';

include 'footer.php'
	
?>

