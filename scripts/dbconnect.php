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
