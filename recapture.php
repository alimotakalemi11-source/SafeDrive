<?php

$secret = "6LcXUN8sAAAAAK_rqYik5mgXsM4anDttCZ-3UGiH";

$response = $_POST['g-rechapter-response'];

$verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret="
    .$secret.
    "&response=".
    $response
);
$captcha_success = json_decode($verify);
if($capture_success->succsess){
    echo"Capture erfolgreich!";
}else{
    echo"Capture Fehlgeschlagen";
}
?>