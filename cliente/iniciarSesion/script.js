function verificarDatos(){
    const error = false;

    const usuario = document.getElementById("user").value;
    const contrasena = document.getElementById("contrasena").value;

    const usuarioError = document.getElementById("msg-error-usuario");
    const contrasenaError = document.getElementById("msg-error-contrasena");

    usuarioError.style.display = "none";
    contrasenaError.style.display = "none";

    if(usuario === ""){
        usuarioError.innerHTML = "El usuario es obligatorio";
        usuarioError.style.display = "block";
        error = true;
        return false;
    }
    if(!esEmailValido(usuario)){
        usuarioError.innerHTML = "El usuario no es válido";
        usuarioError.style.display = "block";
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