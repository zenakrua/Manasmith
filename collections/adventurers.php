<?php
include 'header.php';
?>

<div id="collection">

	require_once 'dbconnect.php';

	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();

	$jsonData = $query->fetchAll(PDO::FETCH_GROUP|PDO::FETCH_ASSOC);

	echo json_encode($jsonData);

	$dbconnect = null;
	
</div>

<?php
include 'footer.php'
?>

