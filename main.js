
function enviarConsulta() {

    var form = document.formContacto;

    if (validarCampos(form)) {
        alert(form.nombre.value + ", muchas gracias por su consulta!!!\nMe pondre en contacto a la brevedad posible.");
        form.submit();
    }

}

function validarCampos(form) {

    if (form.nombre.value === null || form.nombre.value === "") {
        alert("El campo Nombre es requerido!");
        form.nombre.focus();
        return false;
    }

    if (form.correo.value === null || form.correo.value === "") {
        alert("El campo Correo elétrónico es requerido!");
        form.correo.focus();
        return false;
    }

    if (form.mensaje.value === null || form.mensaje.value === "") {
        alert("El campo Mensaje es requerido!");
        form.mensaje.focus();
        return false;
    }

    return true;
}
