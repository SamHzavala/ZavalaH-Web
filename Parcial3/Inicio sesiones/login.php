<?php
session_start();
$user = $_POST['usuario'];
$pasw = $_POST['password'];


if (isset($_SESSION['usuario']) ) {
    printf("REANUDANDO SESION <br>");
    printf("BIENVENIDO DE NUEVO ".$_SESSION['usuario']);
} else {
    $_SESSION['usuario'] = $user;
    printf("NUEVA SESION <br>");
    printf("BIENVENIDO %s", $user);
}