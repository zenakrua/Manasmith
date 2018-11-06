<?php

	require_once 'dbconnect.php';

	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();

	$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($jsonData);
//	echo $jsonData;

	$dbconnect = null;
	
?>
