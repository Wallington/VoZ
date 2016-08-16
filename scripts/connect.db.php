<?php
	
	// Define the Mysql database
	define ('USER', 'foreveri');
	define ('PASS', 'Vector@1080*');
	define ('HOST', 'localhost');
	define ('NAME', 'foreveri_voz');
	
	$dbc = mysqli_connect(HOST,USER,PASS,NAME) or die ('Were could not access MySQL: ' . mysqli_connect_error());

?>