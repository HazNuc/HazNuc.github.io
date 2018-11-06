<?php

// Configuration
$from = 'contact@nucleidev.me'; //Change email here
$sendTo = 'theholynucleus@gmail.com'; //Change email here
$subject = 'Contact Response';
$fields = array('name' => 'Name', 'discord' => 'Discord', 'email' => 'Email', 'description' => 'Description');
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';


try
{
    $emailText = "You have a new message from the contact form\n=============================\n";
    
    foreach ($_POST as $key => $value) {

            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]:\n $value\n \n";
            }
        }
    $emailText .= $_SERVER['REMOTE_ADDR'];
    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'successful', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}