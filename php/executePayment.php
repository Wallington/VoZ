<?php

	use PayPal\Api\Amount;
	use PayPal\Api\Details;
	use PayPal\Api\ExecutePayment;
	use PayPal\Api\Payment;
	use PayPal\Api\PaymentExecution;
	use PayPal\Api\Transaction;
	
	$paymentID = $_GET['paymentId'];
	$payerID= $_GET['PayerID'];
	
	
	//first we need load the SDK Package
	require 'autoload.php';
	
	$apiContext = new PayPal\Rest\ApiContext
	(
		new PayPal\Auth\OAuthTokenCredential
		(
			'ASxxd51BupAE2Tlj11FCwhIW0BHSYcGTTH_GD6TXPpSAvTcxBnhuEBlH_FwowJw6k3JdUpUqJsVZB1IP', //ClientID
			'EA4KP-N1ILdYMMqxjNmTQHQGxtDiHsOJwqScUdvPEWC5muyxBCv-Xsg4MfD3ezJ8VyZSudktXFyOP1TK' //ClientSecret
		)
	);
	
	$apiContext->setConfig(array("mode" => "live"));
	
	$payment = Payment::get($paymentID,$apiContext);
	
	$execution = new PaymentExecution();
	
	$execution->setPayerId($payerID);
	
	try
	{
		$result = $payment->execute($execution, $apiContext);
		
		
	}
	catch (Exception $ex)
	{
		echo $ex->getCode(); 
	}
	
	
	
?>