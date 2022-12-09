$(document).ready(function() {

    document.getElementById("btnConsultaBD").addEventListener("click",function(){
      //se habilitan
      $('#btnEliminar').removeAttr("disabled");
      $('#btnEditar').removeAttr("disabled");
      $('#btnLimpiar').removeAttr("disabled");

      //habilito los campos
      $('#idAnimal').removeAttr("disabled");
      $('#nombreAnimal').removeAttr("disabled");
      $('#Dueno').removeAttr("disabled");
      $('#tipoRaza').removeAttr("disabled");
      $('#colorPelaje').removeAttr("disabled");
      $('#tamano').removeAttr("disabled");
      $('#peso').removeAttr("disabled");
      $('#fechaNac').removeAttr("disabled");
      $('#edad').removeAttr("disabled");
      $('#sexo').removeAttr("disabled");
      $('#direccion').removeAttr("disabled");
      $('#telefono').removeAttr("disabled");
      $('#email').removeAttr("disabled");

      //se cierra
      $("#btnNuevo").attr("disabled", "disabled");

      Swal.fire(
        {
          title: "INGRESE EL ID DEL ANIMAL",
          input: "text",
          showCancelButton: true,
          confirmButtonText: "CONSULTAR",
          cancelButtonText: "CANCELAR",
        }).then(resultado => {
        
        let nombre = resultado.value;
        let parid = nombre;
        
       
         $.post('../PHP/Consultar.php',{par1:parid},function(data){
           refrescar(data);
           },'json');

         
      });

    });

     document.getElementById("btnLimpiar").addEventListener("click",function(){
      completado();
      //se reinicia los botones
      reiniciar();
      Swal.fire("SE LIMPIO CORRECTAMENTE");
     });

     document.getElementById("btnNuevo").addEventListener("click",function(){
      
      //habilito los campos
      $('#idAnimal').removeAttr("disabled");
      $('#nombreAnimal').removeAttr("disabled");
      $('#Dueno').removeAttr("disabled");
      $('#tipoRaza').removeAttr("disabled");
      $('#colorPelaje').removeAttr("disabled");
      $('#tamano').removeAttr("disabled");
      $('#peso').removeAttr("disabled");
      $('#fechaNac').removeAttr("disabled");
      $('#edad').removeAttr("disabled");
      $('#sexo').removeAttr("disabled");
      $('#direccion').removeAttr("disabled");
      $('#telefono').removeAttr("disabled");
      $('#email').removeAttr("disabled");

       //desabilitar botones
       $('#btnConsultaBD').attr("disabled" , "disabled");
       $('#btnEditar').attr("disabled" , "disabled");
       $('#btnEliminar').attr("disabled" , "disabled");
 
       //habilitar botones
       $('#btnLimpiar').removeAttr("disabled");
       $('#btnAgregar').removeAttr("disabled");
 
       Swal.fire("FORMATO LISTO");
 
      });

      document.getElementById("btnAgregar").addEventListener("click",function(){
      
        let idAnimal = document.getElementById("idAnimal").value;
        var nombreAnimal = document.getElementById("nombreAnimal").value;
        var Dueno = document.getElementById("Dueno").value;
        var tipoRaza = document.getElementById("tipoRaza").value;
        var colorPelaje = document.getElementById("colorPelaje").value;
        var tamano = document.getElementById("tamano").value;
        var peso = document.getElementById("peso").value;
        var fechaNac = document.getElementById("fechaNac").value;
        var edad = document.getElementById("edad").value;
        var sexo = document.getElementById("sexo").value;
        var direccion = document.getElementById("direccion").value;
        var telefono = document.getElementById("telefono").value;
        var email = document.getElementById("email").value;
        
        $.post('../PHP/Agregar.php',{par1:idAnimal,par2:nombreAnimal,par3:Dueno,par4:tipoRaza,par5:colorPelaje,par6:tamano,par7:peso,par8:fechaNac,par9:edad,par10:sexo,par11:direccion,par12:telefono,par13:email},
        function(data){
          },'json');
          
        completado();
        Swal.fire("SE AGREGO CORRECTAMENTE");
      });

       document.getElementById("btnEliminar").addEventListener("click",function(){

        
        

        $("#idAnimal").removeAttr("disabled", "disabled");
        $('#nombreAnimal').attr("disabled", "disabled");
        $('#Dueno').attr("disabled", "disabled");
        $('#tipoRaza').attr("disabled", "disabled");
        $('#colorPelaje').attr("disabled", "disabled");
        $('#tamano').attr("disabled", "disabled");
        $('#peso').attr("disabled", "disabled");
        $('#fechaNac').attr("disabled", "disabled");
        $('#edad').attr("disabled", "disabled");
        $('#sexo').attr("disabled", "disabled");
        $('#direccion').attr("disabled", "disabled");
        $('#telefono').attr("disabled", "disabled");
        $('#email').attr("disabled", "disabled");

        

        
        let idAnimal = document.getElementById("idAnimal").value;
        $.post('../PHP/Borrar.php',{par1:idAnimal},function(data){
          completado();
        },'json');

        Swal.fire("SE ELMIMINO CORRECTAMENTE");
       

        



       });
  



       document.getElementById("btnEditar").addEventListener("click",function(){
        
         
        
       
        $('#nombreAnimal').removeAttr("disabled");
        $('#Dueno').removeAttr("disabled");
        $('#tipoRaza').removeAttr("disabled");
        $('#colorPelaje').removeAttr("disabled");
        $('#tamano').removeAttr("disabled");
        $('#peso').removeAttr("disabled");
        $('#fechaNac').removeAttr("disabled");
        $('#edad').removeAttr("disabled");
        $('#sexo').removeAttr("disabled");
        $('#direccion').removeAttr("disabled");
        $('#telefono').removeAttr("disabled");
        $('#email').removeAttr("disabled");

        let idAnimal = document.getElementById("idAnimal").value;
        let nombreAnimal = document.getElementById("nombreAnimal").value;
        let Dueno = document.getElementById("Dueno").value;
        let tipoRaza = document.getElementById("tipoRaza").value;
        let colorPelaje = document.getElementById("colorPelaje").value;
        let tamano = document.getElementById("tamano").value;
        let peso = document.getElementById("peso").value;
        let fechaNac = document.getElementById("fechaNac").value;
        let edad = document.getElementById("edad").value;
        let sexo = document.getElementById("sexo").value;
        let direccion = document.getElementById("direccion").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
  
        $.post('../PHP/Editar.php',{par1:idAnimal,par2:nombreAnimal,par3:Dueno,par4:tipoRaza,par5:colorPelaje,par6:tamano,par7:peso,par8:fechaNac,par9:edad,par10:sexo,par11:direccion,par12:telefono,par13:email},
        function(data){  
        },'json');

        Swal.fire("SE EDITO CORRECTAMENTE");


      });


     function refrescar(objeto) 
    {

        console.log(objeto);

        $('#idAnimal').val(objeto.idAnimal);
        $('#nombreAnimal').val(objeto.nombreAnimal);
        $('#Dueno').val(objeto.Dueno);
        $('#tipoRaza').val(objeto.tipoRaza);
        $('#colorPelaje').val(objeto.colorPelaje);
        $('#tamano').val(objeto.tamano);
        $('#peso').val(objeto.peso);
        $('#fechaNac').val(objeto.fechaNac);
        $('#edad').val(objeto.edad);
        $('#sexo').val(objeto.sexo);
        $('#direccion').val(objeto.direccion);
        $('#telefono').val(objeto.telefono);
        $('#email').val(objeto.email);
        

    }
    function reiniciar()
    {
    $("#idAnimal").attr("disabled", "disabled");
    $('#nombreAnimal').attr("disabled", "disabled");
    $('#Dueno').attr("disabled", "disabled");
    $('#tipoRaza').attr("disabled", "disabled");
    $('#colorPelaje').attr("disabled", "disabled");
    $('#tamano').attr("disabled", "disabled");
    $('#peso').attr("disabled", "disabled");
    $('#fechaNac').attr("disabled", "disabled");
    $('#edad').attr("disabled", "disabled");
    $('#sexo').attr("disabled", "disabled");
    $('#direccion').attr("disabled", "disabled");
    $('#telefono').attr("disabled", "disabled");
    $('#email').attr("disabled", "disabled");

    //BOTONES
    $("#btnAgregar").attr("disabled", "disabled");
    $("#btnEliminar").attr("disabled", "disabled");
    $("#btnEditar").attr("disabled", "disabled");
    $("#btnLimpiar").attr("disabled", "disabled");

    //BOTONES HABILITADOS
    $("#btnNuevo").removeAttr("disabled");
    $("#btnConsultaBD").removeAttr("disabled");
    
    }

    function completado(){
      $('#idAnimal').val("");
      $('#nombreAnimal').val("");
      $('#Dueno').val("");
      $('#tipoRaza').val("");
      $('#colorPelaje').val("");
      $('#tamano').val("");
      $('#peso').val("");
      $('#fechaNac').val("");
      $('#edad').val("");
      $('#sexo').val("");
      $('#direccion').val("");
      $('#telefono').val("");
      $('#email').val("");
    }

   

  //campos  
  $("#idAnimal").attr("disabled", "disabled");
  $('#nombreAnimal').attr("disabled", "disabled");
  $('#Dueno').attr("disabled", "disabled");
  $('#tipoRaza').attr("disabled", "disabled");
  $('#colorPelaje').attr("disabled", "disabled");
  $('#tamano').attr("disabled", "disabled");
  $('#peso').attr("disabled", "disabled");
  $('#fechaNac').attr("disabled", "disabled");
  $('#edad').attr("disabled", "disabled");
  $('#sexo').attr("disabled", "disabled");
  $('#direccion').attr("disabled", "disabled");
  $('#telefono').attr("disabled", "disabled");
  $('#email').attr("disabled", "disabled");

 //BOTONES
 $("#btnAgregar").attr("disabled", "disabled");
 $("#btnEliminar").attr("disabled", "disabled");
 $("#btnEditar").attr("disabled", "disabled");
 $("#btnLimpiar").attr("disabled", "disabled");
  
  
});