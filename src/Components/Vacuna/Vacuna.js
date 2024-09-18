import React, {  useState } from 'react'
import Navegador from "../Generales/Navegador";
import TablaVacuna from './TablaVacuna';
import { getListarVacuna, eliminarVacuna, actualizarVacuna, agregarVacuna } from "../../API/VacunaAPI";
import FormVacuna from './FormVacuna';
//import { useNavigate } from "react-router-dom";

function Vacuna() {

  const [vacunas, setVacunas] = useState([]);
  const [vacuna, setVacuna] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);

  const listar = () => {
    getListarVacuna().then((data) => setVacunas(data)).catch((err) => console.log(err));
  };
  
  if(vacunas.length === 0)
    listar();

const verLista = (e) => {
  if(mostrarLista) {
    setMostrarLista(false);
  }else{
    setMostrarLista(true);
    setVacuna({
      _id: null,
      nombreVacuna: "",
      tipo: ""
  });
  }
}

const guardar = (vacuna) => {
  if(vacuna._id === null){
    agregarVacuna(vacuna).then((data) => {listar()}).catch((err) => {console.log(err)})
  }else{
    actualizarVacuna(vacuna).then((data) => {listar()}).catch((err) => {console.log(err)})
  }
  setMostrarLista(true);
}

const eliminar = (id) => {
  eliminarVacuna(id).then((data) => {
    if(data.deletedCount === 1){
      console.log(data);  
      listar();
    }
  }).catch((err) => {console.log(err)})
}

const editar = (vacuna) => {
  setVacuna(vacuna);
  setMostrarLista(false);
};

  return (
    <div>
      <Navegador/>
       {!mostrarLista && 
      <button className="btn btn-outline-success" onClick={verLista} >ver lista vacuna</button>}
      {mostrarLista &&
      <button className="btn btn-outline-success" onClick={verLista}>Crear vacuna nueva</button>}
      {!mostrarLista &&
      <div>
      <FormVacuna onSave={guardar} setVacuna={vacuna} />
      </div>}
      {mostrarLista && <TablaVacuna vacuna={vacunas} onDelete={eliminar} onView={editar} />}
 
    </div>
  )
}

export default Vacuna


