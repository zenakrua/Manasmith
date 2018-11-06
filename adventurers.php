<?php
include 'header.php';

require_once 'dbconnect.php';
	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();
	$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($jsonData);
//	echo $jsonData;
	$dbconnect = null;

echo '<div id="content">';

foreach($json->data as $mydata)

    {
         echo $mydata->name . "\n";
         foreach($mydata->values as $values)
         {
              echo $values->value . "\n";
         }
    }  

echo '</div>';

<?php
include 'footer.php'
?>

