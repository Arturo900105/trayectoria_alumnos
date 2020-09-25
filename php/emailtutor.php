<?php

    // Uncomment next line if you're not using a dependency loader (such as Composer)
    //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
    //php/emailtutor.php


    require "sendgrid-php/sendgrid-php.php";
    use SendGrid\Mail\Mail;

    $API_KEY = "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";
    $sendNombre = $_POST['nombre_tutor']." ".$_POST['apepat_tutor']." ".$_POST['apemat_tutor'];
    $sendEmail = $_POST['email'];

    $email = new Mail();
    $email->setFrom("ga.sanzfons@gmail.com", "CITA de ITSP");
    $email->setSubject("Bienvenido a la plataforma del Tutor");
    $email->addTo($sendEmail, $sendNombre);
    $email->addContent("text/plain", "Este es su login para acceder a la plataforma de la CITA");
    $email->addContent("text/html", "<strong>PRUEBA EXITOSA</strong>");
    //$email->setTemplateId("d-6cccc027468d4597bd92b07f039c2406");

    $sendgrid = new \SendGrid($API_KEY);
    try {
        $response = $sendgrid->send($email);
        echo "<pre>";
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        echo "</pre>";
    } catch (Exception $e) {
        echo 'Caught exception: '.  $e->getMessage(). "\n";
    }
?>