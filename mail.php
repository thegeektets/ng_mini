<?php
$data = json_decode(file_get_contents("php://input"));

$organization = ($data->organisation->name);
$email = ($data->organisation->email);
$phone = ($data->organisation->telephone);
$name = ($data->organisation->contact);
$timeframe = ($data->project->timeframe);
$budget = ($data->project->budget);
$body = ($data->project->details);
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

$mail->From = ''.$email;
$mail->FromName = ''.$organization;
$mail->addAddress('griffin@arkafrica.com');               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML


$template = file_get_contents('template.html');

$message = str_replace('%team%', $team, $template);
$message = str_replace('%subject%', $subject, $message);
$message = str_replace('%body%', $body, $message);
$message = str_replace('%timeframe%', $timeframe, $message);
$message = str_replace('%budget%', $budget, $message);
$message = str_replace('%organization%', $organization, $message);
$message = str_replace('%name%', $name, $message);
$message = str_replace('%phone%', $phone, $message);
$message = str_replace('%email%', $email, $message);






$mail->Subject = ''.$subject;
$mail->Body    = ''.$message;

//echo $message;


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}