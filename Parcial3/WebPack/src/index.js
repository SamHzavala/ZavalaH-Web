
import {cuadrado} from "./modulo";
import Swal from 'sweetalert2';
// import "./index.css"



console.log("Hello World Webpack");
console.log(cuadrado(2));

document.getElementById("sw").addEventListener("click",() =>{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
})