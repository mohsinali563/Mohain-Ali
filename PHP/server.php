<?php
header('Access-Control-Allow-Origin: http://localhost:3000')
if ($_SERVER["REQUEST_METHOD"] == "SEND") {
  $to = "mohsinali.556380@gmail.com";
  $subject = "New Message from Website";
  $username = $_SEND["username"];
  $email = $_SEND["email"];
  $message = $_SEND["message"];

  $headers = "From: $email" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";

  $mail_body = "Name: $username\n";
  $mail_body .= "Email: $email\n\n";
  $mail_body .= "Message:\n$message";

  mail($to, $subject, $mail_body, $headers);

  // Redirect to a thank you page or display a success message
  header("Location: thank_you.html"); // Create a thank_you.html page
}
?>
