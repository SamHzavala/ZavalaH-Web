<?php
include("Consultar.php");

$idAnimal=$_POST['par1'];
$nombreAnimal=$_POST['par2'];
$Dueno=$_POST['par3'];
$tipoRaza=$_POST['par4'];
$colorPelaje=$_POST['par5'];
$tamano=$_POST['par6'];
$peso=$_POST['par7'];
$fechaNac=$_POST['par8'];
$edad=$_POST['par9'];
$sexo=$_POST['par10'];
$direccion=$_POST['par11'];
$telefono=$_POST['par12'];
$email=$_POST['par13'];

$consultaSql= 
"update veterinaria.datos set 
                      nombreAnimal='$nombreAnimal', 
                      Dueno='$Dueno', 
                      tipoRaza='$tipoRaza', 
                      colorPelaje='$colorPelaje', 
                      tamano='$tamano', 
                      peso='$peso', 
                      fechaNac='$fechaNac',
                      edad='$edad',
                      sexo='$sexo',
                      direccion='$direccion',
                      telefono='$email',
                      email='$email'
                      where idAnimal=$idAnimal";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta->closeCursor();

?>