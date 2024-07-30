<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

 require 'src/Exception.php'; 
 require 'src/PHPMailer.php';
 require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $room = $_POST['room'];
    $type = $_POST['type'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com'; // SMTP username
        $mail->Password = 'your_password'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('your_email@example.com', 'Senator Hotel');
        $mail->addAddress('info@senatorhotel.co.tz'); // Add a recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Booking';
        $mail->Body    = "
            <h2>New Booking</h2>
            <p><strong>Room:</strong> $room</p>
            <p><strong>Type:</strong> $type</p>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Date:</strong> $date</p>
            <p><strong>Time:</strong> $time</p>
        ";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
