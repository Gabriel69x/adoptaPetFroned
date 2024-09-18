const url = "http://localhost:5000/mascota/ ";

export async function getListarMascotas() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.mascotas;
}

export async function agregarMascotas(mascotas){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(mascotas)
    });

    const data = await res.json();
    return data;

}

export async function actualizarMascotas(mascotas){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(mascotas)
    });

    const data = await res.json();
    return data;
}

export async function eliminarMascotas(id){
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    });

    const data = await res.json();
    return data;

}

