<?php

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$email_subject = "Cool Movie Merch Newsletter Sign-Up!";
$email_body = "The new subscriber email adress is $email. Excellent! 😎😎😎";
$to = "samjohnreid@gmail.com";

mail($to, $email_subject, $email_body);

header("Location: /newsletter/?email=$email");

?>