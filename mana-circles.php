<?php

require 'vendor/autoload.php';

use Google\Cloud\Storage\StorageClient;

$storage = new StorageClient();
$storage->registerStreamWrapper();

$contents = file_get_contents('gs://manasmith-221002.appspot.com/test.txt');

echo $contents;

?>
