<?php

use google\appengine\api\cloud_storage\CloudStorageTools;

include 'header.php';

if ($_SERVER['REQUEST_URI']=='/') {
	include 'home.php';
} elseif ($_SERVER['REQUEST_URI']=='/adventurers/') {
	include 'adventurers.php';
} elseif ($_SERVER['REQUEST_URI']=='/mana-circles/') {
	include 'mana-circles.php';
} elseif ($_SERVER['REQUEST_URI']=='/weapons/') {
	include 'weapons.php';
} elseif ($_SERVER['REQUEST_URI']=='/wyrmprints/') {
	include 'wyrmprints.php';
} elseif ($_SERVER['REQUEST_URI']=='/dragons/') {
	include 'dragons.php';
} else {
	include '404.php';
}
	
include 'footer.php';

?>
