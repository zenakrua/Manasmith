<?php
include 'header.php';
?>

<script>
	
$(document).ready(function() {
	$.ajax({
		contentType: 'application/json; charset=UTF-8',
		dataType: 'json',
		url: 'queries.php',
		success: function(data) {
//			alert('Success.');
			$.each(data, function(key,value) {
				$("#content").append("<table>"
						    	+"<tr>"
						    		+"<th>"
						     			+value.name
						     		+"</th>"
						    	+"</tr>"
						+"</table>");
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

