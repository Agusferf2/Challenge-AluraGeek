async function mostrarProductos() {
    const con = await fetch("http://localhost:3000/productos")

    const conConvertida = await con.json()

    return conConvertida
}

async function agregarProducto(nombre, precio, imagen) {
    const con = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })

    const conConvertida = con.json()

    return conConvertida
}

async function eliminarProducto(id) {
    const con = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {"Content-type":"application/json"}
    })

    const conConvertida = con.json()

    return conConvertida
}

export const conexionAPI = {
    mostrarProductos, agregarProducto, eliminarProducto
}   