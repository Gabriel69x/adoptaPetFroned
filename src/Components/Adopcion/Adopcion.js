import React, { useState } from 'react'
import TablaAdopcion from "./TablaAdopcion";
import { getListarAdopcion, agregarAdopcion, actualizarAdopcion, eliminarAdopcion} from "../../API/AdopcionAPI";
//import { useNavigate } from "react-router-dom";
import Navegador from '../Generales/Navegador';
import FormAdopcion from './FormAdopcion';

function Adopcion() {

  const [adopcions, setAdopcions] = useState([]);
  const [adopcion, setAdopcion] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);

  const listar = () => {
    getListarAdopcion().then((data) => {setAdopcions(data)}).catch((err) => {console.log(err)});
  }

  if(adopcions.length === 0)
    listar();

  const verLista = (e) => {
    if(mostrarLista){
      setMostrarLista(false);
    }else{
      setMostrarLista(true);
      setAdopcion({
        _id: null,
        razonAdopcion: ""
      });
    }
  }

  const guardar = (adopcion) => {
    
    if(adopcion._id === null) {
      agregarAdopcion(adopcion).then((data) => {listar(); }).catch((err) => {console.log(err)})
    }else{
      actualizarAdopcion(adopcion).then((data) => {listar()}).catch((err) => {console.log(err)} )
    }
    setMostrarLista(true);
  }

  const eliminar = (id) => {
    eliminarAdopcion(id).then((data) => {
      if(data.deletedCount === 1) {
        console.log(data);
        listar();
      }
    }).catch((err) => {console.log(err)})
  } 

  const editar = (adopcion) =>{
    setAdopcion(adopcion);
    setMostrarLista(false);
  };

  return (
    <div>
      <Navegador/>
        {!mostrarLista &&
        <button className="btn btn-outline-success" onClick={verLista}>Ver lista de Adopcion</button>}
        {mostrarLista && 
        <button className="btn btn-outline-success" onClick={verLista}>Crear una nueva Adopcion</button>}
        {!mostrarLista && 
        <div>
            <FormAdopcion onSave={guardar} setAdopcion={adopcion} />
        </div>}
        {mostrarLista && <TablaAdopcion adopcion={adopcions} onDelete={eliminar} onView={editar} />}
    </div>
  )
}

export default Adopcion