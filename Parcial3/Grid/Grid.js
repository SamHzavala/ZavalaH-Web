$(document).ready(function(){         

// var clients = [
//     { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
//     { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
//     { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
//     { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
//     { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
// ];

// var countries = [
//     { Name: "", Id: 0 },
//     { Name: "United States", Id: 1 },
//     { Name: "Canada", Id: 2 },
//     { Name: "United Kingdom", Id: 3 }
// ];

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/ZavalaH-Web/Parcial3/Grid/conexion.php",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);

    let tabla = JSON.parse(response);
    console.log(tabla);

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
    
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
    
        data: tabla,
    
        fields: [
            { name: "IdAnimal",     type: "text",   width: 150, validate: "required"     },
            { name: "nombreAnimal", type: "text",   width: 150                          },
            { name: "Dueno",        type: "text",   width: 200                          },
            { name: "tipoRaza",     type: "text",   width: 200                          },
            { name: "colorPelaje",  type: "text",   width: 200                          },
            { name: "tamano",       type: "text",   width: 150, validate: "required"    },
            { name: "peso",         type: "number", width: 50                           },
            { name: "fechaNac",     type: "text",   width: 200                          },
            { name: "edad",         type: "number", width: 200                          },
            { name: "sexo",         type: "text",   width: 200                          },
            { name: "direccion",    type: "text",   width: 200                          },
            { name: "telefono",     type: "number", width: 200                          },
            { name: "email",        type: "text",   width: 300                          },
            { type: "control" }
        ]
    });


  });



});