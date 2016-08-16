<?php
	
	$packName = $_GET['packName']; //get the package name to which person want reserve
	$emailTo = $_GET['emailTo'];
	
	if(mail("sean.obrien@foreverinteractive.com","Failed to upload customer founderPackage to reserveFounderPacks table in DB Email: " . $emailTo . " and package: " . $packName ))
	{
		echo "sent";	
	}
	else
	{
		echo "Nope";	
	}
	
	
	/*require('connect.db.php'); //we need to connect to db
	
	 //and which email we should email the code to.
	
	$q = "INSERT INTO reserveFounderPacks (packName, email) VALUES ('" . $packName . "','" . $emailTo . "')";
	
	if(!mysqli_query($dbc, $q))
	{
		//if fail to upload we still make sure have record of the purchas also message why did failed.
		
	}*/
	
?>