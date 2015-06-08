<?php
$data = json_decode(file_get_contents("php://input"));

$email = ($data->organisation->email);
$name = ($data->organisation->contact);
$team = ($data->team);
$subject = ($data->subject);

$subject = $organization." ".$team." project";




require 'mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mandrillapp.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'digital@arkafrica.com';                 // SMTP username
$mail->Password = 'IS7KMpDA5EmrfRScSKNQmA';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = 'arkafrica.com';
$mail->FromName = 'Ark Africa';
$mail->addAddress(''.$email);               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML


$template = file_get_contents('clienttemplate.html');

$message = str_replace('%team%', $team, $template);
$message = str_replace('%subject%', $subject, $message);
$message = str_replace('%name%', $name, $message);






$mail->Subject = ''.$subject;
$mail->Body    = ''.$message;

//echo $message;


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}