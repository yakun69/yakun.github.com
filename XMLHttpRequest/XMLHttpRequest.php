<?php

$firstName = $_GET["firstName"];

$str = $firstName;

$str2 = '{"message":"' . $str . '"}' . PHP_EOL;

file_put_contents('XMLHttpRequest.txt', $str2, FILE_APPEND);

echo $str2;