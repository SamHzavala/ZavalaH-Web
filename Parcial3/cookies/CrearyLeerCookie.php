<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>COOKIES</title>
</head>
<body>

<?php

    if(isset($_COOKIE['QuienVisito'])) {
        
        //printf("Samantha Zavala visito la pagina y creo cookies",$_COOKIE['QuienVisito']);

        printf("Su ultima visita fue : %s",$_COOKIE['QuienVisito']);

        $fechaHoy           = date('Y/m/d H:i:s');
        setcookie("QuienVisito",$fechaHoy,time() + (7 * 24 * 60 * 60));
    }
    else {


        printf("No se encontro cookie de ultima visita<br>");

        $fechaHoy           = date('Y/m/d H:i:s');
        $siguienteSemana    = time() + (7 * 24 * 60 * 60);
        $fechaExpira        = date('Y/m/d H:i:s', $siguienteSemana) . "<br>";

        echo '<b>Fecha de Creacion de Cookie: </b>'.$fechaHoy. '<br>';
        echo '<b>Fecha de Vencimiento de Cookie: </b>'.$fechaExpira.'<br>';

        setcookie("QuienVisito",$fechaHoy,time() + (7 * 24 * 60 * 60));
    }






?>
</body>
</html>