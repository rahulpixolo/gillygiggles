<?php

header('Access-Control-Allow-Origin: *');

      $name= $_GET['name'];
    
    if($_GET['email'] != '')
    {
        $name = $_GET['name']; 
        $email = $_GET['email'];   
        $contact= $_GET['contact'];
        $message = $_GET['message'];
        $email_from = $email;
    };
    
print_r($name);
    $email_to = 'adarsh.pixolo@gmail.com';
    
    
    if (mail('adarsh.pixolo@gmail.com',"My subject","hey hello", 'From: <'.$email_from.'>')) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        };

    
         $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'contact: ' . $contact. "\n\n" . 'Message: ' . $message;
        
        
        //print_r(mail($email_to, "INQUIRY", $body, 'From: <'.$email_from.'>'));
        
     return true;
     die;

?>