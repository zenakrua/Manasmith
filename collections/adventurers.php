<?php
include 'header.php';
?>

<?php

$host = getenv("MYSQL_DSN");
$user = getenv("MYSQL_USER");
$pass = getenv("MYSQL_PASSWORD");

	try {

		$dbconnect = new PDO("$host", $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
		$dbconnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	}

	catch(PDOException $e) {

		echo "Connection failed: " . $e->getMessage();

	};

?>

<?php
//	require_once 'dbconnect.php';
	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();
	$jsonData = $query->fetchAll(PDO::FETCH_GROUP|PDO::FETCH_ASSOC);
//	echo json_encode($jsonData);
	echo $jsonData;
	$dbconnect = null;
	
?>

<content>
	
test
	
</content>

<?php
include 'footer.php'
?>

