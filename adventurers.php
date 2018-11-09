<?php

require_once 'dbconnect.php';
	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();
	$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($jsonData);
	echo $json;
	$dbconnect = null;

//foreach($jsonData->data as $mydata)

//    {
//         echo $mydata->name . "\n"
//    }
	
?>

