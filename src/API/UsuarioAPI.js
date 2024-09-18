const url = "http://localhost:5000/usuario/";

export async function getListarUsuario() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.usuarios;
}   
