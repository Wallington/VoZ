<?php
	$email = $_GET['email']; //when the page is request the server to post gathers the email data
	$name  = $_GET['name'];  //when the page is request the server to post gathers the full name data
	$subject = "requesting a VoZ Alpha Key";        //set the subject for email to be sent when approve by the code	 
	$message = $name . " is requestiong a VoZ Alpha key \r\n Name: " . $name . "\r\n Email: " . $email ;	 //when the page is request the server to post gathers the message data
	$name = preg_replace('/[^a-zA-Z0-9_ %\[\]\.\(\)%&-]/s', '', $name);
	if (!preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/",$email)) 
	{
		$email = NULL;
	}
	//print($name . " " . $email . " " . $message);
	if($name != NULL && $email != NULL )
	{
		$feedback = 'success';
		$eMessage = "Your message has been sent. Please wait for 1 to 2 business days before try again.";
		mail('contact@foreverinteractive.com',$subject, $message, "From: noreplay@foreverinteractive.com" );	
	}
	else
	{
		$feedback = 'error';
		$eMessage = 'One or more feilds was empty, please try again.';
		
	}
	
	echo '[{"' . 'message' . '": "' . $eMessage . '","type":"'. $feedback . '"}]';	
?>