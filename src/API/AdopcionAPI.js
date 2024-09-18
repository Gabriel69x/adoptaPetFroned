const url = "http://localhost:5000/adopcion/";

export async function getListarAdopcion() {
    const res =await fetch(url);
    const data = await res.json();
    return data.adopcion;
}

export async function agregarAdopcion(adopcion){
    console.log(adopcion)
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(adopcion)
    });

    const data = await res.json();
    console.log(data)
    return data;
}

export async function actualizarAdopcion(adopcion){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(adopcion)
    });

    const data = await res.json();
    return data;
}

export async function eliminarAdopcion(id){
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    });

    const data = await res.json();
    return data;
}