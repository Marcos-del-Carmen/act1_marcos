function esPrimo(numero) {
    let contador = 0;
  
    let numeros = new Array(numero);
    for (let i = 0; i < numeros.length; i++) {
      numeros[i] = i + 1;
    }
  
    for (let i of numeros) {
      if (i === 1 || i === numero) {
        continue;
      }
  
      if (numero % i === 0) {
        contador++;
      }
    }
  
    return contador === 0;
}
  
function verificarPrimo() {
const numero = parseInt(document.getElementById('floatingInput').value);
const esPrimoResult = esPrimo(numero);

  if (esPrimoResult) {
    document.getElementById('cont1').style.background = 'rgb(177, 0, 0)';
    document.getElementById('cont2').style.background = 'none';
  } else if (esPrimoResult==false){
    document.getElementById('cont1').style.background = 'none';
    document.getElementById('cont2').style.background = 'rgb(0, 0, 133)';
  }
}

function esPalindromo(cadena) {
  cadena = cadena.replace(/ /g, "");
  cadena = cadena.toLowerCase();

  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena.charAt(i);
  }

  return cadena == cadenaInvertida;
}

function verificarPalindromo(){
  const palabra = document.getElementById('floatingInput').value;
  const esPaliResult = esPalindromo(palabra);

  if (esPaliResult) {
    document.getElementById('cont1').style.background = '#2c787a';
    document.getElementById('cont2').style.background = 'none';
    document.getElementById('pala1').textContent = palabra;
  } else if (esPaliResult==false){
    document.getElementById('cont1').style.background = 'none';
    document.getElementById('cont2').style.background = '#2c787a';
    document.getElementById('pala2').textContent = palabra;
  }
}

function convertir() {
  const inputCantidad = document.getElementById("inputCantidad");
  const cantidadMoneda = parseFloat(inputCantidad.value);

  const selectMoneda = document.getElementById("selectMoneda");
  const monedaSeleccionada = selectMoneda.value;

  let valorDolar;

  switch (monedaSeleccionada) {
    case "soles":
      valorDolar = 3.63;
      break;
    case "pesosMexico":
      valorDolar = 17.17;
      break;
    case "pesosColombia":
      valorDolar = 4180.52;
      break;
    default:
      console.log("Moneda inválida");
      return;
  }

  let dolares = cantidadMoneda / valorDolar;
  dolares = Math.round(dolares * 100) / 100;

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
  <div class="result-container">
    <h3>Tienes $${dolares} Dólares</h3>
  </div>
  `;
  resultContainer.style.display = "block";

}


function generar() {
  const mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let caracteres = [];
  let contrasena = '';

  caracteres = caracteres.concat(mayusculas, minusculas, numeros);

  for (let i = 0; i < 15; i++) {
    const cantidadCaracteres = caracteres.length;
    const numRandom = Math.floor(Math.random() * cantidadCaracteres);
    contrasena += caracteres[numRandom];
  }

  return contrasena;
}
  
function mostrarContrasena() {
  document.getElementsByClassName("txtContra")[0].value = generar();
  document.getElementById("contra").innerHTML = `<p class="alert-pf"> La contraseña del input es <b> ${generar()} </b></p>`;
}

let vidas; // Variable global para almacenar el número de vidas

function jugar(numVidas) {
    let numRandom = Math.floor(Math.random() * 101);
    vidas = numVidas; // Almacenar el número de vidas en la variable global
    const juegoHTML = `
      <div>
        <h2>¡ADIVINA EL NÚMERO!</h2>
        <p>Tienes ${vidas} vidas</p>
        <input type="number" id="numInput" placeholder="Ingrese un número entre 1 y 100">
        <button class="btn btn-success" onclick="adivinarNumero(${numRandom})">Adivinar</button>
      </div>

      <div id="cont-respuesta">
        <div id="cont1">
          <p style="margin: 15% 0px;">El número es más grande. Ingresa un número más grande</p>
        </div>
        <div id="cont2">
          <p style="margin: 15% 0px;">El número es más pequeño. Ingresa un número más pequeño</p>
        </div>
      </div>

      <div id="cont-win"></div>
      <div id="cont-go"></div>
    `;
    document.getElementById("gameContainer").innerHTML = juegoHTML;
    console.log("El número que estás buscando es " + numRandom);
}

function adivinarNumero(numRandom) {
  const numInput = document.getElementById("numInput");
  const numElegido = parseInt(numInput.value);
  console.log("Tienes " + vidas + " vidas");
  vidas--; // Reducir el número de vidas almacenado en la variable global

  if (numElegido < numRandom) {
    document.getElementById("cont1").style.background = "#2c787a";
    document.getElementById("cont2").style.background = "none";
    console.log("Es mayor el número " + vidas);
  } else if (numElegido > numRandom) {
    document.getElementById("cont2").style.background = "#2c787a";
    document.getElementById("cont1").style.background = "none";
    console.log("Es menor el número " + vidas);
  } else if (numElegido === numRandom) {
    document.getElementById("cont-respuesta").style.display = "none";
    document.getElementById("cont-win").innerHTML = `
      <div class="alert alert-info" role="alert" style="margin-top: 20px;">
        ¡FELICIDADES HAS GANADO!
      </div>
      <a class="btn btn-primary" href="/" role="button">Ir al inicio</a>
      <a class="btn btn-success" href="/adivinaNum" role="button">Volver a jugar</a>
    `;
    return;
    // vidas = 0;
  }

  if (vidas === 0) {
    console.log("Ya perdiste");
    document.getElementById("cont-respuesta").style.display = "none";
    document.getElementById("cont-go").innerHTML = `
      <div class="alert alert-danger" role="alert" style="margin-top: 20px;">
        Lo siento, has perdido. El número que intentaste adivinar era ${numRandom}.
      </div>
      <a class="btn btn-primary" href="/" role="button">Ir al inicio</a>
      <a class="btn btn-success" href="/adivinaNum" role="button">Volver a jugar</a>
    `;
  }
}

// function jugar(numVidas) {
//   let numRandom = Math.floor(Math.random() * 101);
//   const juegoHTML = `
//     <div>
//       <h2>¡ADIVINA EL NÚMERO!</h2>
//       <p>Tienes ${numVidas} vidas</p>
//       <input type="number" id="numInput" placeholder="Ingrese un número entre 1 y 100">
//       <button class="btn btn-success" onclick="adivinarNumero(${numVidas}, ${numRandom})">Adivinar</button>
//     </div>

//     <div id="cont-respuesta">
//       <div id="cont1">
//         <p style="margin: 15% 0px;">El número es más grande. Ingresa un número mas grande</p>
//       </div>
//       <div id="cont2">
//         <p style="margin: 15% 0px;">El número es más pequeño. Ingresa un número mas pequeño</p>
//       </div>
//     </div>  

//     <div id="cont-win">
//     </div>
//     <div id="cont-go">
//     </div>
//   `;
//   document.getElementById("gameContainer").innerHTML = juegoHTML;
//   console.log("El número que esta buscando es " + numRandom);
// }

// function adivinarNumero(vidas, numRandom) {
//   const numInput = document.getElementById("numInput");
//   const numElegido = parseInt(numInput.value);
//   console.log("tienes " + vidas + " vidas");
//   vidas--;
//   if (numElegido < numRandom) {
//     document.getElementById('cont1').style.background = '#2c787a';
//     document.getElementById('cont2').style.background = 'none';
//     // vidas--;
//     console.log("Es mayor el número "+vidas)
//   } else if (numElegido > numRandom) {
//     document.getElementById('cont2').style.background = '#2c787a';
//     document.getElementById('cont1').style.background = 'none';
//     // vidas--;
//     console.log("Es menor el número "+vidas)
//   } else if (numElegido == numRandom){
//     document.getElementById('cont-respuesta').style.display = 'none';
//     document.getElementById("cont-win").innerHTML = `
//     <div class="alert alert-info" role="alert" style="margin-top: 20px;">
//       ¡FELICIDADES HAS GANADO!
//     </div>
//     <a class="btn btn-primary" href="/" role="button">Ir al inicio</a>
//     <a class="btn btn-success" href="/adivinarNum" role="button">Volver a jugar</a>            
//     `;
//     vidas = 0;
//   } else if (vidas == 0) {
//     console.log("Ya perdiste")
//     document.getElementById('cont-respuesta').style.display = 'none';
//     document.getElementById("cont-go").innerHTML = `
//       <div class="alert alert-danger" role="alert">
//         Lo siento has pedido el número que intentaste adivinar era ${numRandom}
//       </div>
//       <a class="btn btn-primary" href="/" role="button">Ir al inicio</a>
//       <a class="btn btn-success" href="/adivinarNum" role="button">Volver a jugar</a>
//     `;
    
//   }

// }
