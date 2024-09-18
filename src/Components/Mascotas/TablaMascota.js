import React from 'react';

function TablaMascota(props) {
  const {mascota, onDelete, onView} = props;
  return (
    <table className="table table-striped" border={2}>
    <thead className="table-primary">
      <tr>
        <th>Nombre</th>
        <th>Raza</th>
        <th>Tipo de Mascota</th>
        <th>Descripción</th>
        <th>Vacuna</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {mascota.map((mascota) => {
       return( <tr key={mascota._id}>
          <td>{mascota.nombreMascota}</td>
          <td>{mascota.raza}</td>
          <td>{mascota.tipoMascota}</td>
          <td>{mascota.descripcion}</td>
          {mascota.vacuna.map((vacuna1) => (
              <td> {vacuna1.nombreVacuna} </td>
       ))}
          <td>
          <button className="btn btn-danger btn-sm me-2" onClick={() => {onDelete(mascota._id)}}>Eliminar</button>
            <button className="btn btn-primary btn-sm" onClick={() => {onView(mascota)}}>Editar</button>
          </td>
        </tr>)
      })}
    </tbody>
  </table>
);
}

export default TablaMascota;
