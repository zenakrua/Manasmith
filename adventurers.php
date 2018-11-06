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
				$options = array('size' => 120, 'crop' => true);
				$image_file = 'gs://${manasmith-221002.appspot.com}/'+value.id+'_'+value.variation+'.png';
				$image_url = CloudStorageTools::getImageServingUrl($image_file, $options);
				$('#content').append(value.name+'<img src='+$image_url);
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

