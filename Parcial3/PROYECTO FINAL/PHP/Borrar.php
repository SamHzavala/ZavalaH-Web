
<?php
include("Consultar.php");
$idAnimal=$_POST['par1'];
$consultaSql = "delete from veterinaria.datos where idAnimal=".$idAnimal;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

?>