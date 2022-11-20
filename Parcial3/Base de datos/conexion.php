<?php 

$servidor = "localhost";
$basedatos = "veterinaria";
$usuario = "root";
$password = "Zahs.Vrma-7";

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("No se pudo conectar a localhost");
$consulta = "select * from veterinaria.datos";
$registros = mysqli_query($con, $consulta) or die ("Problemas en el select");

// // RESULTADO COMO ARRAY ASOCIATIVO 
// while ($result = mysqli_fetch_array($registros, MYSQLI_ASSOC)) {
//     printf($result['nombre'].' '.$result['tipoRaza'].'<br>');

// }

// // RESULTADO COMO ARRAY NUMERICO 
// while($result = mysqli_fetch_array($registros,MYSQLI_NUM)) {
//     printf($result[0].' '.$result[1].'<br>');
// }

// RESULTADO DE LA CONSULTA COMO UNA MATRIZ
$result = mysqli_fetch_all($registros);

mysqli_close($con);
echo json_encode($result);

?>