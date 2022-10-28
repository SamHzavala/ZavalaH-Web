function ajaxFunction() {

    var ajaxResquet;
    ajaxResquet = new XMLHttpRequest();

    ajaxResquet.onreadystatechange = function() {
        if (ajaxResquet.readyState == 4)
        {document.formulario1.hora.value = ajaxResquet.responseText;}
    };

    ajaxResquet.open("GET", "CargarControl.php", true);
    ajaxResquet.send();
}