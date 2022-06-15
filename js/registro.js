import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById("botonregistro")
let modalregistro=new bootstrap.Modal(document.getElementById('mensajeinformativo'))
let textoModal=document.getElementById("mensajemodalinfo")
let formulario=document.getElementById("formularioregistro")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Exito en el registro")
    textoModal.textContent="Exito en el registro"
    modalregistro.show()
    formulario.reset()
    setTimeout(function(){
      modalregistro.hide()
    },2000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Fallo "+errorMessage)
    textoModal.textContent="Fallamos: "+errorMessage
    modalregistro.show()
    setTimeout(function(){
      modalregistro.hide()
    },2000)
  });
})