<?php

$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "newdb";

$conn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn) {

    echo " connection successfully";
    echo"<br>";
} else {
    die("Connection to database failed: " . mysqli_connect_error());
}