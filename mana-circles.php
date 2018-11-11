<?php

require 'vendor/autoload.php';

use Google\Cloud\Storage\StorageClient;

$storage = new StorageClient();
$storage->registerStreamWrapper();

$contents = file_get_contents('gs://manasmith-221002.appspot.com/test.txt');

echo $contents;

require_once '/mnt/files/Projects/google-cloud-sdk/platform/google_appengine/google/appengine/api/cloud_storage/CloudStorageTools.php';
use google\appengine\api\cloud_storage\CloudStorageTools;

$options = ['size' => 400, 'crop' => true];
$image_file = "gs://${my_bucket}/image.jpg";
$image_url = CloudStorageTools::getImageServingUrl($image_file, $options);

echo $image_url;

?>
