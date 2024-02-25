let vocales = ["a", "e", "i", "o", "u"];
let claves = ["ai", "enter", "imes", "ober", "ufat"];
let areatexto = document.getElementById ("input");
let texto = areatexto.textContent;

console.log(texto);


function encriptar(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    const indiceVocal = vocales.indexOf(letra);
    if (indiceVocal !== -1) {
      textoEncriptado += claves[indiceVocal];
    } else {
      textoEncriptado += letra;
    }
  }
  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let textoDesencriptado = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    const caracter = textoEncriptado[i];
    const indiceClave = claves.indexOf(caracter);
    if (indiceClave !== -1) {
      textoDesencriptado += vocales[indiceClave];
    } else {
      textoDesencriptado += caracter;
    }
  }
  return textoDesencriptado;
}

// Ejemplo de uso
const mensajeOriginal = "Hola ";
const mensajeEncriptado = encriptar(mensajeOriginal);
console.log("Mensaje encriptado:", mensajeEncriptado); // Salida: "H1l2 m3nd4!"

const mensajeDesencriptado = desencriptar(mensajeEncriptado);
console.log("Mensaje desencriptado:", mensajeDesencriptado); // Salida: "Hola mundo!"
