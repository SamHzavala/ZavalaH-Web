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

try {
$consultaSql= 
"insert into veterinaria.datos(idAnimal,
                                nombreAnimal, 
                                Dueno, 
                                tipoRaza, 
                                colorPelaje, 
                                tamano, 
                                peso,
                                fechaNac,
                                edad,
                                sexo,
                                direccion,
                                telefono, 
                                email) 
values('$idAnimal','$nombreAnimal', '$Dueno', '$tipoRaza', '$colorPelaje', '$tamano', '$peso','$fechaNac','$edad','$sexo','$direccion','$telefono','$email')";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>