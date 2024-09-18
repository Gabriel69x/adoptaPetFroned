import React, { useEffect, useState } from 'react'
import TablaUsuario from './TablaUsuario';
import { actualizarUsuario, agregarUsuarios, eliminarUsuario, getListarUsuario } from '../../API/UsuarioAPI';
import Navegador from "../Generales/Navegador";
import { useNavigate } from "react-router-dom";
//import FormUsuario from "./FormUsuario";

function Usuarios() {
  const navegar = useNavigate();
  const [usuarioActivo, setUsuarioActivo] = useState(null)

  useEffect(() => {
    setUsuarioActivo(localStorage.getItem("usuarioActivo"));
    if (localStorage.getItem("usuarioActivo") == null)
      navegar("/login")
  }, [navegar, usuarioActivo])

  //const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(true);

  const listar = () => {
    getListarUsuario().then((data) => { setUsuario(data) }).catch((err) => { console.log(err) });
  }


if (usuario.length === 0)
  listar();

const verLista = (e) => {
  if (mostrarLista) {
    setMostrarLista(false);
  } else {
    setMostrarLista(true);
    setUsuario({
      _id: null,
      nombre: "",
      cedula: "",
      correo: "",
      contrasena: ""
    })
  }
}


const guardar = (usuario) => {
  if (usuario.id === null) {
    agregarUsuarios(usuario).then((data) => { listar() }).catch((err) => { console.log(err) })
  } else {
    actualizarUsuario(usuario).then((data) => listar()).catch((err) => { console.log(err) })
  }
  setMostrarLista(true);
}

const eliminar = (id) => {
  eliminarUsuario(id).then((data) => {
    if (data.deleteCount === 1)
      listar();
  }).catch((err) => { console.log(err) })
}

const ver = (usuario) => {
  setUsuario(usuario);
  setMostrarLista(false);
}

return (
  <div>
    <Navegador/>
    {!mostrarLista && <button className="btn btn-secondary" onClick={verLista}>Ver lista de usuario</button>}
    {mostrarLista && <button className="btn btn-secondary" onClick={verLista}>Crear nuevo Usuario</button>}
    {!mostrarLista && 
    <div>
    <TablaUsuario onSave={guardar} setUsuario={usuario}/>
    </div>}
    {mostrarLista && <TablaUsuario usuario={usuario} onDelete={eliminar} onView={ver}/>}
  </div>
)
}


export default Usuarios