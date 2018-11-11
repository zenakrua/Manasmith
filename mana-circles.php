<?php

require 'vendor/autoload.php';

use Google\Cloud\Storage\StorageClient;

$storage = new StorageClient();
$storage->registerStreamWrapper();
var_dump($storage);

$contents = file_get_contents('gs://manasmith-221002.appspot.com/test.txt');

?>
