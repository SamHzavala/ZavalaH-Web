<!DOCTYPE html>
<html long="en">
<?php
    session_start();
    if ( !isset($_SESSION['usuario']) || empty($_SESSION['usuario'])) {
        header("Location: ./login.html");
    }

?>    

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</head>
<body>
    <h1>PAGINA PRINCIPAL DE APLICACION</h1>
    <button type="button"><?php echo $_SESSION['usuario'];?></button>
    
</body>
</html>