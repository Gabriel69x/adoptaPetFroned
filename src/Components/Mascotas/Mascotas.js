import React, { useEffect, useState } from 'react'
import TablaMascota from './TablaMascota'
import { actualizarMascotas, agregarMascotas, eliminarMascotas, getListarMascotas } from '../../API/MascotasAPI' 
import Navegador from "../Generales/Navegador";
import FormMascotas from './FormMascotas';

function Mascotas() {
  
  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);
  
  const listar = () => {
    getListarMascotas().then((data) => {setMascotas(data)}).catch((err) => {console.log(err)});
  }

  if(mascotas.length === 0)
    listar();

    const verLista = (e) => {
      if(mostrarLista) {
        setMostrarLista(false);
      }else{
        setMostrarLista(true);
        setMascota({
          nombreMascota: "",
          raza: "",
          tipoMascota: "",
          descripcion: "",
        });
      }
    }

    const guardar = (mascota) => {
      if(mascota._id === null){
        agregarMascotas(mascota).then((data) => {listar()}).catch((err) => {console.log(err)})
      }else{
        actualizarMascotas(mascota).then((data) => {listar()}).catch((err) => {console.log(err)})
        
      }
      setMostrarLista(true);
    }
    
    const eliminar = (id) => {
      eliminarMascotas(id).then((data) => {
        if(data.deletedCount === 1){
          console.log(data);  
          listar();
        }
          
      }).catch((err) => {console.log(err)})
    }
    
    const editar = (mascota) => {
      setMascota(mascota);
      setMostrarLista(false);
    };
    

  return (
    <div>
      <Navegador/>
       {!mostrarLista && 
      <button className="btn btn-outline-success" onClick={verLista}>ver lista Mascota</button>}
      {mostrarLista &&
      <button className="btn btn-outline-success" onClick={verLista}>Crear Mascota nueva</button>}
      {!mostrarLista &&
      <div>
      <FormMascotas onSave={guardar} setMascota={mascota}/>
      </div>}
      {mostrarLista &&
        <TablaMascota mascota={mascota} onDelete={eliminar} onView={editar} />} 
    </div>
  )
}

export default Mascotas