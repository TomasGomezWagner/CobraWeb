(function(){
    var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btn");
    var validarNombre = function(e){
        if (formulario.name.value == 0){
            alert("completa el campo nombre")
            e.preventDefault();
        }
    };
    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert("completa el campo mail")
            e.preventDefault()
        }
    };
    var validarRadio = function(e){
        if (formulario.type[0].checked == true || 
        formulario.type[1].checked == true){

        }else{
            alert("completa el campo tipo de consulta")
            e.preventDefault();
        }
    };
    var validarMensaje = function(e){
        if (formulario.message.value == 0){
            alert("Completa el campo mensaje")
            e.preventDefault()
        }
    }
    var validar = function(e){
        validarNombre(e);
        validarMail(e);
        validarRadio(e);
        validarMensaje(e);
    }
    formulario.addEventListener("submit", validar);
}())