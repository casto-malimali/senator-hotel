<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include 'variable.php';
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.senatorhotel.co.tz';        // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                             // Enable SMTP authentication
        $mail->Username   = $email;
        $mail->Password = '$password; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 465;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('info@senatorhotel.co.tz');

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Contact Form Submission: $subject";
        $mail->Body = "<p>Name: $name</p><p>Email: $email</p><p>Message: $message</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message";

        $mail->send();
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
