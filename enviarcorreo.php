<?php
$suscriptor = htmlspecialchars($_POST['s'],ENT_QUOTES,'UTF-8');
$email = htmlspecialchars($_POST['e'],ENT_QUOTES,'UTF-8');
$contenido = htmlspecialchars($_POST['c'],ENT_QUOTES,'UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $mail->SMTPOptions = array(
		'ssl' => array(
		'verify_peer' => false,
		'verify_peer_name' => false,
		'allow_self_signed' => true
		)
	);
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'c2040088.ferozo.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'no-reply@c2040088.ferozo.com';                     // SMTP username
    $mail->Password   = 'NOpu75tade';                               // SMTP password
    $mail->SMTPSecure = 'ssl' ;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('gabitagom2015@gmail.com', 'Tijeras Solidarias');
    $mail->addAddress($email, $suscriptor);     // Add a recipient             

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'BIENVENIDO A TIJERAS SOLIDARIAS  '.$suscriptor;
    $mail->Body    = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <table style="border: 1px solid black;width: 100%;">
            <thead>
                <tr>
                    <td style="text-align: center; colspan="2">
                        <h3><b>Recibimos tu mensaje '.$suscriptor.' pronto nos contactaremos</b></h3>
                    </td>
                </tr>
                <tr>
                 
                    <td style="text-align: left;" align="justify"><span style="font-size: 15px;">'.utf8_decode($contenido).'</span></td>
                </tr>
            </thead>
        </table>
    </body>
    </html>';

    $mail->send();
    echo 1;
} catch (Exception $e) {
    echo 0;
}