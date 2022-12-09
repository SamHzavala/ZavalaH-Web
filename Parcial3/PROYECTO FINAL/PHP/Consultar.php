<?php

$id=$_POST['par1'];

$hostname='localhost';
$database='veterinaria'; 
$username='root';
$password='Zahs.Vrma-7';
$port='3306';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
}catch(PDOException $e) {
    echo "Error en la conexion a la BD";
    echo $e->getMessage();
    exit();
}

try{
    $consultaSql = "select * from veterinaria.datos where idAnimal=".$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
}catch(PDOException $e){
    echo "Error en la consulta a BD";
    echo $e->getMessage();
}

echo json_encode($resultado);


?>