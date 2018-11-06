<?php
include 'header.php';
?>

<?php

	require_once 'dbconnect.php';

	$query = $dbconnect->prepare("select * from adventurers");
	$query->execute();

	$jsonData = $query->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($jsonData);
//	echo $jsonData;

	$dbconnect = null;
	
?>


<script>
	
$(document).ready(function() {
	$.ajax({
		contentType: 'application/json; charset=UTF-8',
		dataType: 'json',
		url: 'functions.php',
		success: function(data) {
//			alert('Success.');
			$.each(data, function(key,value) {
				var $name = value.name;
				$("#content").append($name);
			});
		},
		error: function(data, errorThrown){
			alert('Request failed: '+errorThrown);
		}
	});
});

</script>

<div id="content">
	
test
	
</div>

<?php
include 'footer.php'
?>

