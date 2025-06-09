function verificarDatos(){
    const error = false;

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;
    const contrasenaConfirmar = document.getElementById("ccontrasena").value;

    const nombreError = document.getElementById("msg-error-nombre");
    const apellidoError = document.getElementById("msg-error-apellido");
    const correoError = document.getElementById("msg-error-email");
    const contrasenaError = document.getElementById("msg-error-contrasena");
    const contrasenaConfirmarError = document.getElementById("msg-error-ccontrasena");
    nombreError.style.display = "none";
    apellidoError.style.display = "none";
    correoError.style.display = "none";
    contrasenaError.style.display = "none";
    contrasenaConfirmarError.style.display = "none";

    if(nombre === ""){
        nombreError.innerHTML = "El nombre es obligatorio";
        nombreError.style.display = "block";
        error = true;
        return false;
    }
    if(apellido === ""){
        apellidoError.innerHTML = "El apellido es obligatorio";
        apellidoError.style.display = "block";
        error = true;
        return false;
    }
    if(correo === ""){
        correoError.innerHTML = "El correo es obligatorio";
        correoError.style.display = "block";
        error = true;
        return false;
    }else if(!esEmailValido(correo)){
        correoError.innerHTML = "El correo no es válido";
        correoError.style.display = "block";
        error = true;
        return false;
    }
    if(contrasena === ""){
        contrasenaError.innerHTML = "La contraseña es obligatoria";
        contrasenaError.style.display = "block";
        error = true;
        return false;
    }else if(contrasena.length < 6){
        contrasenaError.innerHTML = "La contraseña debe tener al menos 6 caracteres";
        contrasenaError.style.display = "block";
        error = true;
        return false;
    }
    if(contrasenaConfirmar === ""){
        contrasenaConfirmarError.innerHTML = "La confirmación de la contraseña es obligatoria";
        contrasenaConfirmarError.style.display = "block";
        error = true;
        return false;
    }else if(contrasena !== contrasenaConfirmar){
        contrasenaConfirmarError.innerHTML = "Las contraseñas no coinciden";
        contrasenaConfirmarError.style.display = "block";
        error = true;
        return false;
    }

    if(error){
        return false;
    }else{
        window.location.href = "../../index.html";
        // LLAMAR A LA API PARA REGISTRAR AL USUARIO
    }
}


function esEmailValido(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }