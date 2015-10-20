<?php
$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$contact    = @trim(stripslashes($_POST['contact'])); 
$message    = @trim(stripslashes($_POST['message'])); 
$to   		= 'rahul.pixolo@gmail.com';//replace with your email

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();

mail($to, $contact, $message, $headers);

die;