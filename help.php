<?php
	header('Access-Control-Allow-Origin: *');
    
//      $name= $_GET['name'];
    
    if($_GET['message'] != '')
    {
         $subject= $_GET['subject']; 
         $message = $_GET['message'];
         $email_from = 'gillygiggles@gillygiggles.com';
    };
    
    $to = 'adarsh.pixolo@gmail.com';
    
    
    if (mail($to,$subject,$message, 'From: <'.$email_from.'>')) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        };

    
          $body = 'subject: ' . $subject. "\n\n" . 'Message: ' . $message;
        
        
        //print_r(mail($email_to, "INQUIRY", $body, 'From: <'.$email_from.'>'));
        

    return true;

    die;
  

?>