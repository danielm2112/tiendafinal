import {llenartienda} from "./tiendallenado.js"
import {ampliarInformacionProducto} from "./ampliandoinfo.js"

//creo un producto vacio
let producto={}
//llamado a tienda llenado
llenartienda()

let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

//Rutina para ampliar informacion
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
if(evento.target.classList.contains("btn")){
    
    producto=ampliarInformacionProducto(evento)
    console.log(producto)
    modalinfo.show()
}
})

//rutina para añadir un producto al carrito de compras
let carrito=[]
let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agrregarla al producto
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad
    

    //Agregar el producto al carrito
    carrito.push(producto)

    //Pintar la capsula del carrito
   

    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
    let capsula=document.getElementById("capsula")
       
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide()
})

let limpiar=document.getElementById("botondel")
limpiar.addEventListener("click",function(){
    carrito=[]

    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})

//rutina para ver el carrito
let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(x){

    //recorrer el carrito y pimtar los productos
    let base=document.getElementById("basecarro")
    let totalPesos = document.getElementById("totalpesos")

    base.innerHTML=""

    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let nombre=document.createElement("p")
        nombre.classList.add("fw-bold")
        nombre.textContent=producto.nombre

        let precio=document.createElement("p")       
        precio.classList.add("fw-bold")
        precio.textContent=producto.precio

        let descripcion=document.createElement("p")
        descripcion.classList.add("fw-bold")
        descripcion.textContent=producto.descripcion

        let cantidad=document.createElement("p")
        cantidad.classList.add("fw-normal")
        cantidad.textContent=producto.cantidad

        let total=document.createElement("h6")
        total.classList.add("fw-normal")
        let resultado=Number(producto.cantidad)*Number(producto.precio)
        total.textContent=resultado

        producto.subtotal=resultado

        let totalenpesos = 0
        carrito.forEach(function(producto){
            totalenpesos = totalenpesos + Number(producto.subtotal)
        })
        totalPesos.textContent=totalenpesos+"$"
  
        let botonusd = document.getElementById("botondolar")

        botonusd.addEventListener ("click", function (){
        let dolar = 1 * totalenpesos / 4000 
        totalPesos.textContent= dolar+"$"
        })

        //padres e hijos
               
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(descripcion)
        columna2.appendChild(cantidad)
        columna2.appendChild(total)
        base.appendChild(fila)
    })

    modalcompra.show()
})