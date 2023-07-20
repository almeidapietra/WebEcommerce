document.getElementById("button-addon2").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("email").value.indexOf("@") == -1 || 
        document.getElementById("email").value.indexOf(".") == -1 || 
        document.getElementById("email").value == "" || 
        document.getElementById("email").value == null) {
        alert("Por favor, indique um e-mail válido,")
    }else{
        alert("Prontinho! Você receberá as novidades e promoções por email.")
    }
}