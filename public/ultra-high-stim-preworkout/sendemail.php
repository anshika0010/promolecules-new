<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get email from form
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Your email where you receive subscriptions
    $to = "info@promolecules.com";

    $subject = "New Subscriber";

    $message = "
    <html>
    <head>
        <title>New Subscription</title>
    </head>
    <body>
        <h2>New Email Subscription</h2>
        <p><strong>Email:</strong> $email</p>
    </body>
    </html>
    ";

    // Headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: info@promolecules.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Subscribed successfully!";
    } else {
        echo "Error sending email.";
    }
}
?>