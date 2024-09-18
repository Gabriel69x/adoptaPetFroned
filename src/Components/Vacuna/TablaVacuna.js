import React from "react";

function TablaVacuna(props) {
  const {vacuna, onDelete, onView} = props;
  return (
    <table className="table table-bordered table-hover mt-3 rounded">
  <thead className="table-primary">
    <tr>
      <th className="text-center">Nombre</th>
      <th className="text-center">Tipo de Vacuna</th>
      <th className="text-center">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {vacuna.map((vacuna) => (
      <tr key={vacuna._id}>
        <td className="text-center">{vacuna.nombreVacuna}</td>
        <td className="text-center">{vacuna.tipo}</td>
        <td className="text-center">
          <button className="btn btn-danger btn-sm me-2" onClick={() => onDelete(vacuna._id)}>
            Eliminar
          </button>
          <button  className="btn btn-primary btn-sm" onClick={() => onView(vacuna)}>
            Editar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default TablaVacuna;
