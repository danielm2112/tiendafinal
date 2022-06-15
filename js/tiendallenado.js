export function llenartienda(){

let productosBD = [
    {foto: `img/tienda1.jpg`, nombre: "Camisetas Personal", precio: 45000, descripcion:"Camisetas personalisadas"},
    {foto: `img/tienda2.jpg`, nombre: "Busos Personales", precio: 120000, descripcion:"Busos Personalisados"},
    {foto: `img/tienda3.jpg`, nombre: "Camisetas de Futbol", precio: 74000, descripcion:"Camisetas de los clubes"},
    {foto: `img/tienda4.jpg`, nombre: "Balones", precio: 45000, descripcion:"Balones de la competicion"},
    {foto: `img/tienda5.jpg`, nombre: "Accesorios", precio: 58000, descripcion:"Termos, Vasos, ETC"},
    {foto: `img/tienda6.jpg`, nombre: "Recordatorios", precio: 30000, descripcion:"Llaveros, Juguetes"},
    {foto: `img/tienda11.jpg`, nombre: "Objetos Memorables", precio: 135000, descripcion:"Guayos, Balones, cintas de capitan"},
    {foto: `img/tienda8.jpg`, nombre: "Posters", precio: 8000, descripcion:"Poster de jugadores"},
    {foto: `img/tienda14.jpg`, nombre: "Albums", precio: 15000, descripcion:"Album de la competicion"},
    {foto: `img/tienda13.jpg`, nombre: "Cartas", precio: 10000, descripcion:"Cartas de los jugadores"},
]

//Necesito recorrer un arreglar en JS

//1. Creo una variable para almacenar la base sobre la cual voy a pintar
let fila= document.getElementById("fila")
productosBD.forEach(function(producto){
    /*console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
    console.log(producto.descripcion)
    console.log(producto.boton)*/

    //pintando etiquetas

    //div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    tarjeta.classList.add("bg-info")
    tarjeta.classList.add("border-primary")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4 con la clase text center
    let nombre=document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.classList.add("fw-normal")
    nombre.textContent=producto.nombre

    let precio=document.createElement("p")
    precio.classList.add("text-center")
    precio.classList.add("fw-normal")
    precio.textContent=producto.precio

    let descripcion=document.createElement("h3")
    descripcion.classList.add("text-center")
    descripcion.classList.add("fw-bold")
    descripcion.textContent=producto.descripcion

    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-primary","mx-4","mb-4")   
    boton.classList.add("btn-primary")
    boton.textContent="Abrir producto"
    

    //3. Padres e hijos
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    

    
})}