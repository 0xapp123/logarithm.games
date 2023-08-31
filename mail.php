<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$email = $_POST['email'];
$formname = $_POST['formname'];

// Формирование самого письма
$title = "Заявка с сайта LOGARITHM";
$body = "<h2>Данные из формы</h2>";
$body.='<p><b>E-mail:</b> '.$email.'</p></br>
<p><b>IP:</b> '.$_SERVER['REMOTE_ADDR'].'</p></br>
<p><b>User-агент:</b> '.$_SERVER['HTTP_USER_AGENT'].'</p>';

if(trim(!empty($formname))) {
    $body.='<p><b>Форма:</b> '.$formname.'</p>';
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.office365.com'; // SMTP сервера вашей почты
    $mail->Username   = 'loggsite@outlook.com'; // Логин на почте
    $mail->Password   = 'Myz6625CXy'; // Пароль на почте
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('loggsite@outlook.com', 'Logarightm Games'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('info@logarithm.games');  
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    if (!empty($_FILES['file']['tmp_name'])) {
        //Путь файла загрузки
        $filePath = __DIR__ . "/uploads/" . $_FILES['file']['name'];
        //Грузим файл
        if (copy($_FILES['file']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body.='<b>Кейс в приложении</b>';
            $mail->addAttachment($fileAttach);
            $rfile[] = "Файл прикреплён";
        }
    }

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}
} 
catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
