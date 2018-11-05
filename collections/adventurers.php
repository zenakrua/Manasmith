<?php
include 'header.php';
?>

<?php

	require_once '../dbconnect.php';

	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();

	$jsonData = $query->fetchAll(PDO::FETCH_GROUP|PDO::FETCH_ASSOC);

	echo json_encode($jsonData);
//	echo $jsonData;

	$dbconnect = null;
	
?>

<content>
	
test
	
</content>

<?php
include 'footer.php'
?>

