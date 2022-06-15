export function ampliarInformacionProducto(evento){

let producto={}
//lleno informacion del producto
producto.foto=evento.target.parentElement.querySelector("img").src
producto.nombre=evento.target.parentElement.querySelector("h4").textContent
producto.precio=evento.target.parentElement.querySelector("p").textContent
producto.descripcion=evento.target.parentElement.querySelector("h3").textContent

let fotoInfo=document.getElementById("fotoInfo")
fotoInfo.src=evento.target.parentElement.querySelector("img").src

let tituloFoto=document.getElementById("nombreInfo")
tituloFoto.textContent=evento.target.parentElement.querySelector("h4").textContent

let precioFoto=document.getElementById("precioInfo")
precioFoto.textContent=evento.target.parentElement.querySelector("p").textContent

let descripcionFoto=document.getElementById("descripcionInfo")
descripcionFoto.textContent=evento.target.parentElement.querySelector("h3").textContent



//devolver el producto
return producto
}