//const url = "http://localhost:5000/vacuna/";
const url = "https://adoptapet-bwmc.onrender.com/vacuna/";

export async function getListarVacuna() {
    const res = await fetch(url);
    const data = await res.json();
    return data.vacuna;
}  

export async function agregarVacuna(vacuna){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(vacuna)
    });

    const data = await res.json();
    return data;
}

export async function actualizarVacuna(vacuna){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(vacuna)
    });

    const data = await res.json();
    return data;
}

export async function eliminarVacuna(id){
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    });

    const data = await res.json();
    return data;
}





