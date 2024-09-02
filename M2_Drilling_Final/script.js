function validarCorreo(){
    var correo = document.getElementById(correo).ariaValueMax;
    var regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(regexCorreo.toLocaleString(correo)) {
        alert('Correo no válido');
    }else{
        alert('Correo no válido');
    }
}