const campoMensaje = document.querySelector("#texto-mensaje");
const contenedorImagen = document.querySelector(".container-resultado");
const contenedorMensajes = document.querySelector(".campo-mensaje");
const btnCopiar = document.querySelector(".copiar");

const matrizEncriptacion = [
    ["e", "enter"], //indice 0
    ["i", "imes"],  //indice 1
    ["a", "ai"],    //indice 2
    ["o", "ober"],  //indice 3
    ["u", "ufat"]   //indice 4
]


function condicionesIniciales() {
    document.querySelector("#texto-mensaje").setAttribute()
}


function encriptarTexto() {
    let textoUsuarioEl = document.getElementById("valorUsuario");
    let textoUsuario = textoUsuarioEl.value.toLowerCase();

    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if (textoUsuario.includes(matrizEncriptacion[i][0])) {
            textoUsuario = textoUsuario.replaceAll(
                matrizEncriptacion[i][0],
                matrizEncriptacion[i][1],
            )
        }
    }

    textoUsuarioEl.value = "";

    return textoUsuario;
}

function desencriptarTexto() {
    let textoUsuarioEl = document.getElementById("valorUsuario");
    let textoUsuario = textoUsuarioEl.value.toLowerCase();

    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if (textoUsuario.includes(matrizEncriptacion[i][1])) {
            textoUsuario = textoUsuario.replaceAll(
                matrizEncriptacion[i][1],
                matrizEncriptacion[i][0],
            )
        }
    }

    textoUsuarioEl.value = "";

    return textoUsuario;
}

function btnEncriptar() {
    const textoEncriptado = encriptarTexto();
    campoMensaje.innerHTML = textoEncriptado;
    campoMensaje.style.display = "block";
    contenedorImagen.style.backgroundImage = "none";
    contenedorMensajes.style.display = "none";
    btnCopiar.style.display = "block";

}

function btnDesencriptar() {
    const textoEncriptado = desencriptarTexto();
    campoMensaje.innerHTML = textoEncriptado;
    campoMensaje.style.display = "block";
    contenedorImagen.style.backgroundImage = "none";
    contenedorMensajes.style.display = "none";
    btnCopiar.style.display = "block";
}

function textCopiar() {
    navigator.clipboard.writeText(campoMensaje.textContent);

}
