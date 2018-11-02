
<?php

$host = "manasmith-221002:us-east1:manasmith";
$user = "silke";
$pass = "Y1j5]NZb)GfH";
$database = "collections";


try {

	$dbconnect = new PDO("mysql:host=$host;dbname=$database", $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
	$dbconnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}

catch(PDOException $e) {

	echo "Connection failed: " . $e->getMessage();

};

?>
