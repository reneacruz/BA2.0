const productos = [
    {
        id: 1,
        nombre: "Pouch Homemade Delights River Salmon Gato Adulto",
        imagen: "./imagenes/homemadedelightssalmon.webp",
        precio: 390,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }

    },
    {
        id: 2,
        nombre: "Alimento Pro Plan Active Mind Perro Mediano y Grande",
        imagen: "./imagenes/purina_activemind.png",
        precio: 11770,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    },
    {   
        id: 3,
        nombre: "Alimento Excellent Urinary Arroz y Pollo para Gato",
        imagen: "./imagenes/purina_excellent_urinary.webp",
        precio: 2205,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }
    },
    {   
        id: 4,
        nombre: "Alimento Excellent Skin Care Cordero para Perro Adulto",
        imagen: "./imagenes/purina_excellent.webp",
        precio: 3400,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    },
    {   
        id: 5,
        nombre: "Rollo Bolsitas Cancat",
        imagen: "./imagenes/bolsas-eco-cancat.jpg",
        precio: 600,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    },
    {
        id: 6,
        nombre: "Caja Mon Ami Dental Milk Stick",
        imagen: "./imagenes/caja-mon-ami-dental-milk-stick.png",
        precio: 1106,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    },
    {
        id: 7,
        nombre: "Piedras Sanitarias Sanicat Strong Clumps",
        imagen: "./imagenes/piedras-sanitarias-sanicat.webp",
        precio: 1460,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }
    },
    {
        id: 8,
        nombre: "Piedras Sanitarias Alta Gama Absorsol",
        imagen: "./imagenes/piedritas-sanitarias-absorsol-alta-gama-negra-.webp",
        precio: 800,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }
    },
    {
        id: 9,
        nombre: "Pelota Pawise Crinkle Para Gato",
        imagen: "./imagenes/pelota-pawise-crinkle-para-gato.png",
        precio: 320,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }
    },
    {
        id: 10,
        nombre: "Soga Cancat Con Nudos",
        imagen: "./imagenes/soga-cancat-con-nudos.webp",
        precio: 1350,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    },
    {
        id: 11,
        nombre: "Varita Zootec Para Gato",
        imagen: "./imagenes/varita-zootec-para-gato-n2-con-plumas-y-sonajero.webp",
        precio: 693,
        categoria: {
            nombre: "Gatos",
            id:"Gatos"
        }
    },
    {
        id: 12,
        nombre: "Juguete Kong Classic II",
        imagen: "./imagenes/juguete-kong-classic.webp",
        precio: 6000,
        categoria: {
            nombre: "Perros",
            id:"Perros"
        }
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML= "";
    productosElegidos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
                <span class="titulo-item">${producto.nombre}</span>
                <img src="${producto.imagen}" alt="" class="img-item">
                <span class="precio-item">$${producto.precio}</span>
                <button class="boton-item">Comprar</button>
        `;
        contenedorProductos.append(div);
    })

}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton =>boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
        const productosBoton = productos.filter(producto=>producto.categoria.id === e.currentTarget.id)
        cargarProductos(productosBoton);
        }else {
            cargarProductos(productos);
        }

    })
})
