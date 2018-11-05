<?php
include 'header.php';
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

